import DatePicker from "react-datepicker"
import { Modal } from "../components/Modal"
import { useContext } from "react"
import { DocumentContext } from "./DocumentContext"

export const DocumentConfig = () => {
  const {
    initDate,
    setInitDate,
    endDate,
    setEndDate,
    showConfig,
    setShowConfig,
  } = useContext(DocumentContext)

  return <>
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
                onChange={(newValue) => {
                  setInitDate(newValue)
                }}
                dateFormat="dd/MM/yyyy"
              />
            </label>
            <label
              className="flex flex-col"
            >
              Fecha Final
              <DatePicker
                className="rounded bg-gray-500/20 px-2"
                selected={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue)
                }}
                dateFormat="dd/MM/yyyy"
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
  </>
}
