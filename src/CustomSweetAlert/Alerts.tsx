import * as React from "react";
import "./Alerts.css";

interface PromptProps {
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClose: (result: { isConfirmed: boolean }) => void;
}

interface alertProps {
  title: string;
}

export const MySuccess: React.FC<alertProps> = ({ title }) => {
  return (
    <div className="dialog">
      <div className="dialogSurface">
        <div className="dialogBody">
          <div className="checkmark-container">
            <div className="checkmark-circle"></div>
            <div className="checkmark-icon">
              <div className="checkmark-line checkmark-line-tip"></div>
              <div className="checkmark-line checkmark-line-long"></div>
            </div>
          </div>
          <div className="dialogTitle">{title}</div>
        </div>
      </div>
    </div>
  );
};

export const MyError: React.FC<alertProps> = ({ title }: any) => {
  return (
    <div className="dialog">
      <div className="dialogSurface">
        <div className="dialogBody">
          <div className="modal">
            <div className="error-icon">
              <div className="error-circle"></div>
              <div className="error-cross">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
              </div>
            </div>
          </div>

          <div className="dialogTitle"> {title}</div>
        </div>
      </div>
    </div>
  );
};

export const MyInfo: React.FC<alertProps> = ({ title }: any) => {
  return (
    <div className="dialog">
      <div className="dialogSurface">
        <div className="dialogBody">
          <div className="overlay">
            <div className="warning-icon blue-icon">
              <div className="exclamation blue-color-mark">!</div>
            </div>
          </div>

          <div className="dialogTitle"> {title}</div>
        </div>
      </div>
    </div>
  );
};

export const MyWarning: React.FC<PromptProps> = ({
  title,
  confirmButtonText,
  cancelButtonText,
  onClose,
}) => {
  const handleConfirm = () => {
    onClose({ isConfirmed: true });
  };

  const handleCancel = () => {
    onClose({ isConfirmed: false });
  };

  return (
    <div className="dialog">
      <div className="dialogSurface">
        <div className="dialogBody">
          <div className="overlay">
            <div className="warning-icon">
              <div className="exclamation">!</div>
            </div>
            <div className="message">{title}</div>
            <div className="buttons">
              <button onClick={handleConfirm} className="yes-button">
                {confirmButtonText || "Confirm"}
              </button>
              <button onClick={handleCancel} className="no-button">
                {cancelButtonText || "Cancel"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const MyQuestion: React.FC<PromptProps> = ({
  title,
  confirmButtonText,
  cancelButtonText,
  onClose,
}) => {
  const handleConfirm = () => {
    onClose({ isConfirmed: true });
  };

  const handleCancel = () => {
    onClose({ isConfirmed: false });
  };

  return (
    <div className="dialog">
      <div className="dialogSurface">
        <div className="dialogBody">
          <div className="overlay">
            <div className="circle">
              <span className="question-mark">?</span>
            </div>
            <div className="message">{title}</div>
            <div className="buttons">
              <button onClick={handleConfirm} className="yes-button">
                {confirmButtonText || "Confirm"}
              </button>
              <button onClick={handleCancel} className="no-button">
                {cancelButtonText || "Cancel"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
