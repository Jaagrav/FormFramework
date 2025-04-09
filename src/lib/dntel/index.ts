// Main hook
import useDntelForm from './hooks/useDntelForm';

// Components
import DntelForm from './components/DntelForm';
import FormField from './components/FormField';
import FormSection from './components/FormSection';
import FormSidebar from './components/FormSidebar';
import CodesSectionRenderer from './components/CodesSectionRenderer';

// Utils
import * as Utils from './utils';

// Types
import type { 
  FormData, 
  FormField as FormFieldType, 
  FormSection as FormSectionType, 
  FieldType,
  FieldInterface,
  SectionLayout,
  FormSidebarProps,
  FormSectionProps,
  FormFieldProps,
  DntelFormProps,
  UseDntelFormReturn,
  SectionStats
} from './types';

// Export components
export { 
  useDntelForm,
  DntelForm,
  FormField,
  FormSection,
  FormSidebar,
  CodesSectionRenderer
};

// Export utilities
export const {
  flattenObject,
  unflattenObject,
  calculateSectionStats,
  calculateFormStats,
  formatDate,
  parseDate,
  getFieldDisplayValue,
  getSectionIdFromKey,
  sortSectionsByOrder,
  saveToLocalStorage,
  getFromLocalStorage,
  clearLocalStorage
} = Utils;

// Export types
export type {
  FormData,
  FormFieldType,
  FormSectionType,
  FieldType,
  FieldInterface,
  SectionLayout,
  FormSidebarProps,
  FormSectionProps,
  FormFieldProps,
  DntelFormProps,
  UseDntelFormReturn,
  SectionStats
};
