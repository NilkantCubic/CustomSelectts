import React from "react";
import "./DateRangePicker.css";

interface SelectedDates {
  startdate: any;
  enddate: any;
}

interface DateRangePickerProps {
  onChange: (selection: any) => void;
  onDismiss: () => void;
  selectedDates?: SelectedDates;
}

const generateCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendar: any[] = [];
  let week: any[] = [];
  for (let i = 0; i < firstDay; i++) {
    week.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    calendar.push(week);
  }
  return calendar;
};

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  onDismiss,
  selectedDates,
}) => {
  const today = new Date();
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [currentMonthStart, setCurrentMonthStart] = React.useState(
    today.getMonth() === 0 ? 11 : today.getMonth() - 1
  );
  const [currentYearStart, setCurrentYearStart] = React.useState(
    today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear()
  );
  const [currentMonthEnd, setCurrentMonthEnd] = React.useState(
    today.getMonth()
  );
  const [currentYearEnd, setCurrentYearEnd] = React.useState(
    today.getFullYear()
  );
  const [selectingStartDate, setSelectingStartDate] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const months = {
    0: "January ",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(
      selectingStartDate ? currentYearStart : currentYearEnd,
      selectingStartDate ? currentMonthStart : currentMonthEnd,
      day
    );
    if (selectingStartDate) {
      setStartDate(selectedDate);
      setSelectingStartDate(false);
    } else {
      setEndDate(selectedDate);
      // setShowCalendar(false);
    }
  };

  const handlePrevMonth = (calendarType) => {
    if (calendarType === "start") {
      if (currentMonthStart === 0) {
        setCurrentMonthStart(11);
        setCurrentYearStart(currentYearStart - 1);
      } else {
        setCurrentMonthStart(currentMonthStart - 1);
      }
    } else {
      if (currentMonthEnd === 0) {
        setCurrentMonthEnd(11);
        setCurrentYearEnd(currentYearEnd - 1);
      } else {
        setCurrentMonthEnd(currentMonthEnd - 1);
      }
    }
  };

  const handleNextMonth = (calendarType) => {
    if (calendarType === "start") {
      if (currentMonthStart === 11) {
        setCurrentMonthStart(0);
        setCurrentYearStart(currentYearStart + 1);
      } else {
        setCurrentMonthStart(currentMonthStart + 1);
      }
    } else {
      if (currentMonthEnd === 11) {
        setCurrentMonthEnd(0);
        setCurrentYearEnd(currentYearEnd + 1);
      } else {
        setCurrentMonthEnd(currentMonthEnd + 1);
      }
    }
  };

  const isSelected = (day, calendarType) => {
    const date = new Date(
      calendarType === "start" ? currentYearStart : currentYearEnd,
      calendarType === "start" ? currentMonthStart : currentMonthEnd,
      day
    );
    if (startDate && date.toDateString() === startDate.toDateString()) {
      return "selected";
    }
    if (endDate && date.toDateString() === endDate.toDateString()) {
      return "selected";
    }
    if (startDate && endDate && date >= startDate && date <= endDate) {
      return "inRange";
    }
    return "";
  };

  const calendarStart = generateCalendar(currentYearStart, currentMonthStart);
  const calendarEnd = generateCalendar(currentYearEnd, currentMonthEnd);
  // const calendarStart = MonthList(currentYearStart, currentMonthStart);

  return (
    <div className={"dateRangePicker"}>
      <div className={"selectedDates"}>
        <div
          className={"dateInput"}
          onClick={() => {
            setSelectingStartDate(true);
            setShowCalendar(true);
          }}
        >
          <label>Start Date</label>
          <input
            placeholder="Select Start Date"
            className={"inputdatebox"}
            type="text"
            value={
              startDate
                ? startDate.toDateString()
                : selectedDates?.startdate
                ? new Date(selectedDates?.startdate).toDateString()
                : ""
            }
            readOnly
          />
        </div>

        <div
          className={"dateInput"}
          onClick={() => {
            setSelectingStartDate(false);
            setShowCalendar(true);
          }}
        >
          <label>End Date</label>
          <input
            placeholder="Select End Date"
            className={"inputdatebox"}
            type="text"
            value={
              endDate
                ? endDate.toDateString()
                : selectedDates?.enddate
                ? new Date(selectedDates?.enddate).toDateString()
                : ""
            }
            readOnly
          />
        </div>
      </div>
      {showCalendar && (
        <>
          <div className={"calendarContainer"}>
            <div className={"calendarWrapper"}>
              <div className={"calendarHeader"}>
                <button onClick={() => handlePrevMonth("start")}>&lt;</button>
                <span>{` ${months[currentMonthStart]} ${currentYearStart} `}</span>
                <button onClick={() => handleNextMonth("start")}>&gt;</button>
              </div>
              <div className={"calendar"}>
                <div className={"calendarWeek"}>
                  <span className={"WeekDay"}>Sun</span>
                  <span className={"WeekDay"}>Mon</span>
                  <span className={"WeekDay"}>Tue</span>
                  <span className={"WeekDay"}>Wed</span>
                  <span className={"WeekDay"}>Thu</span>
                  <span className={"WeekDay"}>Fri</span>
                  <span className={"WeekDay"}>Sat</span>
                </div>
                {calendarStart.map((week, index) => (
                  <div key={index} className={"calendarWeekdays"}>
                    {week.map((day, idx) =>
                      day ? (
                        <span
                          key={idx}
                          className={`${"calendarDay"} ${isSelected(
                            day,
                            "start"
                          )}`}
                          onClick={() => handleDayClick(day)}
                        >
                          {day}
                        </span>
                      ) : (
                        <span
                          key={idx}
                          className={`${"calendarDay"} ${"empty"}`}
                        ></span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={"calendarWrapper"}>
              <div className={"calendarHeader"}>
                <button onClick={() => handlePrevMonth("end")}>&lt;</button>
                <span>{` ${months[currentMonthEnd]}  ${currentYearEnd} `}</span>
                <button onClick={() => handleNextMonth("end")}>&gt;</button>
              </div>
              <div className={"calendar"}>
                <div className={"calendarWeek"}>
                  <span className={"WeekDay"}>Sun</span>
                  <span className={"WeekDay"}>Mon</span>
                  <span className={"WeekDay"}>Tue</span>
                  <span className={"WeekDay"}>Wed</span>
                  <span className={"WeekDay"}>Thu</span>
                  <span className={"WeekDay"}>Fri</span>
                  <span className={"WeekDay"}>Sat</span>
                </div>
                {calendarEnd.map((week, index) => (
                  <div key={index} className={"calendarWeekdays"}>
                    {week.map((day, idx) =>
                      day ? (
                        <span
                          key={idx}
                          className={`${"calendarDay"} ${isSelected(
                            day,
                            "end"
                          )}`}
                          onClick={() => handleDayClick(day)}
                        >
                          {day}
                        </span>
                      ) : (
                        <span
                          key={idx}
                          className={`${"calendarDay"} ${"empty"}`}
                        ></span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={"paretok"}>
            <button
              className={"okButton"}
              onClick={() => {
                setShowCalendar(false);
                onChange({
                  selection: {
                    startDate: startDate,
                    endDate: endDate,
                  },
                });
                onDismiss();
              }}
            >
              Ok
            </button>
          </div>
        </>
      )}
    </div>
  );
};
