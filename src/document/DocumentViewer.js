import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { Document } from "./Document";
import { Modal } from "../components/Modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DocumentViewer = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [initDate, setInitDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(initDate.getTime() + 365 * 24 * 60 * 60 * 1000));
  return <div className="w-screen h-screen">
    <button
      onClick={() => setShowConfig(true)}
      className="bg-blue-500 absolute w-40 top-10 right-0 p-2 rounded rounded-r-none flex justify-center items-center"
    >
      Mostrar Config
    </button>

    {
      showConfig
      && <Modal
        onClose={() => setShowConfig(false)}
      >
        <div className="flex flex-col gap-4">
          <label>
            Fecha Inicial
            <DatePicker
              selected={initDate}
              onChange={(newValue) => setInitDate(newValue)}
            />
          </label>
          <label>
            Fecha Final
            <DatePicker
              selected={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </label>
        </div>
      </Modal>
    }
    <PDFViewer
      className="h-screen w-screen"
    >
      <Document
        initDate={initDate}
        endDate={endDate}
      />
    </PDFViewer >
  </div>
}
