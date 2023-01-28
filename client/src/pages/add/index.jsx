import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"
import {Helmet} from "react-helmet";
const SignupSchema = Yup.object().shape({
    img: Yup.string()
      .min(2, 'Qisadir!!')
      .max(100, 'Uzundur!!')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Qisadir!!')
      .max(50, 'Uzundur!!')
      .required('Required'),
    title: Yup.string()
      .min(2, 'Qisadir!!')
      .max(100, 'Uzundur!!')
      .required('Required'),
    price: Yup.number()
      .min(2, 'Qisadir!!')
      .max(500, 'Uzundur!!')
      .required('Required'),
  });
const Add = () => {
  return (
    <div className='form'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Formik
       initialValues={{
         img: '',
         name: '',
         title: '',
         price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
   axios.post("http://localhost:8000/student",values)
   resetForm()
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <h3>Img Url</h3>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
           <h3>Name</h3>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <h3>Title</h3>
           <Field name="title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
           <h3>Price</h3>
           <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}

           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Add