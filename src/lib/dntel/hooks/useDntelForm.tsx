import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { FormData, UseDntelFormReturn } from "../types";
import DntelForm from "../components/DntelForm";
import {
  flattenObject,
  getFromLocalStorage,
  saveToLocalStorage,
  clearLocalStorage,
  getSectionIdFromKey,
  sortSectionsByOrder
} from "../utils";

function useDntelForm(initialData: FormData, id?: string): UseDntelFormReturn {
  const [data, setData] = useState<FormData>(initialData);
  const [changes, setChanges] = useState<Record<string, any>>({});
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lastChanged, setLastChanged] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  
  useEffect(() => {
    if (id) {
      const savedState = getFromLocalStorage(id);
      if (savedState) {
        setChanges(savedState.changes || {});
        setExpandedSections(savedState.expandedSections || []);
        setLastChanged(savedState.lastChanged || null);
      }
    }
    
    if (expandedSections.length === 0 && initialData.sections) {
      const sortedSections = sortSectionsByOrder(initialData.sections);
      if (sortedSections.length > 0) {
        setExpandedSections([sortedSections[0][0]]);
        setActiveSection(sortedSections[0][0]);
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (id && lastChanged) {
      const dataToSave = {
        changes,
        expandedSections,
        lastChanged
      };
      saveToLocalStorage(id, dataToSave);
    }
  }, [id, changes, expandedSections, lastChanged]);
  const changeValue = useCallback((key: string, value: any) => {
    setChanges(prev => ({
      ...prev,
      [key]: value
    }));
    setLastChanged(Date.now());
    
    const sectionId = getSectionIdFromKey(key);
    setActiveSection(sectionId);
    
    if (!expandedSections.includes(sectionId)) {
      setExpandedSections(prev => [...prev, sectionId]);
    }
  }, [expandedSections]);
  
  const resetField = useCallback((key: string) => {
    setChanges(prev => {
      const newChanges = { ...prev };
      delete newChanges[key];
      return newChanges;
    });
    setLastChanged(Date.now());
  }, []);
  
  const handleQuickOptionSelect = useCallback((key: string, value: string) => {
    changeValue(key, value);
  }, [changeValue]);
  
  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId);
      } else {
        return [...prev, sectionId];
      }
    });
  }, []);
  
  const expandAll = useCallback(() => {
    const allSectionIds = Object.keys(data.sections);
    setExpandedSections(allSectionIds);
  }, [data.sections]);
  
  const collapseAll = useCallback(() => {
    setExpandedSections([]);
  }, []);
  const scrollToSection = useCallback((id: string) => {
    if (!expandedSections.includes(id)) {
      setExpandedSections(prev => [...prev, id]);
    }
    
    setActiveSection(id);
    
    const sectionElement = document.querySelector(`[data-section-id="${id}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedSections]);
  
  const expandSection = useCallback((id: string) => {
    if (!expandedSections.includes(id)) {
      setExpandedSections(prev => [...prev, id]);
    }
    setActiveSection(id);
  }, [expandedSections]);
  
  const reset = useCallback(() => {
    setChanges({});
    setLastChanged(Date.now());
  }, []);
  
  const clearLS = useCallback(() => {
    if (id) {
      clearLocalStorage(id);
    }
  }, [id]);
  
  const FormComponent = useCallback(({ 
    className, 
    title, 
    customRenderMap = {} 
  }: { 
    className?: string; 
    title?: string; 
    customRenderMap?: Record<string, (props: any) => JSX.Element> 
  }) => (
    <DntelForm
      data={data}
      changes={changes}
      editMode={editMode}
      expandedSections={expandedSections}
      activeSection={activeSection}
      onSectionToggle={toggleSection}
      onFieldChange={changeValue}
      onFieldReset={resetField}
      onQuickOptionSelect={handleQuickOptionSelect}
      customRenderMap={customRenderMap}
      onEditModeToggle={setEditMode}
    />
  ), [
    data,
    changes,
    editMode,
    expandedSections,
    activeSection,
    toggleSection,
    changeValue,
    resetField,
    handleQuickOptionSelect,
    setEditMode
  ]);

  return {
    FormComponent,
    changes,
    activeSection,
    expandedSections,
    lastChanged,
    expandAll,
    collapseAll,
    scrollToSection,
    expandSection,
    reset,
    changeValue,
    clearLS,
    editMode,
    setEditMode
  };
}

export default useDntelForm;
