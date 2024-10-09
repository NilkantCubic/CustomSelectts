import moment from "moment";

export const Apps365moment = moment;

const formats: string[] = [
  "MM/DD/YYYY",
  "DD-MM-YYYY",
  "DD/MM/YYYY",
  "MM-DD-YYYY",
  "YYYY/MM/DD",
  "MMM D, YYYY",
  "D MMM YYYY",
  "MMMM D, YYYY",
  "D MMMM YYYY",
  "DD.MM.YYYY",
  "D/M/YYYY",
  "ddd MMM D YYYY HH:mm:ss",
  "YYYY-MM-DD",
  "YYYY/DD/MM",
  "YYYY.MM.DD",
  "YYYY-MM-DDTHH:mm:ss.SSS",
  "YYYY-MM-DDTHH:mm:ss.SSSZ",
  "YYYY-MM-DDTHH:mm:ssZ",
  "YYYY-MM-DDTHH:mm:ss",
];

export function FormatDate(dateInput: any, desiredFormat?: string): string {
  if (
    !dateInput ||
    (typeof dateInput === "object" &&
      Object.keys(dateInput).length === 0 &&
      !(dateInput instanceof Date)) ||
    (Array.isArray(dateInput) && dateInput.length === 0)
  ) {
    return "";
  }
  let parsedDate;

  const ApplyDateFormat = desiredFormat ? desiredFormat : "MM/DD/YYYY";
  if (dateInput instanceof Date) {
    parsedDate = moment(dateInput);
  } else if (typeof dateInput === "string") {
    parsedDate = moment(dateInput, formats, true);

    if (!parsedDate.isValid()) {
      parsedDate = moment(dateInput, moment.ISO_8601, true);
    }
  } else {
    console.log("Unsupported date input type");
  }
  return parsedDate.isValid() ? parsedDate.format(ApplyDateFormat) : "";
}
