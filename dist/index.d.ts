import * as React from 'react';
import React__default from 'react';
import moment from 'moment';

interface Option {
    value: string;
    label: string;
    key?: string;
    text?: string;
    persona?: any;
    [key: string]: any;
}
interface CustomSelectProps {
    options: Option[];
    onChange: (value: Option | Option[]) => void;
    value?: Option | Option[];
    placeholder?: string;
    width?: string;
    visibleOptions?: any;
    ismulti?: boolean;
    isDisabled?: boolean;
    showPersonaForSelected?: boolean;
    menuPlacement?: "auto" | "top" | "bottom";
}
declare const CustomSelect: React__default.FC<CustomSelectProps>;

interface PromptProps {
    title: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onClose: (result: {
        isConfirmed: boolean;
    }) => void;
}
interface alertProps {
    title: string;
}
declare const MySuccess: React.FC<alertProps>;
declare const MyError: React.FC<alertProps>;
declare const MyInfo: React.FC<alertProps>;
declare const MyWarning: React.FC<PromptProps>;
declare const MyQuestion: React.FC<PromptProps>;

declare const RenderHTML: ({ htmlString }: {
    htmlString: any;
}) => any;

interface SelectedDates {
    startdate: any;
    enddate: any;
}
interface DateRangePickerProps {
    onChange: (selection: any) => void;
    onDismiss: () => void;
    selectedDates?: SelectedDates;
}
declare const DateRangePicker: React__default.FC<DateRangePickerProps>;

declare const Apps365moment: typeof moment;
declare function FormatDate(dateInput: any, desiredFormat?: string): string;

export { Apps365moment, CustomSelect, DateRangePicker, FormatDate, MyError, MyInfo, MyQuestion, MySuccess, MyWarning, RenderHTML };
