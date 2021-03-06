import CalendarLocale from '../../vc-calendar/src/locale/fi_FI';
import TimePickerLocale from '../../time-picker/locale/fi_FI';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Valitse päivä',
    rangePlaceholder: ['Alku päivä', 'Loppu päivä'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/lo
// cale/example.json

export default locale;
