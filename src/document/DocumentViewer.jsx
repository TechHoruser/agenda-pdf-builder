import "react-datepicker/dist/react-datepicker.css";
import { DocumentConfig } from "./DocumentConfig";
import { Document } from "./Document";

export const DocumentViewer = () => {
  return <>
    <div className="w-screen h-screen">
      <DocumentConfig />

      <Document />
    </div>
  </>
}
