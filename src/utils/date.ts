const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const toDate = (dt: number) => new Date(dt * 1000);

export const getDayOfWeek = (dt: number): string => {
  const date = toDate(dt);
  const day = date.getDay();
  return daysOfWeek[day];
};

export const getTime = (dt: number): string => {
  const date = toDate(dt);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
