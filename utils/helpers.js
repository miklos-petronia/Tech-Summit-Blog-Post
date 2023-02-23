module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // Utilizing JavaScript Date methods, we get and format the month, date, and year
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      // We added five years to the 'year' value to compute the end date
      new Date(date).getFullYear()
    }`;
  },
};