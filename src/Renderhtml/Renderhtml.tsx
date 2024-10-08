import React from "react";

export const RenderHTML = ({ htmlString }) => {
    const isValidHtmlString = (str) => {
      if (typeof str !== "string" || str.trim() === "") {
        return false;
      }

      const div = document.createElement("div");
      div.innerHTML = str;
      return div.childNodes.length > 0;
    };

    if (React.isValidElement(htmlString)) {
      return htmlString;
    }

    if (typeof htmlString === "string" && isValidHtmlString(htmlString)) {
      return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }

    if (typeof htmlString === "number") {
      const updatedHtmlString = String(htmlString);
      if (isValidHtmlString(updatedHtmlString)) {
        return <div dangerouslySetInnerHTML={{ __html: updatedHtmlString }} />;
      }
    }

    return <></>;
  };