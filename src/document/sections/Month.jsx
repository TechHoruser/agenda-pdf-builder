import { Text, View, Link } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';

export const NAVIGATION_LINK_ID = "navigation";

const weekDayByIndex = (index) => {
  switch (index) {
    case 0:
      return "D";
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    default:
      return "";
  }
}

export const Month = ({
  initDate,
  endDate,
  startWeekDay = 1,
  widthOfDay = 22,
  availableDays,
}) => {
  const firstDayOfMonth = new Date(initDate.getFullYear(), initDate.getMonth(), 1);
  const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);

  const searchPreviousFirstDayOfWeek = (date, firstDayOfWeek) => {
    if (date.getDay() === firstDayOfWeek) {
      return date;
    }
    return searchPreviousFirstDayOfWeek(new Date(date.getTime() - 24 * 60 * 60 * 1000), firstDayOfWeek);
  }

  const searchNextLastDayOfWeek = (date, lastDayOfWeek) => {
    if (date.getDay() === lastDayOfWeek) {
      return date;
    }
    return searchNextLastDayOfWeek(new Date(date.getTime() + 24 * 60 * 60 * 1000), lastDayOfWeek);
  }

  const firstDay = searchPreviousFirstDayOfWeek(firstDayOfMonth, startWeekDay);
  const lastDay = searchNextLastDayOfWeek(lastDayOfMonth, (startWeekDay + 6) % 7);
  const numberOfDays = Math.floor((lastDay.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000)) + 1;

  const isDayAvailable = (day) => {

    return availableDays.includes(day.getDay())
      && day.getTime() >= initDate.getTime()
      && day.getTime() <= endDate.getTime()
  }

  return <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: `${7 * widthOfDay}rem`,
      textAlign: 'center',
    }}
  >
    {
      Array.from({ length: 7 }, (_, i) => {
        const day = (startWeekDay + i) % 7;
        return <View
          key={i}
          style={{
            width: `${widthOfDay}rem`,
            padding: '1rem',
            margin: '0',
            border: '1px solid #999',
            textDecoration: 'none',
            fontSize: 10,
          }}
        >
          <Text>{weekDayByIndex(day)}</Text>
        </View>
      })
    }
    {
      Array.from({ length: numberOfDays }, (_, i) => {
        const date = new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000);
        const day = date.getDate();

        return <View
          key={i}
          style={{
            width: `${widthOfDay}rem`,
            padding: '1rem',
            margin: '0',
            border: '1px solid #999',
            textDecoration: 'none',
            fontSize: 10,
          }}
        >
          {
            isDayAvailable(date)
              ? <Link
                style={{
                  color: '#000',
                  textDecoration: 'none',
                }}
                src={`#${date.toLocaleDateString()}`}
              >
                <Text>{day}</Text>
              </Link>
              : <Text
                style={{
                  color: '#AAA',
                }}
              >{day}</Text>
          }
        </View>
      })
    }
  </View >
}
