import { getDefaultNormalizer } from '@testing-library/react';
import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validateSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    email: Yup.string().email('Invalid email address').required("email is required"),
    password : Yup.string().required("pasword is required").min(8, "password must be more that 8 characters"),
    passwordConf: Yup.string().oneOf([Yup.ref('password'), null], 'Password is not cot correct'),
    wilaya: Yup.string().required('please select your wilaya'),
    gender:Yup.string().required('please select your gender'),
    firstname: Yup.string().required ('firstname is required'),
    lastname: Yup.string().required ('lastname is required'),
    codePostal: Yup.number().required('postal code is required').max(5,'postal code must be in 5 numbers'),
    phone: Yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().required('address is required')
  
})

export default validateSchema