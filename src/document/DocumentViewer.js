import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import { Document } from "./Document";
import { Modal } from "../components/Modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DocumentViewer = () => {
  const [showConfig, setShowConfig] = useState(false);
  const firstDayOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const [initDate, setInitDate] = useState(firstDayOfCurrentMonth);
  const lastDayOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  const [endDate, setEndDate] = useState(lastDayOfCurrentMonth);
  const [showCalendars, setShowCalendars] = useState([]);
  return <div className="w-screen h-screen">
    <button
      onClick={() => setShowConfig(true)}
      className="
        bg-gray-500
        h-8
        w-40
        rounded-l-md
        text-white
        flex
        items-center
        justify-center
        hover:bg-gray-600
        absolute
        top-10
        right-0
      "
    >
      Mostrar Config
    </button>

    {
      showConfig
      && <Modal
        onClose={() => setShowConfig(false)}
      >
        <div className="flex flex-col justify-center gap-4">
          <div className="flex gap-4">
            <label
              className="flex flex-col"
            >
              Fecha Inicial
              <DatePicker
                className="rounded bg-gray-500/20 px-2"
                selected={initDate}
                onChange={(newValue) => setInitDate(newValue)}
              />
            </label>
            <label
              className="flex flex-col"
            >
              Fecha Final
              <DatePicker
                className="rounded bg-gray-500/20 px-2"
                selected={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </label>
          </div>

          <div>
            <label
              className="flex flex-col"
            >
              Calendarios a Mostrar
              <div>
                <input
                  type="checkbox"
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                Diario
              </div>
              <div>
                <input
                  type="checkbox"
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                Semanal
              </div>
              <div>
                <input
                  type="checkbox"
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                Mensual
              </div>
            </label>
          </div>
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
