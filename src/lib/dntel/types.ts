export type FieldType = 'text' | 'boolean' | 'select' | 'date';

export interface FieldInterface {
  type: FieldType;
  options?: string[];
}

export interface FormField {
  value: any;
  title: string;
  interface: FieldInterface;
  key: string;
  required: boolean;
  defaultValue: any;
  defaultOptions?: string[];
  hidden?: boolean;
  placeholder?: string;
  disabled?: boolean;
  tooltip?: string;
  colSpan?: string;
  source?: {
    channel: string;
    system: {
      id: string;
    };
    timestamp: string;
  };
  [key: string]: any;
}

export type SectionLayout = 'full' | 'left' | 'right' | string;

export interface FormSection {
  order: number;
  layout: SectionLayout;
  title: string;
  tooltip?: string;
  bgColor?: string;
  fields: Record<string, FormField | any>;
  stats?: {
    total: number;
    filled: number;
  };
  module?: string;
}

export interface FormData {
  sections: Record<string, FormSection>;
}

export interface SectionStats {
  total: number;
  filled: number;
}

export interface DntelFormProps {
  data: FormData;
  changes: Record<string, any>;
  editMode: boolean;
  expandedSections: string[];
  activeSection: string | null;
  onSectionToggle: (sectionId: string) => void;
  onFieldChange: (key: string, value: any) => void;
  onFieldReset: (key: string) => void;
  onQuickOptionSelect: (key: string, value: string) => void;
  customRenderMap?: Record<string, (props: any) => JSX.Element>;
  onEditModeToggle?: (enabled: boolean) => void;
}

export interface FormSidebarProps {
  sections: Record<string, FormSection>;
  sectionStats: Record<string, SectionStats>;
  activeSection: string | null;
  expandedSections: string[];
  onSectionClick: (sectionId: string) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  totalStats: {
    total: number;
    filled: number;
  };
}

export interface FormSectionProps {
  sectionId: string;
  section: FormSection;
  expanded: boolean;
  active: boolean;
  editMode: boolean;
  changes: Record<string, any>;
  onSectionToggle: (sectionId: string) => void;
  onFieldChange: (key: string, value: any) => void;
  onFieldReset: (key: string) => void;
  onQuickOptionSelect: (key: string, value: string) => void;
  customRender?: (props: any) => JSX.Element;
}

export interface FormFieldProps {
  field: FormField;
  value: any;
  editMode: boolean;
  onChange: (value: any) => void;
  onReset: () => void;
  onQuickOptionSelect: (value: string) => void;
}

export interface UseDntelFormReturn {
  FormComponent: React.FC<{
    className?: string;
    title?: string;
    customRenderMap?: Record<string, (props: any) => JSX.Element>;
  }>;
  changes: Record<string, any>;
  activeSection: string | null;
  expandedSections: string[];
  lastChanged: number | null;
  expandAll: () => void;
  collapseAll: () => void;
  scrollToSection: (id: string) => void;
  expandSection: (id: string) => void;
  reset: () => void;
  changeValue: (key: string, value: any) => void;
  clearLS: () => void;
  editMode: boolean;
  setEditMode: (enabled: boolean) => void;
}
