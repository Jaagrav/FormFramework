import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FormSidebarProps } from "../types";
import { sortSectionsByOrder } from "../utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText, FileBox, User, Stethoscope, Calendar, DollarSign, Percent, Clock, AlertCircle, Clipboard } from "lucide-react";

const FormSidebar: React.FC<FormSidebarProps> = ({
  sections,
  sectionStats,
  activeSection,
  expandedSections,
  onSectionClick,
  onExpandAll,
  onCollapseAll,
  totalStats
}) => {
  const sortedSections = sortSectionsByOrder(sections);
  const [collapsed, setCollapsed] = useState(false);
  
  const getSectionStatusColor = (sectionId: string) => {
    const stats = sectionStats[sectionId];
    if (!stats) return "bg-gray-300";
    
    if (stats.filled === stats.total) return "bg-green-500";
    if (stats.filled > 0) return "bg-yellow-500";
    return "bg-gray-300"; 
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const getSectionIcon = (sectionId: string, sectionTitle: string) => {
    const sectionIndex = sortedSections.findIndex(([id]) => id === sectionId) + 1;
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    const romanNumeral = sectionIndex <= romanNumerals.length ? romanNumerals[sectionIndex - 1] : sectionIndex.toString();
    
    if (sectionTitle.toLowerCase().includes('verification')) return <FileText className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('patient')) return <User className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('insurance')) return <FileBox className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('benefit')) return <Stethoscope className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('codes')) return <Clipboard className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('time')) return <Clock className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('eligibility')) return <Calendar className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('deductible')) return <DollarSign className="h-4 w-4" />;
    if (sectionTitle.toLowerCase().includes('copay')) return <Percent className="h-4 w-4" />;
    
    return (
      <div className="h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">
        {romanNumeral}
      </div>
    );
  };

  if (collapsed) {
    return (
      <div className="relative w-16 shrink-0 transition-all duration-300 ease-in-out">
        <div className="sticky top-4 bg-white dark:bg-slate-900 rounded-r-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-[calc(100vh-8rem)]">
          <Button 
            onClick={toggleSidebar}
            variant="ghost" 
            size="sm"
            className="h-7 w-full rounded-none border-b border-slate-100 dark:border-slate-700 flex justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronRight className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </Button>
          
          <div className="py-2 space-y-1">
            {sortedSections.map(([sectionId, section], index) => {
              const isActive = activeSection === sectionId;
              const statusColor = getSectionStatusColor(sectionId);
              
              return (
                <div 
                  key={sectionId}
                  className={cn(
                    "px-2 py-2 cursor-pointer transition-colors flex justify-center",
                    isActive ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                  onClick={() => {
                    onSectionClick(sectionId);
                    
                    setTimeout(() => {
                      const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
                      if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 50); 
                  }}
                >
                  <div className="relative">
                    <div className="text-slate-600 dark:text-slate-400">
                      {getSectionIcon(sectionId, section.title)}
                    </div>
                    <div 
                      className={cn(
                        "absolute -right-1 -top-1 w-2 h-2 rounded-full", 
                        statusColor
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 shrink-0 transition-all duration-300 ease-in-out">
      <div className="sticky top-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-[calc(100vh-8rem)]">
        <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Sections</h2>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {totalStats.filled}/{totalStats.total} fields
            </div>
          </div>
          
          <Button 
            onClick={toggleSidebar}
            variant="ghost" 
            size="sm"
            className="h-7 w-7 p-0"
          >
            <ChevronLeft className="h-4 w-4 text-slate-500 dark:text-slate-400" />
          </Button>
        </div>

        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100% - 3.5rem)' }}>
          {sortedSections.map(([sectionId, section], index) => {
            const isActive = activeSection === sectionId;
            const isExpanded = expandedSections.includes(sectionId);
            const stats = sectionStats[sectionId] || { total: 0, filled: 0 };
            const statusColor = getSectionStatusColor(sectionId);
            
            return (
              <div 
                key={sectionId}
                className={cn(
                  "px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-b-0 transition-colors duration-150",
                  isActive && "bg-slate-50 dark:bg-slate-800"
                )}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    onSectionClick(sectionId);
                    
                    setTimeout(() => {
                      const sectionElement = document.querySelector(`[data-section-id="${sectionId}"]`);
                      if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        console.log('Scrolling to section:', sectionId);
                      } else {
                        console.warn('Section element not found:', sectionId);
                      }
                    }, 100);
                  }}
                  role="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-slate-600 dark:text-slate-400">
                      {getSectionIcon(sectionId, section.title)}
                    </div>
                    <div 
                      className={cn("w-2 h-2 rounded-full", statusColor)}
                    />
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{section.title}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stats.filled}/{stats.total}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FormSidebar);
