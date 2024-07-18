import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddJobPage = ({ addJobSubmit }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Under $50K');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        console.log(description);
        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                companyDescription,
                contactEmail,
                contactPhone
            }
        }
        addJobSubmit(newJob);
        toast.success('Job added succesfully')
        return navigate('/jobs')

    }

    return (
        <section className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <form onSubmit={submitForm}>
                        <h2 className='text-3xl text-center font-semibold mb-6'>Add Job</h2>
                        <div className='mb-4'>
                            <label HtmlFor="type" className='block text-gray-700 font-bold mb-2'>Job Type</label>
                            <select id='type' name='type' className='border rounded w-full px-3 py-2' required value={type} onChange={(e) => setType(e.target.value)}>
                                <option value='Full-Time'>Full-Time</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value='Remote'>Remote</option>
                                <option value='Internship'>Internship</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="jobName" className='block text-gray-700 font-bold mb-2'>Job Listing Name</label>
                            <input type='text' id='title' name='title' className='border rounded w-full px-3 py-2' placeholder='e.g, Beautiful Apartment in Miami' required alue={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="description" className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea id='description' name='description' className='border rounded w-full px-3 py-2' rows='4' placeholder='Add any job duties, expectation, requirements, e.t.c' alue={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="salary" className='block text-gray-700 font-bold mb-2'>Salary</label>
                            <select id='salary' name='salary' className='border rounded w-full px-3 py-2' required alue={salary} onChange={(e) => setType(e.target.value)}>
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50 - $60K'>$50 - $60K</option>
                                <option value='$60 - $70K'>$60 - $70K</option>
                                <option value='$70 - $80K'>$70 - $80K</option>
                                <option value='$80 - $90K'>$80 - $90K</option>
                                <option value='$90 - $100K'>$90 - $100K</option>
                                <option value='$100 - $125K'>$100 - 125K</option>
                                <option value='$125 - 150K'>$125 - 150K</option>
                                <option value='$150 - 175K'>$150 - 175K</option>
                                <option value='$175 - 200K'>$175 - 200K</option>
                                <option value='Over $200K'>Over $200K</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="location" className='block text-gray-700 font-bold mb-2'>Location</label>
                            <input type='text' id='location' name='location' className='border rounded w-full px-3 py-2' placeholder='Company Location' required alue={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <h2 className='text-2xl mb-5'>Company Info</h2>
                        <div className='mb-4'>
                            <label HtmlFor="company" className='block text-gray-700 font-bold mb-2'>Company Name</label>
                            <input type='text' id='company' name='company' className='border rounded w-full px-3 py-2' placeholder='Company Name' required alue={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="company_description" className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea id='company_description' name='description' className='border rounded w-full px-3 py-2' rows='4' placeholder='What does your company do?' alue={companyDescription} onChange={(e) => setcompanyDescription(e.target.value)}></textarea>
                        </div>
                        <div className='mb-4'>
                            <label HtmlFor="contact_email" className='block text-gray-700 font-bold mb-2'>Contact Email</label>
                            <input type='email' id='contact_email' name='contact_email' className='border rounded w-full px-3 py-2' placeholder='Email address for applicants' required alue={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label for="contact_phone" className='block text-gray-700 font-bold mb-2'>Contact Phone</label>
                            <input type='tel' id='contact_phone' name='contact_phone' className='border rounded w-full px-3 py-2' placeholder='Optional phone for applicants' required alue={contactPhone} onChange={(e) => setContactPhone(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-4 py-2 rounded-full w-full focus;outline-none focus;shadow-outline' type='submit'>Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddJobPage