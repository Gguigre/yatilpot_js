export const SUNDAY = "SUNDAY";
export const MONDAY = "MONDAY";
export const TUESDAY = "TUESDAY";
export const WEDNESDAY = "WEDNESDAY";
export const THURSDAY = "THURSDAY";
export const FRIDAY = "FRIDAY";
export const SATURDAY = "SATURDAY";

export const ANSWER_YES = "YES";
export const ANSWER_NO = "NO";
export const ANSWER_NOT_YET = "NOT_YET";

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
    return ANSWER_YES;
  } else {
    return ANSWER_NO;
  }
};
