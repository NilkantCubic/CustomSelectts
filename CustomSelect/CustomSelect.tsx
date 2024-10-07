import React from "react";
import "./Customselect.css";
import CustomInput from "./CustomInput";

interface Option {
  value: string; // or the appropriate type for your values
  label: string;
  key?: string; // optional property
  text?: string; // optional property
  persona?: any; // optional property
  [key: string]: any; // allows additional properties
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

function isArrayValidated(value) {
  if (value == null || value == undefined || value.length === 0) {
    return false;
  } else {
    return true;
  }
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  value,
  placeholder = "Select Option",
  width = "200px",
  visibleOptions = 7,
  ismulti = false,
  isDisabled = false,
  showPersonaForSelected = false,
  menuPlacement = "auto",
  ...otherProps
}) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [dropdownStyle, setDropdownStyle] = React.useState({});
  const [focusedOptionIndex, setFocusedOptionIndex] =
    React.useState<number>(-1); 

  const CloseSvg: any = (
    <svg
      height="15"
      width="15"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={{ cursor: "pointer" }} // Add cursor pointer for better UX
    >
      <path
        d="M10 9.586l4.95-4.95c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L11.414 10l4.95 4.95c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L10 11.414l-4.95 4.95c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L8.586 10 3.636 5.05c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L10 8.586z"
        fill="#63625e" // Use currentColor for flexibility
        stroke="#63625e"
        strokeWidth="0.8"
      />
    </svg>
  );

  // For Edit previously selected options
  React.useEffect(() => {
    if (ismulti) {
      if (Array.isArray(value) && isArrayValidated(value)) {
        setSelectedOptions([...value]);
      } else {
        setSelectedOptions([]);
      }
    } else {
      if (typeof value === "object" && value) {
        let arr: any = [];
        arr.push(value);
        setSelectedOptions([...arr]);
      } else {
        setSelectedOptions([]); // Handle case where value is not valid
      }
    }
    setFocusedOptionIndex(-1);
  }, [value, ismulti]);

  // send Data to our Prop hooks
  const handleOnChange = (selectedValues: any) => {
    if (ismulti) {
      onChange(selectedValues);
    } else {
      onChange(selectedValues[0]);
    }
  };

  const dropdownRef = React.useRef<HTMLInputElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) {
        // Focus the input field when dropdown opens
        dropdownRef.current.focus();
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 0);
      }
      return newState;
    });
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (ismulti) {
      // Multi-select mode
      const newSelectedOptions = selectedOptions.some(
        (item) => item.value === option.value
      )
        ? selectedOptions.filter((item) => item.value !== option.value) // Remove option
        : [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      handleOnChange(newSelectedOptions);
    } else {
      // Single-select mode
      setSelectedOptions([option]);
      handleOnChange([option]);
      setIsOpen(false); // Close dropdown after single selection
    }
    setSearchQuery(""); // Clear search query on selection
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setIsOpen(true);
    dropdownRef.current.focus();
    setSearchQuery(e.target.value);
  };

  const handleinputBackspace = (e) => {
    if (e.key === "Backspace") {
      if (searchQuery.length > 0) {
        handleSearchChange(e);
        return;
      }
      if (!ismulti) {
        return;
      }
      const updatedArray = selectedOptions.slice(0, -1);
      setSelectedOptions(updatedArray);
      handleOnChange(updatedArray);
    }
    if (e.key === "Enter") {
      if (ismulti) {
        if (filteredOptions.length > 0) {
          handleOptionSelect(filteredOptions[0]);
        }
      } else {
        if (SingleSelectOtions.length > 0) {
          handleOptionSelect(SingleSelectOtions[0]);
        }
      }
    }
  };

  // Handle option removal
  const handleRemoveOption = (option) => {
    const newSelectedOptions = selectedOptions?.filter(
      (item) => item.value !== option.value
    );
    setSelectedOptions(newSelectedOptions);
    handleOnChange(newSelectedOptions);
  };

  // Clear all selected options
  const handleClearAll = () => {
    setSelectedOptions([]);
    handleOnChange([]);
  };

  // Filter options based on search query and exclude selected options
  const filteredOptions = ismulti
    ? options
        .filter((option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(
          (option) =>
            !selectedOptions?.some(
              (selected) => selected.value === option.value
            )
        )
    : [];

  const SingleSelectOtions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (ismulti) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedOptionIndex((prev) => (prev + 1) % filteredOptions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedOptionIndex(
          (prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const option = filteredOptions[focusedOptionIndex];
        if (option) {
          handleOptionSelect(option);
        }
      }
    } else {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedOptionIndex((prev) => (prev + 1) % SingleSelectOtions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedOptionIndex(
          (prev) =>
            (prev - 1 + SingleSelectOtions.length) % SingleSelectOtions.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const option = SingleSelectOtions[focusedOptionIndex];
        if (option) {
          handleOptionSelect(option);
        }
      }
    }
  };

  // Handle option click
  // const handleOptionClick = (option) => {
  //   handleOptionSelect(option);
  //   setFocusedOptionIndex(-1); // Reset focused option index
  // };

  const isall =
    typeof visibleOptions == "string" ? visibleOptions == "all" : false;

  const maxDropdownHeight: any = isall ? "auto" : `${visibleOptions * 35}px`;

  // Handle clicks outside of the component to close the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceAbove = rect.top; // Space above the dropdown
      const spaceBelow = window.innerHeight - rect.bottom; // Space below the dropdown

      if (menuPlacement === "auto") {
        if (spaceBelow < rect.height && spaceAbove >= rect.height) {
          setDropdownStyle({
            bottom: "115%", // Position above
            top: "auto",
          });
        } else {
          setDropdownStyle({
            top: "115%", // Position below
            bottom: "auto",
          });
        }
      } else {
        setDropdownStyle({
          top: menuPlacement === "top" ? "auto" : "115%",
          bottom: menuPlacement === "top" ? "115%" : "auto",
        });
      }
    }
  }, [isOpen, menuPlacement]);

  // const dropdownStyleval = {
  //   maxHeight: maxDropdownHeight,
  //   top: menuPlacement === "top" ? "auto" : "115%",
  //   bottom: menuPlacement === "top" ? "115%" : "auto",
  // };

  return (
    <div
      className={`custom-multi-select ${isDisabled ? "disabled" : ""}`}
      ref={dropdownRef}
      style={{ width }}
      onKeyDown={handleKeyDown}
    >
      {ismulti ? (
        //Multiple Select
        <div
          className="select-box"
          onClick={isDisabled ? undefined : toggleDropdown}
          role="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <div className="input-container">
            {isOpen ? (
              <>
                <div className="selected-values">
                  {selectedOptions.length > 0 &&
                    selectedOptions.map((option) => (
                      <span key={option.value} className="selected-option">
                        {/* {option.label} */}
                        {/* {showPersonaForSelected
                          ? option.persona
                            ? option.persona
                            : option.label
                          : option.label} */}
                        {showPersonaForSelected && option.persona
                          ? option.persona
                          : option.label}

                        <span
                          className="remove-individual"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent dropdown from closing
                            handleRemoveOption(option);
                          }}
                          aria-label={`Remove ${option.label}`}
                        >
                          &times;
                        </span>
                      </span>
                    ))}

                  <CustomInput
                    isHidden={!isOpen}
                    isDisabled={isDisabled}
                    value={searchQuery}
                    inputref={inputRef}
                    onChange={handleSearchChange}
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => handleinputBackspace(e)}
                    placeholder={
                      selectedOptions.length === 0 ? placeholder : ""
                    }
                  />
                </div>
              </>
            ) : (
              <div className="selected-values">
                {selectedOptions.length === 0
                  ? placeholder
                  : selectedOptions.map((option) => (
                      <span key={option.value} className="selected-option">
                        {/* {option.label} */}
                        {/* {showPersonaForSelected
                          ? option.persona
                            ? option.persona
                            : option.label
                          : option.label} */}
                        {showPersonaForSelected && option.persona
                          ? option.persona
                          : option.label}
                        <span
                          className="remove-individual"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent dropdown from closing
                            handleRemoveOption(option);
                          }}
                          aria-label={`Remove ${option.label}`}
                        >
                          &times;
                        </span>
                      </span>
                    ))}
              </div>
            )}
          </div>
          <div
            className="clear-all"
            style={{ right: selectedOptions.length ? "8px" : "0px" }}
          >
            {selectedOptions.length > 0 && (
              <span
                onClick={isDisabled ? undefined : handleClearAll}
                aria-label="Clear all selected options"
              >
                {/* &times; */}
                {CloseSvg}
              </span>
            )}
            <span style={{ position: "relative", top: "1px" }}>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-tj5bde-Svg"
              >
                <path
                  d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                  fill="#63625e"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      ) : (
        // Single Select
        <>
          <div
            className="select-box"
            onClick={isDisabled ? undefined : toggleDropdown}
            role="button"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <div className="input-container">
              {isOpen ? (
                <>
                  <div>
                    {/* {selectedOptions.length > 0 &&
                      selectedOptions.map((option) => (
                        <span key={option.value} className="">
                          {option.label}
                        </span>
                      ))} */}

                    <CustomInput
                      isHidden={!isOpen}
                      isDisabled={isDisabled}
                      value={searchQuery}
                      inputref={inputRef}
                      onChange={handleSearchChange}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => handleinputBackspace(e)}
                      placeholder={
                        selectedOptions.length === 0
                          ? placeholder
                          : selectedOptions[0].label
                      }
                    />
                  </div>
                </>
              ) : (
                <div>
                  {selectedOptions.length === 0
                    ? placeholder
                    : selectedOptions.map((option) => (
                        <span key={option.value} className="">
                          {/* {option.label} */}
                          {/* {option.persona ? option.persona : option.label} */}
                          {/* {showPersonaForSelected
                            ? option.persona
                              ? option.persona
                              : option.label
                            : option.label} */}
                          {showPersonaForSelected && option.persona
                            ? option.persona
                            : option.label}
                        </span>
                      ))}
                </div>
              )}
            </div>
            <div
              className="clear-all"
              style={{
                top: "50%",
                right: "0px",
              }}
            >
              <span>
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-tj5bde-Svg"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </span>
            </div>
          </div>
        </>
      )}

      {/* Options Display logic  */}
      {isOpen &&
        (ismulti ? (
          <>
            <div
              className="dropdown"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              style={dropdownStyle}
              role="listbox"
            >
              {filteredOptions.length == 0 ? (
                <div>
                  <div className="option-item no-options">No Options </div>
                </div>
              ) : (
                <ul className="option-list">
                  {filteredOptions.map((option, index) => (
                    <li
                      key={option.value}
                      className={`option-item ${
                        index === focusedOptionIndex ? "focused" : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                      role="option"
                      aria-selected={selectedOptions.some(
                        (selected) => selected.value === option.value
                      )}
                      aria-label={option.label}
                    >
                      {option.persona ? option.persona : option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            {/* single select options display */}
            <div
              className="dropdown"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              style={{ ...dropdownStyle, maxHeight: maxDropdownHeight }}
              role="listbox"
            >
              {SingleSelectOtions.length == 0 ? (
                <div>
                  <div className="option-item no-options">No Options </div>
                </div>
              ) : (
                <ul className="option-list">
                  {SingleSelectOtions.map((option, index) => (
                    <li
                      key={option.value}
                      className={`option-item ${
                        index === focusedOptionIndex ? "focused" : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                      role="option"
                      aria-selected={selectedOptions.some(
                        (selected) => selected.value === option.value
                      )}
                      aria-label={option.label}
                    >
                      {option.persona ? option.persona : option.label}
                      {/* {option.label} */}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ))}
    </div>
  );
};
