import React, {useState, useEffect} from "react";
import ReactTooltip from "react-tooltip";

function CopyIcon({address, color = "#fff", key_id, place = 'top'}) {


  const [copied, setCopied] = useState(false);
  const [tooltip, setTooltip] = useState('Copy address');
  const [randomID, setRandomID] = useState(String(Math.random()))

  useEffect(() => {

    navigator.clipboard.writeText(address)
    if (copied) {
      setTooltip('Copied');
    }
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      style={{
        minHeight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: '0 15px',
        overflowWrap: 'anywhere',
      }}
    >
    <div className="address mx-2" style={{ color: color }}>
    {address}
    </div>
      <div
        onClick={() => setCopied(true)}
        data-tip={ tooltip }
        data-for ={randomID}
        style={{
          appearance: "none",
           background: '#fff0',

          padding: 8,
          border: `1px solid ${color}`,
          outline: 0,
          cursor: "pointer"
        }}
      >
        <div
          style={{
            position: "relative",
            height: 16,
            width: 16
          }}
        >
          <Clippy
            style={{
              color: color,
              position: "absolute",
              top: 0,
              left: 0,
              strokeDasharray: 50,
              strokeDashoffset: copied ? -50 : 0,
              transition: "all 300ms ease-in-out"
            }}
          />
          <Check
            isVisible={copied}
            style={{
              color: 'green',
              position: "absolute",
              top: 0,
              left: 0,
              strokeDasharray: 50,
              strokeDashoffset: copied ? 0 : -50,
              transition: "all 300ms ease-in-out"
            }}
          />
        </div>
      </div>
     <ReactTooltip id={randomID} place={place}  />
    </div>

  );
}


function Clippy(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}

export default CopyIcon;

