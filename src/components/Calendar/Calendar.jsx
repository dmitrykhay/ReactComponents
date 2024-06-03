import classes from "./Calendar.module.css";
import getDaysInNextMonth from "./InNext.js";
import getDaysInPreviousMonth from "./InPrevious";

export const Calendar = (props) => {
  const date = props.date;
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  const day = date.getDate();

  const dayOfWeek = date.getDay();
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const monthName = months[monthNumber];  
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const dayOfWeekName = daysOfWeek[dayOfWeek];

  const previousMonthDays = getDaysInPreviousMonth(year, monthNumber);
  const nextMonthDays = getDaysInNextMonth(year, monthNumber);

  const daysInMonth = new Date(year, monthNumber + 1, 0).getDate();
  const calendar = [];

  // Добавление дней предыдущего месяца
  for (let i = 0; i < previousMonthDays.length; i++) {
    calendar.push(
      <td key={`previous-${i}`} className={classes["ui-datepicker-other-month"]}>
        {previousMonthDays[i]}
      </td>
    );
  }

  // Добавление дней текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === day;
    calendar.push(
      <td key={`current-${i}`} className={isToday ? classes["ui-datepicker-today"] : ""}>
        {i}
      </td>
    );
  }

  // Добавление дней следующего месяца
  for (let i = 0; i < nextMonthDays.length; i++) {
    calendar.push(
      <td key={`next-${i}`} className={classes["ui-datepicker-other-month"]}>
        {nextMonthDays[i]}
      </td>
    );
  }

  // Разбиение календаря на недели
  const weeks = [];
  for (let i = 0; i < calendar.length; i += 7) {
    weeks.push(<tr key={`week-${Math.floor(i / 7)}`}>{calendar.slice(i, i + 7)}</tr>);
  }

  return (
    <div className={classes["wrap"]}>
      <div className={classes["ui-datepicker"]}>
        <div className={classes["ui-datepicker-material-header"]}>
          <div className={classes["ui-datepicker-material-day"]}>{dayOfWeekName}</div>
          <div className={classes["ui-datepicker-material-date"]}>
            <div className={classes["ui-datepicker-material-day-num"]}>{day}</div>
            <div className={classes["ui-datepicker-material-month"]}>{monthName}</div>
            <div className={classes["ui-datepicker-material-year"]}>{year}</div>
          </div>
        </div>
        <div className={classes["ui-datepicker-header"]}>
          <div className={classes["ui-datepicker-title"]}>
            <span className={classes["ui-datepicker-month"]}>{monthName}</span>&nbsp;
            <span className={classes["ui-datepicker-year"]}>{year}</span>
          </div>
        </div>
        <table className={classes["ui-datepicker-calendar"]}>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className={classes["ui-datepicker-week-end"]} />
            <col className={classes["ui-datepicker-week-end"]} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks}
          </tbody>
        </table>
      </div>
    </div>
  )
}


// <tr>
// <td className={classes["ui-datepicker-other-month"]}>27</td>
// <td className={classes["ui-datepicker-other-month"]}>28</td>
// <td>1</td>
// <td>2</td>
// <td>3</td>
// <td>4</td>
// <td>5</td>
// </tr>
// <tr>
// <td>6</td>
// <td>7</td>
// <td className={classes["ui-datepicker-today"]}>8</td>
// <td>9</td>
// <td>10</td>
// <td>11</td>
// <td>12</td>
// </tr>
// остальные недели