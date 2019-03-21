export const SUNDAY = "SUNDAY";
export const MONDAY = "MONDAY";
export const TUESDAY = "TUESDAY";
export const WEDNESDAY = "WEDNESDAY";
export const THURSDAY = "THURSDAY";
export const FRIDAY = "FRIDAY";
export const SATURDAY = "SATURDAY";

export const ANSWER_YES = "YES";
export const ANSWER_NO = "NO";
export const ANSWER_ALMOST = "ALMOST";
export const ANSWER_YOU_ARE_LATE = "YOU_ARE_LATE";

const dayName = [
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
];

export const getAnswer = () => {
  const date = new Date();
  const dayNumber = date.getDay();
  const hour = date.getHours();

  if (dayName[dayNumber] === FRIDAY) {
    if (hour >= 16 && hour < 18) {
      return ANSWER_ALMOST;
    } else if (hour >= 18 && hour < 20) {
      return ANSWER_YES;
    } else if (hour >= 20) {
      return ANSWER_YOU_ARE_LATE;
    } else {
      return ANSWER_NO;
    }
  } else {
    return ANSWER_NO;
  }
};
