import { FormData, FormField, FormSection, SectionStats } from "./types";

export const flattenObject = (obj: Record<string, any>, prefix = ""): Record<string, any> => {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? `${prefix}.` : "";
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key]) &&
      !(obj[key] instanceof Date)
    ) {
      Object.assign(acc, flattenObject(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }
    return acc;
  }, {} as Record<string, any>);
};

export const unflattenObject = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    const keys = key.split(".");
    let current = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!current[k]) {
        current[k] = {};
      }
      current = current[k];
    }
    
    current[keys[keys.length - 1]] = obj[key];
  }
  
  return result;
};

export const calculateSectionStats = (
  section: FormSection, 
  changes: Record<string, any>
): SectionStats => {
  const { fields } = section;
  let total = Object.keys(fields).length;
  let filled = 0;
  
  Object.keys(fields).forEach(fieldKey => {
    const fullKey = `${section.title.replace(/\s+/g, '')}.${fieldKey}`;
    const value = changes[fullKey] !== undefined 
      ? changes[fullKey] 
      : fields[fieldKey].value;
    
    if (value !== undefined && value !== null && value !== "") {
      filled++;
    }
  });
  
  return { total, filled };
};

export const calculateFormStats = (data: FormData, changes: Record<string, any>) => {
  const { sections } = data;
  const sectionStats: Record<string, SectionStats> = {};
  let totalFields = 0;
  let totalFilled = 0;
  
  Object.keys(sections).forEach(sectionId => {
    const stats = calculateSectionStats(sections[sectionId], changes);
    sectionStats[sectionId] = stats;
    totalFields += stats.total;
    totalFilled += stats.filled;
  });
  
  return {
    sectionStats,
    totalStats: {
      total: totalFields,
      filled: totalFilled
    }
  };
};
export const formatDate = (date: Date | string | number): string => {
  if (!date) return '';
  
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear().toString().slice(-2)}`;
};

export const parseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  
  const dateParts = dateStr.split('/');
  if (dateParts.length === 3) {
    const month = parseInt(dateParts[0]) - 1;
    const day = parseInt(dateParts[1]);
    let year = parseInt(dateParts[2]);
    
    if (year < 100) {
      year += year < 50 ? 2000 : 1900;
    }
    
    const date = new Date(year, month, day);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  
  const date = new Date(dateStr);
  return !isNaN(date.getTime()) ? date : null;
};

export const getFieldDisplayValue = (
  field: FormField, 
  value: any, 
  originalValue: any
): any => {
  if (value === null || value === undefined) {
    return '';
  }
  
  if (field.interface.type === 'date' && value) {
    return typeof value === 'string' ? value : formatDate(value);
  }
  
  if (field.interface.type === 'boolean') {
    if (typeof value === 'string') {
      return value;
    }
    return value ? 'Yes' : 'No';
  }
  
  if (field.interface.type === 'select' && typeof value === 'string') {
    return value;
  }
  
  return value !== undefined ? value : originalValue;
};

export const getSectionIdFromKey = (key: string): string => {
  const parts = key.split('.');
  return parts[0];
};

export const sortSectionsByOrder = (sections: Record<string, FormSection>): [string, FormSection][] => {
  return Object.entries(sections).sort((a, b) => a[1].order - b[1].order);
};

export const saveToLocalStorage = (id: string, data: any) => {
  try {
    localStorage.setItem(`dntel-form-${id}`, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (id: string) => {
  try {
    const data = localStorage.getItem(`dntel-form-${id}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const clearLocalStorage = (id: string) => {
  try {
    localStorage.removeItem(`dntel-form-${id}`);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
