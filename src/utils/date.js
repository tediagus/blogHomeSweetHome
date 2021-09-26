const dateLib = {

  nameDaysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  nameDaysFull: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],

  daysInMonth: (mounth, year) => {
    const dt = new Date();
    const currentMonth = mounth || dt.getMonth();
    const currentYear = year || dt.getFullYear();

    const nbDays = new Date(currentMonth, currentYear, 0).getDate();

    const daysMonth = [];
    for (let i = 1; i < nbDays; i += 1) {
      const d = new Date(currentYear, currentMonth, i);
      daysMonth.push(d);
    }

    return daysMonth;
  },

  day: (d) => d.getDate(),

  dayName: (d, isShort) => {
    if (isShort) {
      return d.toLocaleDateString('fr-FR', { weekday: 'short' });
    }
    return d.toLocaleDateString('fr-FR', { weekday: 'long' });
  },

  isCurrentDay(d) {
    const currentDay = new Date().getDate();

    return currentDay === d.getDate();
  },
};
export default dateLib;
