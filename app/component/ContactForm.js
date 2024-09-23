"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const success = () => toast.success("Your Response has been sent!");
    const failed = () => toast.error("There was Error While Sending Your Data!");
    const toggleForm = () => {
        setIsOpen(!isOpen);
    };
    
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, message };
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api/Contact`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: myHeaders,
        });
        let res = await response.json();
        console.log(res);
        if(res.success==true) {
            success()
        }
        else{
            failed()
        }
        setname('');
        setemail('');
        setmessage('');
    };

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setname(e.target.value);
        } else if (e.target.name === 'email') {
            setemail(e.target.value);
        } else {
            setmessage(e.target.value);
        }
    };

    return (
        <div>
            <div>
            <ToastContainer/>
            </div>
            <button
                onClick={toggleForm}
                className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                Contact Me
            </button>
            {isOpen && (
                <div className="fixed bottom-16 right-5 bg-white shadow-lg p-5 rounded-lg md:w-80 w-[90vw] border-black shadow-slate-500">
                    <h2 className="text-lg font-bold mb-2">Contact Me</h2>
                    <form onSubmit={handleSubmit} method='POST'>
                        <label className="block mb-1" htmlFor="name">Name:</label>
                        <input
                            className="border border-gray-300 p-2 mb-2 w-full rounded"
                            type="text"
                            id="name"
                            value={name}
                            name="name"
                            onChange={handleChange}
                            required
                        />
                        <label className="block mb-1" htmlFor="email">Email:</label>
                        <input
                            className="border border-gray-300 p-2 mb-2 w-full rounded"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <label className="block mb-1" htmlFor="message">Message:</label>
                        <textarea
                            className="border border-gray-300 p-2 mb-2 w-full rounded"
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={message}
                            rows="4"
                            required
                        />
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                            >
                                Send
                            </button>
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
