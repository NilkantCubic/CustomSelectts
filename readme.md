# CustomReactSelect

## Overview

`CustomReactSelect` is a customizable component that functions similarly to `React-Select`, providing a flexible and user-friendly interface for selecting options.

## Installation

You can install the package using npm 

bash
npm install app365packagestest


This CustomReactSelect which does performs same function of React-Select

How to use this 
    props should be sent like this:
        these 3 are compulsory
        options: array of options object;
        onChange: pass your function in this which sets the selected value in you hook;
        value?: for SingleSelect Object for multi array of object;

        These are optional props 
        placeholder?: string
        width?: string  eg:"200px"
        visibleOptions?: how many options should be displayed other scrollable options
        ismulti?: boolean for multi selection if not passed it will single selection
        isDisabled?: to disable selection;
        showPersonaForSelected?: weather to display persona for selected options
        menuPlacement?: "auto" | "top" | "bottom"  position of options to display by default it will be auto 


        // Note
        to show persona for option pass persona as key in Options array 
        value and label should be string and you can pass any number of of key value pair which are needed 

        eg option [{value:"val1",label:"label1"},{value:"val2",label:"label2"} ...]

        in onChange you will receive an array of all selected options for multiple selection and Object for single selection


for SweetAlert 
    We provide modals for various alert types: Success, Error, Info, Warning, and Question. In your SweetAlerts File, replace Swal.fire with the required type for the alert you wish to display. The rest of the functionality remains unchanged.

for Dateformat 
    import Apps365moment as moment and use it as u use moment and for FormatDate which takes two 
    props input date and format is optional if not passed it will be MM/DD/YYYY

for DateRangePicker
   The DateRangePicker component accepts the following props:

    onChange: A function to handle date range changes.
    onDismiss: A function to handle dismissal of the picker.
    selectedDates: An object to show selected dates in the following format: 
    {
        "startDate": "",
        "endDate": ""
    }


The onChange function will return an object structured as follows:

    {
        "selection": {
                "startDate": startDate,
                "endDate": endDate
            }
    }


for RenderHTML 
    RenderHTML is a React component that takes a prop htmlString. If the provided string contains valid HTML or number or string, it will be displayed; otherwise, it will not render anything.


