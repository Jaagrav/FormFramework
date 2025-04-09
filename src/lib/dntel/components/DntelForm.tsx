import React, { useMemo } from "react"; 
import { DntelFormProps } from "../types";
import FormSection from "./FormSection";
import FormSidebar from "./FormSidebar";
import { calculateFormStats, sortSectionsByOrder } from "../utils";

const DntelForm: React.FC<DntelFormProps> = ({
  data,
  changes,
  editMode,
  expandedSections,
  activeSection,
  onSectionToggle,
  onFieldChange,
  onFieldReset,
  onQuickOptionSelect,
  customRenderMap = {},
  onEditModeToggle
}) => {
  const { sections } = data;
  
  const { sectionStats, totalStats } = useMemo(() => 
    calculateFormStats(data, changes), 
    [data, changes]
  );
  
  const sortedSections = useMemo(() => 
    sortSectionsByOrder(sections), 
    [sections]
  );

  const handleExpandAll = () => {
    sortedSections.forEach(([id]) => {
      if (!expandedSections.includes(id)) {
        onSectionToggle(id);
      }
    });
  };

  const handleCollapseAll = () => {
    expandedSections.forEach(id => onSectionToggle(id));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <FormSidebar
        sections={sections}
        sectionStats={sectionStats}
        activeSection={activeSection}
        expandedSections={expandedSections}
        onSectionClick={(sectionId) => {
          onSectionToggle(sectionId);
        }}
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
        totalStats={totalStats}
      />

      <div className="flex-1">
        <div className="space-y-8 pb-20">
          
          {sortedSections.map(([sectionId, section]) => (
            <FormSection
              key={sectionId}
              sectionId={sectionId}
              section={section}
              expanded={expandedSections.includes(sectionId)}
              active={activeSection === sectionId}
              editMode={editMode}
              changes={changes}
              onSectionToggle={onSectionToggle}
              onFieldChange={onFieldChange}
              onFieldReset={onFieldReset}
              onQuickOptionSelect={onQuickOptionSelect}
              customRender={customRenderMap[sectionId]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(DntelForm);
