import { Page } from "./Page";
import { Text, View, Link } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';

const START_WEEK_DAY = 1;

const widthOfDay = 22

// Estilos para el calendario
const styles = StyleSheet.create({
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: `${7 * widthOfDay}rem`,
    textAlign: 'center',
  },
  day: {
    width: `${widthOfDay}rem`,
    padding: '1rem',
    margin: '0',
    border: '1px solid #999',
    color: '#000',
    textDecoration: 'none',
    fontSize: 10,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    margin: '0',
  },
});

styles.emptyDay = StyleSheet.create({
  ...styles.day,
  backgroundColor: '#f0f0f0',
  color: '#f0f0f0',
})

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

const MonthCalendarNavigate = ({
  initDate,
  endDate,
}) => {
}

export const CalendarNavigate = ({
  initDate,
  endDate,
}) => {
  const firstDayOfWeek = initDate.getDay(); // Obtiene el día de la semana del primer día
  const firstRow = Array.from({ length: 7 }, (_, i) => {
    return (
      <View key={i} style={styles.day}>
        <Text>{weekDayByIndex((START_WEEK_DAY + i) % 7)}</Text>
      </View>
    );
  })

  const firstDays = Array.from({ length: firstDayOfWeek - START_WEEK_DAY }, (_, i) => {
    return (
      <View key={i} style={styles.emptyDay}>
        <Text></Text>
      </View>
    );
  })

  const endDays = Array.from({ length: 7 - (endDate.getDay() + 1) }, (_, i) => {
    return (
      <View key={i} style={styles.emptyDay}>
        <Text></Text>
      </View>
    );
  })
  console.log(endDate.getDay())

  const numberOfDays = Math.floor((endDate.getTime() - initDate.getTime() + 1) / (24 * 60 * 60 * 1000))

  const daysArray = Array.from({ length: numberOfDays }, (_, i) => {
    const date = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000);
    return (
      <View key={date.toLocaleDateString()} style={styles.day}>
        <Link src={`#${date.toLocaleDateString()}`} style={styles.link}>
          <Text>{date.getDate()}</Text>
        </Link>
      </View>
    );
  });

  return (
    <Page
      bookmark={NAVIGATION_LINK_ID}
      linkId={NAVIGATION_LINK_ID}
    >
      <View style={styles.calendar}>
        {firstRow}
        {firstDays}
        {daysArray}
        {endDays}
      </View>
    </Page>
  );
}
