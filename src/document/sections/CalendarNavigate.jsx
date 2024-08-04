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
  const numberOfMonths = (endDate.getFullYear() - initDate.getFullYear()) * 12 + endDate.getMonth() - initDate.getMonth() + 1;
  const widthOfDay = getWidthOfDay(numberOfMonths)

  return <Page
    bookmark={NAVIGATION_LINK_ID}
    linkId={NAVIGATION_LINK_ID}
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 3,
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {
      Array.from({ length: numberOfMonths }, (_, i) => {
        const firstDateForMonth = i === 0
          ? initDate
          : new Date(initDate.getFullYear(), initDate.getMonth() + i, 1);
        const lastDateForMonth = i === (numberOfMonths - 1)
          ? endDate
          : new Date(initDate.getFullYear(), initDate.getMonth() + i + 1, 0);

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
