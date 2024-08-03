import { Page } from "./Page";
import { Month } from "./Month";

export const NAVIGATION_LINK_ID = "navigation";

const getWidthOfDay = (numberOfMonths) => {
  switch (numberOfMonths) {
    case 1:
      return 32;
    case 2:
      return 28;
    case 3:
      return 22;
    default:
      return 22;
  }
}

export const CalendarNavigate = ({
  initDate,
  endDate,
  startWeekDay,
  availableDays,
}) => {
  const numberOfMonths = Math.floor((endDate.getTime() - initDate.getTime() + 1) / (30 * 24 * 60 * 60 * 1000))
  const widthOfDay = getWidthOfDay(numberOfMonths)
  console.log('numberOfMonths', numberOfMonths)

  return <Page
    bookmark={NAVIGATION_LINK_ID}
    linkId={NAVIGATION_LINK_ID}
    style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      flexDirection: 'row',
    }}
  >
    {
      Array.from({ length: numberOfMonths }, (_, i) => {
        const firstDateForMonth = i === 0 ? initDate : new Date(initDate.getFullYear(), initDate.getMonth() + i, 1);
        const lastDateForMonth = i === numberOfMonths ? endDate : new Date(initDate.getFullYear(), initDate.getMonth() + i + 1, 0);

        return <Month
          key={i}
          initDate={firstDateForMonth}
          endDate={lastDateForMonth}
          startWeekDay={startWeekDay}
          widthOfDay={widthOfDay}
          availableDays={availableDays}
        />
      })
    }
  </Page>
}
