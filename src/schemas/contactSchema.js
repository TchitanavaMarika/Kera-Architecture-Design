import * as yup from 'yup';

export const getContactSchema = (lang = 'ka') => {
  const messages = {
    ka: {
      nameRequired: 'სახელის შეყვანა სავალდებულოა',
      nameMin: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
      emailRequired: 'ელ-ფოსტის შეყვანა სავალდებულოა',
      emailInvalid: 'გთხოვთ მიუთითოთ ვალიდური ელ-ფოსტა',
      messageMin: 'შეტყობინება უნდა იყოს მინიმუმ 10 სიმბოლო',
    },
    en: {
      nameRequired: 'Name is required',
      nameMin: 'Name must be at least 2 characters',
      emailRequired: 'Email is required',
      emailInvalid: 'Please provide a valid email address',
      messageMin: 'Message must be at least 10 characters',
    }
  };

  const m = messages[lang] || messages.ka;

  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required(m.nameRequired)
      .min(2, m.nameMin),
    email: yup
      .string()
      .trim()
      .required(m.emailRequired)
      .email(m.emailInvalid),
    service: yup.string().default('architecture'),
    area: yup.string(),
    message: yup
      .string()
      .trim()
      .test('optional-min', m.messageMin, (val) => !val || val.length >= 10)
  });
};