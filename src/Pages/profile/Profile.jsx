import React from 'react'
import "./profile.css"
import { Formik } from 'formik'
import * as yup from 'yup';
import { TextField, useMediaQuery } from '@mui/material';

const Profile = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    }

    const userSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        contact: yup.string().required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required"),
    })


    const isNonMobile = useMediaQuery("min-width:600px");

    const handleFormSubmit = (values) => {
        console.group(values)
    }

    return (
        <div className='team'>
            <div className="team-container">
                <h2>CREATE USER</h2>
                <span className="team-desc">Create a New User Profile</span>

                <Formik onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={userSchema}>

                    {({ values, errors, touched, handleBlur, handleChange, handeSubmit }) => (
                        <form onSubmit={handeSubmit} >
                            <div style={{
                                paddingTop: "20px",
                                display: "grid", gap: "30px",
                                gridTemplateColumns: "repeat(4, minmax(0,1fr)",



                            }}>
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="Contact Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="Address1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name="address1"
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={touched.address1 && errors.address1}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField style={{ color: "white", backgroundColor: "#4D525C", }}
                                    fullWidth
                                    variant='filled'
                                    type="text"
                                    label="Address2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name="address2"
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={touched.address2 && errors.address2}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </div>
                        </form>
                    )}

                </Formik>

            </div>
        </div >
    )
}

export default Profile
