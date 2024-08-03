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
    showCalendars,
    setShowCalendars,
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
                  id="day"
                  type="checkbox"
                  value={showCalendars.includes("day")}
                  onChange={() => {
                    if (showCalendars.includes("day")) {
                      setShowCalendars(showCalendars.filter((calendar) => calendar !== "day"))
                    } else {
                      setShowCalendars([...showCalendars, "day"])
                    }
                  }}
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                Diario
              </div>
              <div>
                <input
                  id="week"
                  type="checkbox"
                  value={showCalendars.includes("week")}
                  onChange={() => {
                    if (showCalendars.includes("week")) {
                      setShowCalendars(showCalendars.filter((calendar) => calendar !== "week"))
                    } else {
                      setShowCalendars([...showCalendars, "week"])
                    }
                  }}
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                <label
                  htmlFor="week"
                >Semanal</label>
              </div>
              <div>
                <input
                  id="month"
                  type="checkbox"
                  value={showCalendars.includes("month")}
                  onChange={() => {
                    if (showCalendars.includes("month")) {
                      setShowCalendars(showCalendars.filter((calendar) => calendar !== "month"))
                    } else {
                      setShowCalendars([...showCalendars, "month"])
                    }
                  }}
                  className="rounded bg-gray-500/20 px-2 mr-2"
                />
                <label
                  htmlFor="month"
                >Mensual</label>
              </div>
            </label>
          </div>
        </div>
      </Modal>
    }
  </>
}
