import React, { useCallback, useState, useRef, useEffect } from "react";
import { Calendar } from "../../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { CalendarIcon, X, AlertCircle } from "lucide-react";
import { Button } from "../../../components/ui/button"; 
import { format } from "date-fns";
import { FormFieldProps } from "../types";
import { parseDate } from "../utils";

const FormField: React.FC<FormFieldProps> = ({ 
  field, 
  value,
  editMode,
  onChange,
  onReset,
  onQuickOptionSelect
}) => {
  const { 
    title, 
    key: fieldKey, 
    interface: fieldInterface,
    tooltip,
    placeholder,
    defaultOptions = [],
    source,
    colSpan = "2"
  } = field;

  const inputRef = useRef<HTMLInputElement>(null);
  const [dateInputValue, setDateInputValue] = useState<string>(
    value && fieldInterface.type === 'date' ? 
      (typeof value === 'string' ? value : format(new Date(value), 'MM/dd/yyyy')) 
      : ''
  );
  
  const [localInputValue, setLocalInputValue] = useState<string>(value?.toString() || '');
  
  const isBoolean = fieldInterface.type === 'boolean';
  const isDate = fieldInterface.type === 'date';
  const isSelect = fieldInterface.type === 'select';
  
  const isInvalidType = 
    (isBoolean && typeof value !== 'boolean' && value !== undefined && value !== null && value !== '') ||
    (isDate && !parseDate(value) && value !== undefined && value !== null && value !== '') ||
    (isSelect && fieldInterface.options && !fieldInterface.options.includes(value) && value !== undefined && value !== null && value !== '');

  useEffect(() => {
    setLocalInputValue(value?.toString() || '');
  }, [value]);

  useEffect(() => {
    if (isDate && typeof value === 'string') {
      setDateInputValue(value);
    }
  }, [isDate, value]);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'MM/dd/yyyy');
      setDateInputValue(formattedDate);
      onChange(formattedDate);
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDateInputValue(inputValue);
    
    const parsedDate = parseDate(inputValue);
    if (parsedDate) {
      onChange(format(parsedDate, 'MM/dd/yyyy'));
    } else {
      onChange(inputValue);
    }
  };

  const handleChange = useCallback((newValue: any) => {
    if (editMode) {
      onChange(newValue);
    }
  }, [editMode, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalInputValue(value);
  };
  
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleChange(e.currentTarget.value);
    }
  };

  const handleSelectChange = (selectedValue: string) => {
    handleChange(selectedValue);
  };

  const handleQuickOptionClick = (option: string) => {
    onQuickOptionSelect(option);
  };

  const showResetButton = value !== undefined && value !== null && value !== '';
  const colSpanClass = `md:col-span-${colSpan}`;
  const isSourcePrefill = source?.channel === 'prefill';

  const renderViewMode = () => {
    if (value === undefined || value === null || value === '') {
      return <div className="text-sm text-slate-400">Not provided</div>;
    }

    if (!fieldInterface || !fieldInterface.type) {
      return <div className="text-sm">{value}</div>;
    }
 
    if (isInvalidType) {
      return (
        <div className="text-sm flex items-center text-amber-600">
          <AlertCircle className="h-3.5 w-3.5 mr-1 inline" />
          {value}
        </div>
      );
    }

    switch (fieldInterface.type) {
      case 'boolean':
        if (typeof value === 'boolean') {
          return <div className="text-sm">{value ? 'Yes' : 'No'}</div>;
        }
        return <div className="text-sm">{value}</div>;
      case 'select':
        return <div className="text-sm">{value}</div>;
      case 'date':
        return <div className="text-sm">{value}</div>;
      default:
        return <div className="text-sm">{value}</div>;
    }
  };

  const renderEditMode = () => { 
    if (isInvalidType) {
      return (
        <Input
          id={fieldKey}
          value={localInputValue}
          placeholder={placeholder || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          disabled={!editMode}
          className="flex-1 border-amber-300 focus:ring-amber-500 focus:border-amber-500"
          ref={inputRef}
        />
      );
    }

    if (!fieldInterface || !fieldInterface.type) {
      return (
        <Input
          id={fieldKey}
          value={localInputValue}
          placeholder={placeholder || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          disabled={!editMode}
          className="flex-1"
          ref={inputRef}
        />
      );
    }

    switch (fieldInterface.type) {
      case 'boolean':
        if (typeof value !== 'boolean' && value !== undefined && value !== null && value !== '') {
          return (
            <Input
              id={fieldKey}
              value={localInputValue}
              placeholder={placeholder || ""}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              disabled={!editMode}
              className="flex-1"
              ref={inputRef}
            />
          );
        }
        return (
          <Select
            value={value ? "true" : "false"}
            onValueChange={(val) => handleChange(val === "true")}
            disabled={!editMode}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        );
        
      case 'select':
        if (typeof value === 'string' && fieldInterface.options && 
            !fieldInterface.options.includes(value) && value !== '') {
          return (
            <Input
              id={fieldKey}
              value={localInputValue}
              placeholder={placeholder || ""}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              disabled={!editMode}
              className="flex-1"
              ref={inputRef}
            />
          );
        }
        return (
          <Select
            value={value?.toString() || ''}
            onValueChange={handleSelectChange}
            disabled={!editMode}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {fieldInterface.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        
      case 'date':
        if (typeof value === 'string' && !parseDate(value) && value !== '') {
          return (
            <Input
              id={fieldKey}
              value={localInputValue}
              placeholder={placeholder || ""}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              disabled={!editMode}
              className="flex-1"
              ref={inputRef}
            />
          );
        }
        return (
          <div className="flex w-full">
            <div className="relative w-full">
              <Input
                id={fieldKey}
                value={dateInputValue}
                onChange={handleDateInputChange}
                placeholder="MM/DD/YYYY"
                disabled={!editMode}
                className="pr-10"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute right-0 top-0 h-full p-1"
                    type="button"
                  >
                    <CalendarIcon className="h-4 w-4 text-slate-400 hover:text-slate-500" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={parseDate(dateInputValue) || undefined}
                    onSelect={handleDateChange}
                    initialFocus
                    className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        );
        
      case 'text':
      default:
        return (
          <Input
            id={fieldKey}
            value={localInputValue}
            placeholder={placeholder || ""}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            disabled={!editMode}
            className="flex-1"
            ref={inputRef}
          />
        );
    }
  };

  return (
    <div className={colSpanClass}>
      <div className="flex flex-col space-y-2 mb-5 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <Label 
              htmlFor={fieldKey}
              className="text-sm font-medium text-green-600 dark:text-green-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {title}
            </Label>
            {tooltip && (
              <div className="relative ml-2 group mt-0.5">
                <div className="cursor-help">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-4 h-4 text-slate-400"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.25 3.75a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v3.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-3.5z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {tooltip}
                </div>
              </div>
            )}
            {isInvalidType && (
              <div className="ml-2 mt-0.5">
                <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
              </div>
            )}
          </div>
           
          {editMode && showResetButton && (
            <div className="absolute right-0 top-0 flex items-center">
              <button
                type="button"
                onClick={onReset}
                className="text-slate-400 hover:text-slate-500 p-1"
                aria-label="Reset field"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
        
        <div className="relative text-slate-900 dark:text-slate-100">
          {editMode ? renderEditMode() : renderViewMode()}
        </div>
        
        {defaultOptions.length > 0 && editMode && (
          <div className="text-xs text-slate-500 flex flex-wrap gap-2 mt-1">
            {defaultOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleQuickOptionClick(option)}
                className="underline hover:text-slate-700"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(FormField);
