import React from 'react';
import { FormSectionProps } from '../types';
import { ChevronDown, ChevronRight, Info, X } from 'lucide-react';
import { Input } from '../../../components/ui/input';
import { cn } from '../../../lib/utils';

// Define complete code item type
interface CodeItem {
  code: string;
  name: string;
  frequencyKey: string;
  frequency: string;
  coveragePercentageKey: string;
  coveragePercentage: string;
  guidelinesQuestions: Array<{
    questionKey: string;
    questionTitle: string;
    answerKey: string;
    answerValue: string;
  }>;
  hasGuidelines: boolean;
}

/**
 * Complete implementation with guidelines support
 */
const CodesSectionRenderer: React.FC<FormSectionProps> = ({
  sectionId,
  section,
  expanded,
  active,
  editMode,
  changes,
  onSectionToggle,
  onFieldChange,
  onFieldReset
}) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  // Toggle section expanded state
  const handleToggleSection = (e: React.MouseEvent) => {
    e.preventDefault();
    onSectionToggle(sectionId);
  };

  // Handle search term change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Extract code items with guidelines from section data
  const codeItems = React.useMemo(() => {
    if (!section.fields) return [];
    
    return Object.entries(section.fields)
      .filter(([_, field]) => field && typeof field === 'object' && field.frequency && field.coveragePercentage)
      .map(([code, field]) => {
        const freqKey = field.frequency.key || '';
        const covKey = field.coveragePercentage.key || '';
        
        const freqValue = changes[freqKey] !== undefined 
          ? changes[freqKey] 
          : (field.frequency.value || '');
        
        const covValue = changes[covKey] !== undefined 
          ? changes[covKey] 
          : (field.coveragePercentage.value || '');
        
        // Process guidelines if they exist
        const guidelinesQuestions: Array<{
          questionKey: string;
          questionTitle: string;
          answerKey: string;
          answerValue: string;
        }> = [];
        
        let hasGuidelines = false;
        
        // Check if guidelines exist and process them
        if (field.guidelines && typeof field.guidelines === 'object' && Object.keys(field.guidelines).length > 0) {
          hasGuidelines = true;
          
          // Iterate through each guideline question
          Object.entries(field.guidelines).forEach(([questionTitle, guideline]) => {
            if (guideline && typeof guideline === 'object') {
              // Use type assertion for TypeScript
              const typedGuideline = guideline as {key?: string, value?: string};
              const answerKey = typedGuideline.key || '';
              const answerValue = changes[answerKey] !== undefined
                ? changes[answerKey]
                : (typedGuideline.value || '');
              
              guidelinesQuestions.push({
                questionKey: questionTitle,
                questionTitle,
                answerKey,
                answerValue: String(answerValue) // Convert to string for display
              });
            }
          });
        }
        
        return {
          code,
          name: field.name || code,
          frequencyKey: freqKey,
          frequency: freqValue,
          coveragePercentageKey: covKey,
          coveragePercentage: covValue,
          guidelinesQuestions,
          hasGuidelines
        };
      });
  }, [section.fields, changes]);

  // Filter items based on search term
  const filteredItems = React.useMemo(() => {
    if (!searchTerm) return codeItems;
    
    const term = searchTerm.toLowerCase();
    return codeItems.filter(item => 
      item.code.toLowerCase().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.frequency.toLowerCase().includes(term) ||
      item.coveragePercentage.toLowerCase().includes(term) ||
      // Also search in guidelines questions
      item.guidelinesQuestions.some(q => 
        q.questionTitle.toLowerCase().includes(term) || 
        q.answerValue.toLowerCase().includes(term)
      )
    );
  }, [codeItems, searchTerm]);

  return (
    <div 
      ref={sectionRef}
      data-section-id={sectionId}
      className="mb-6 border rounded-md shadow-sm overflow-hidden border-slate-200 dark:border-slate-700"
    >
      {/* Section Header */}
      <div 
        className="bg-white dark:bg-slate-800 px-4 py-3 flex items-center justify-between cursor-pointer"
        onClick={handleToggleSection}
      >
        <div className="flex items-center space-x-2">
          <div className="text-slate-500 dark:text-slate-400">
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </div>
          <h3 className="text-md font-medium text-slate-900 dark:text-slate-100">
            {section.title}
          </h3>
          {section.tooltip && (
            <div className="relative group">
              <div className="cursor-help">
                <Info className="h-4 w-4 text-slate-400" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                {section.tooltip}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Section Content (only shown when expanded) */}
      {expanded && (
        <div className="bg-white dark:bg-slate-900">
          <div className="p-4">
            <div className="mb-4">
              <Input
                placeholder="Search codes..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="max-w-md text-slate-700 dark:text-slate-300"
              />
            </div>

            <div className="border rounded-md border-slate-300 dark:border-slate-600">
              {/* Table Header */}
              <div className="grid grid-cols-16 gap-4 p-3 border-b border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300 text-sm">
                <div className="col-span-3">Code</div>
                <div className="col-span-3">Frequency</div>
                <div className="col-span-3">Coverage Percentage</div>
                <div className="col-span-7">Additional Information</div>
              </div>
              
              {/* Table Body */}
              <div className="max-h-[500px] overflow-y-auto">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div 
                      key={item.code}
                      className={cn(
                        "grid grid-cols-16 gap-4 p-3",
                        index % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800/50",
                        "border-b border-slate-300 dark:border-slate-600 last:border-b-0"
                      )}
                    >
                      {/* Code Column */}
                      <div className="col-span-3 font-medium text-slate-900 dark:text-slate-100">
                        {item.name || item.code}
                      </div>
                      
                      {/* Frequency Column */}
                      <div className="col-span-3">
                        {editMode ? (
                          <div className="flex relative" onClick={e => e.stopPropagation()}>
                            <input
                              type="text"
                              defaultValue={item.frequency}
                              onBlur={e => onFieldChange(item.frequencyKey, e.target.value)}
                              className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800"
                            />
                            {item.frequency && (
                              <button
                                type="button"
                                onClick={e => {
                                  e.stopPropagation();
                                  onFieldReset(item.frequencyKey);
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-500"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="text-sm py-2 text-slate-700 dark:text-slate-300">
                            {item.frequency || <span className="text-slate-400">Not provided</span>}
                          </div>
                        )}
                      </div>
                      
                      {/* Coverage Percentage Column */}
                      <div className="col-span-3">
                        {editMode ? (
                          <div className="flex relative" onClick={e => e.stopPropagation()}>
                            <input
                              type="text"
                              defaultValue={item.coveragePercentage}
                              onBlur={e => onFieldChange(item.coveragePercentageKey, e.target.value)}
                              className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800"
                            />
                            {item.coveragePercentage && (
                              <button
                                type="button"
                                onClick={e => {
                                  e.stopPropagation();
                                  onFieldReset(item.coveragePercentageKey);
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-500"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="text-sm py-2 text-slate-700 dark:text-slate-300">
                            {item.coveragePercentage || <span className="text-slate-400">Not provided</span>}
                          </div>
                        )}
                      </div>
                      
                      {/* Additional Information Column (Guidelines) */}
                      <div className="col-span-7">
                        {item.hasGuidelines ? (
                          <div className="space-y-2">
                            {item.guidelinesQuestions.map((question, qIndex) => (
                              <div key={question.questionKey} className="border-b border-slate-200 dark:border-slate-700 pb-3 last:border-b-0 last:pb-0 mb-2">
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                                    Question:
                                  </div>
                                </div>
                                <div className="text-sm bg-slate-50 dark:bg-slate-800 p-2 rounded mb-2 font-medium text-slate-700 dark:text-slate-300">
                                  {question.questionTitle}
                                </div>
                                
                                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                                  Answer:
                                </div>
                                
                                {editMode ? (
                                  <div className="flex relative" onClick={e => e.stopPropagation()}>
                                    <input
                                      type="text"
                                      defaultValue={question.answerValue}
                                      onBlur={e => onFieldChange(question.answerKey, e.target.value)}
                                      className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 text-sm"
                                    />
                                    {question.answerValue && (
                                      <button
                                        type="button"
                                        onClick={e => {
                                          e.stopPropagation();
                                          onFieldReset(question.answerKey);
                                        }}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-500"
                                      >
                                        <X className="h-3 w-3" />
                                      </button>
                                    )}
                                  </div>
                                ) : (
                                  <div className="text-sm bg-white dark:bg-slate-900 p-2 border border-slate-200 dark:border-slate-700 rounded">
                                    {question.answerValue || <span className="text-slate-400">Not provided</span>}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-sm py-2 text-slate-500 dark:text-slate-500">
                            No additional information
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-slate-500 dark:text-slate-400">
                    No codes found matching your search.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(CodesSectionRenderer);