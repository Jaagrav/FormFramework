import React, { useRef, useCallback, useMemo } from "react";
import { ChevronDown, ChevronRight, Info, MoreHorizontal } from "lucide-react";
import FormField from "./FormField";
import { FormSectionProps, FormField as FormFieldType } from "../types";
import { cn } from "@/lib/utils";
import { calculateSectionStats } from "../utils";

const FormSection: React.FC<FormSectionProps> = ({
  sectionId,
  section,
  expanded,
  active,
  editMode,
  changes,
  onSectionToggle,
  onFieldChange,
  onFieldReset,
  onQuickOptionSelect,
  customRender
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleSectionToggle = useCallback(() => {
    onSectionToggle(sectionId);
  }, [sectionId, onSectionToggle]);

  const handleFieldChange = useCallback((fieldKey: string, value: any) => {
    const fullKey = `${sectionId}.${fieldKey}`;
    onFieldChange(fullKey, value);
  }, [sectionId, onFieldChange]);

  const handleFieldReset = useCallback((fieldKey: string) => {
    const fullKey = `${sectionId}.${fieldKey}`;
    onFieldReset(fullKey);
  }, [sectionId, onFieldReset]);

  const handleQuickOptionSelect = useCallback((fieldKey: string, value: string) => {
    const fullKey = `${sectionId}.${fieldKey}`;
    onQuickOptionSelect(fullKey, value);
  }, [sectionId, onQuickOptionSelect]);

  if (customRender) {
    return customRender({
      sectionId,
      section,
      expanded,
      active,
      editMode,
      changes,
      onSectionToggle: handleSectionToggle,
      onFieldChange: handleFieldChange,
      onFieldReset: handleFieldReset,
      onQuickOptionSelect: handleQuickOptionSelect
    });
  }

  const dynamicStats = useMemo(() => {
    return calculateSectionStats(section, changes);
  }, [section, changes]);
  
  const { title, tooltip, layout, fields, module } = section;
  
  if (module === 'codes') {
    return (
      <div 
        ref={sectionRef}
        className="bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"
        data-section-id={sectionId}
      >
        <div 
          className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
          onClick={handleSectionToggle}
        >
          <div className="flex items-center">
            <h2 className="text-base font-medium text-green-600 dark:text-green-500">{title} {dynamicStats && `(${dynamicStats.filled}/${dynamicStats.total})`}</h2>
            {tooltip && (
              <div className="relative ml-2 group">
                <div className="cursor-help">
                  <Info className="h-4 w-4 text-slate-400" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 w-48 p-2 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {tooltip}
                </div>
              </div>
            )}
          </div>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-slate-400 transition-transform",
              expanded && "transform rotate-180"
            )}
          />
        </div>
        
        <div className={cn(
          "overflow-hidden transition-all duration-200",
          !expanded && "hidden"
        )}>
          <div className="border-t border-slate-100 dark:border-slate-700"></div>
          <div className="p-4">
            <div className="mb-4 grid grid-cols-4 gap-4 text-sm font-medium text-slate-700 dark:text-slate-200">
              <div>Code</div>
              <div>%</div>
              <div>Freq</div>
              <div className="text-right">Actions</div>
            </div>
            
            {Object.entries(fields).map(([codeKey, codeData]) => {
              const name = codeData.friendlyName || codeData.name || codeKey;
              const frequencyKey = `Codes.${codeKey}.frequency`;
              const coverageKey = `Codes.${codeKey}.coveragePercentage`;
              
              const frequencyValue = changes[frequencyKey] !== undefined 
                ? changes[frequencyKey] 
                : (codeData.frequency?.value || '');
              
              const coverageValue = changes[coverageKey] !== undefined 
                ? changes[coverageKey] 
                : (codeData.coveragePercentage?.value || '');
              
              return (
                <div key={codeKey} className="py-2 border-b border-slate-100 dark:border-slate-700 last:border-b-0">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 text-amber-500">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-slate-900 dark:text-slate-100">{name} ({codeKey})</span>
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">{coverageValue || '-'}</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">{frequencyValue || '-'}</div>
                    <div className="flex justify-end">
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  const sortedFields = Object.entries(fields).sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });

  return (
    <div 
      ref={sectionRef}
      className="bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"
      data-section-id={sectionId}
    >
      <div 
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
        onClick={handleSectionToggle}
      >
        <div className="flex items-center">
          <h2 className="text-base font-medium text-green-600 dark:text-green-500">{title} {dynamicStats && `(${dynamicStats.filled}/${dynamicStats.total})`}</h2>
          {tooltip && (
            <div className="relative ml-2 group">
              <div className="cursor-help">
                <Info className="h-4 w-4 text-slate-400" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 w-48 p-2 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-slate-400 transition-transform",
            expanded && "transform rotate-180"
          )}
        />
      </div>
      
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        !expanded && "hidden"
      )}>
        <div className="border-t border-slate-100 dark:border-slate-700"></div>
        <div className={cn(
          "p-4 grid grid-cols-1 gap-6",
          layout === 'full' && "md:grid-cols-2",
          layout === 'left' && "md:grid-cols-1",
          layout === 'right' && "md:grid-cols-1"
        )}>
          {sortedFields.map(([fieldKey, field]) => {
            if (!field.interface?.type) return null;
            
            const fullKey = `${sectionId}.${fieldKey}`;
            const currentValue = changes[fullKey] !== undefined ? changes[fullKey] : field.value;
            
            return (
              <FormField
                key={fullKey}
                field={field as FormFieldType}
                value={currentValue}
                editMode={editMode}
                onChange={(value) => handleFieldChange(fieldKey, value)}
                onReset={() => handleFieldReset(fieldKey)}
                onQuickOptionSelect={(value) => handleQuickOptionSelect(fieldKey, value)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FormSection);
