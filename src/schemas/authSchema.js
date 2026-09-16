import * as yup from 'yup';

export const getAuthSchema = (isRegister, lang = 'ka') => {
  const messages = {
    ka: {
      nameRequired: 'სახელის შეყვანა სავალდებულოა',
      nameMin: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
      emailRequired: 'ელ-ფოსტის შეყვანა სავალდებულოა',
      emailInvalid: 'გთხოვთ მიუთითოთ ვალიდური ელ-ფოსტა',
      passwordRequired: 'პაროლის შეყვანა სავალდებულოა',
      passwordStrong: 'პაროლი უნდა იყოს მინ. 6 სიმბოლო, შეიცავდეს მცირე/დიდ ასოს და ციფრს',
      confirmRequired: 'პაროლის დადასტურება სავალდებულოა',
      confirmMatch: 'პაროლები არ ემთხვევა'
    },
    en: {
      nameRequired: 'Name is required',
      nameMin: 'Name must be at least 2 characters',
      emailRequired: 'Email is required',
      emailInvalid: 'Please provide a valid email address',
      passwordRequired: 'Password is required',
      passwordStrong: 'Password must be min 6 chars, with uppercase, lowercase and number',
      confirmRequired: 'Please confirm your password',
      confirmMatch: 'Passwords must match'
    }
  };

  const m = messages[lang] || messages.ka;

  // პაროლის რთული ვალიდაცია RegEx-ით
  const passwordValidation = yup
    .string()
    .required(m.passwordRequired)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, m.passwordStrong);

  const baseSchema = {
    email: yup.string().trim().required(m.emailRequired).email(m.emailInvalid),
    password: passwordValidation
  };

  if (isRegister) {
    return yup.object().shape({
      ...baseSchema,
      name: yup.string().trim().required(m.nameRequired).min(2, m.nameMin),
      confirmPassword: yup
        .string()
        .required(m.confirmRequired)
        .oneOf([yup.ref('password')], m.confirmMatch)
    });
  }

  return yup.object().shape(baseSchema);
};