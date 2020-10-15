import * as yup from 'yup';

const newOrderSchema = yup.object().shape({
  contactName: yup
    .string()
    .trim()
    .min(2, 'The name must be at least two characters long')
    .required('Please enter your name'),
  organization: yup
    .string()
    .trim()
    .min(3, 'Organization name is too short'),
  organizationWebsite: yup.string(),
  contactPhone: yup
    .string()
    .trim()
    .min(6, 'Phone number is too short')
    .required('Please enter your contact phone'),
  contactEmail: yup
    .string()
    .trim()
    .min(5, 'E-mail must be at least 5 characters long')
    .required('E-mail is required')
    .email('Please provide valid e-mail address'),
  address: yup
    .string()
    .required('Please enter your address')
    .min(6, 'Address is too short'),
  country: yup
    .string()
    .min(2, 'Country must be at least 2 characters long')
    .required('Please enter your country'),
  comments: yup.string(),
  quantity: yup
    .number()
    .integer('The quantity must be a whole number')
    .positive()
    .min(1, 'The minimum quantity is 1')
    .nullable(true)
    .transform(value => (isNaN(value) ? 0 : value)), // empty field is treated as 0
});

export default newOrderSchema;
