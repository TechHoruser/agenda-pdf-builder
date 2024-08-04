import { Text, View, Link } from '@react-pdf/renderer';

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
  const searchPreviousFirstDayOfWeek = (date) => {
    if (date.getDay() === startWeekDay) {
      return date;
    }
    return searchPreviousFirstDayOfWeek(new Date(date.getTime() - 24 * 60 * 60 * 1000));
  }

  const searchNextLastDayOfWeek = (date) => {
    const lastDayOfWeek = (startWeekDay + 6) % 7;
    if (date.getDay() === lastDayOfWeek) {
      return date;
    }
    return searchNextLastDayOfWeek(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  }

  const firstDay = searchPreviousFirstDayOfWeek(initDate);
  const lastDay = searchNextLastDayOfWeek(endDate);
  const numberOfDays = Math.round((lastDay.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000) + 1);

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
      margin: 10,
    }}
  >
    <Text
      style={{
        width: '100%',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2,
        textTransform: 'capitalize',
      }}
    >{
        initDate.toLocaleDateString('es-ES', { month: 'long' })
      }</Text>

    {
      Array.from({ length: 7 }, (_, i) => {
        const day = (startWeekDay + i) % 7;
        return <View
          key={i}
          style={{
            width: `${widthOfDay}rem`,
            padding: 2,
            textDecoration: 'none',
            fontSize: 5,
            marginBottom: 1,
          }}
        >
          <Text>{weekDayByIndex(day)}</Text>
        </View>
      })
    }
    {
      Array.from({ length: numberOfDays }, (_, i) => {
        const date = new Date(firstDay.getTime());
        date.setDate(date.getDate() + i);

        return <View
          key={i}
          style={{
            width: `${widthOfDay}rem`,
            padding: 2,
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
                <Text>{date.getDate()}</Text>
              </Link>
              : <Text
                style={{
                  color: '#AAA',
                }}
              >{date.getDate()}</Text>
          }
        </View>
      })
    }
  </View >
}
