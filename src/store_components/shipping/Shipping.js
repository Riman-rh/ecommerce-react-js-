import React from 'react'
import validateSchema from '../../validationShema'
import { Formik} from "formik";

import './Shipping.css'
const Shipping = () => {
  return (
 <form className='shipping_form'>
    <h1 className='shipping_h1'>Shipping Details</h1>
        <Formik
          initialValues={{ firstname:'', lastname: '', wilaya: '', phone: '', address:''}}
          validationSchema= {validateSchema}
          onSubmit={(values, { setSubmitting }) => {
        
            setTimeout(() => {
              
              setSubmitting(false);
            }, 400);
          }}
        >
            {formik => (
            <>
                <div className='full_name'>
                    <div className='name'>
                    <label className='shipping_label'>First name</label>
                    <input type='text'placeholder='First name' {...formik.getFieldProps('firstname')} />
                    {formik.touched.firstname && formik.errors.firstname ? (
                    < div className="input_feedback" >{formik.errors.firstname}  </div>) : null}
                    </div>
                    <div className='name'>
                    <label className='shipping_label'>First name</label>
                    <input type='text'placeholder='Last name' {...formik.getFieldProps('lastname')}/>
                    {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="input_feedback" >{formik.errors.lastname}  </div>) : null}
                    </div>
                </div>
                <div className='form_item'>
                    <label className='shipping_label'>Email</label>
                    <input type='text' placeholder='Email' {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email ? (
                    <div className="input_feedback" >{formik.errors.email}  </div>) : null}
                </div>
                <div className='form_item'>
                    <label className='shipping_label'>Wilaya</label>
                    <select {...formik.getFieldProps('wilaya')}>
                        <option>Algiers</option>
                    </select>
                    {formik.touched.email && formik.errors.email ? (
                <    div className="input_feedback" >{formik.errors.wilaya}  </div>) : null}
                </div>
                <div className='form_item'>
                    <label className='shipping_label'>Address</label>
                    <input type='text' placeholder='Address' className='shipping_input' {...formik.getFieldProps('address')}/>
                    {formik.touched.address && formik.errors.address ? (
                <    div className="input_feedback" >{formik.errors.address}  </div>) : null}
                </div>
                <div>
                <div className='form_item'>
                <label className='shipping_label'>Phone</label>
                <input type='text' placeholder='Phone' {...formik.getFieldProps('phone')}/>
                {formik.touched.phone && formik.errors.phone ? (
                <div className="input_feedback" >{formik.errors.phone} </div>) : null}
                </div>
            </div>
            <button type='submit' className='shipping_btn'>Order</button>
            </>
            )}
            </Formik>
    </form>
   
  )
}

export default Shipping