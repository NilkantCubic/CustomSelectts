
This CustomReactSelect which does performs same function of React-Select

How to use this 
    props should be sent like this:
        // these 3 are compulsory
        options: array of options object;
        onChange: pass your function in this which sets the selected value in you hook;
        value?: for SingleSelect Object for multi array of object;

        // These are optional props 
        placeholder?: string
        width?: string  eg:"200px"
        visibleOptions?: how many options should be displayed other scrollable options
        ismulti?: boolean for multi selection if not passed it will single selection
        isDisabled?: to disable selection;
        showPersonaForSelected?: weather to display persona for selected options
        menuPlacement?: "auto" | "top" | "bottom"  position of options to display by default it will be auto 


        // Note
        to show persoa for option pass persona as key in Options array 
        value and label should be string and you can pass any number of of key value pair which are needed 

        eg option [{value:"val1",label:"label1"},{value:"val2",label:"label2"} ...]

        in onChange you will receive an array of all selected options for multiple selection and Object for single selection
