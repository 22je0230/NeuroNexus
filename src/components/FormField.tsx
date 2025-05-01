
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  rows?: number;
  options?: Option[];
};

const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  placeholder = "",
  pattern,
  rows = 3,
  options = [],
}: FormFieldProps) => {
  const renderField = () => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            rows={rows}
            className="resize-none"
          />
        );
      case "select":
        return (
          <Select
            name={name}
            value={value}
            onValueChange={(val) => {
              const event = {
                target: { name, value: val },
              } as React.ChangeEvent<HTMLSelectElement>;
              onChange(event);
            }}
            required={required}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "radio":
        return (
          <RadioGroup
            value={value}
            onValueChange={(val) => {
              const event = {
                target: { name, value: val },
              } as React.ChangeEvent<HTMLInputElement>;
              onChange(event);
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
                <Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return (
          <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            pattern={pattern}
            className="w-full"
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {renderField()}
    </div>
  );
};

export default FormField;
