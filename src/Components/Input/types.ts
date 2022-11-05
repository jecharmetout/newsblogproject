export type InputProps = {
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    error?: boolean;
    type?: string;
  };