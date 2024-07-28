// frontend/src/SendEmailButton.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const SendEmailButton = () => {
    const [isSending, setIsSending] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState('');

    // Function to handle sending email
    const handleSendEmail = () => {
        setIsSending(true);
        setError('');

        const templateParams = {
            to_email: 'guptaarshia3007@gmail.com', // Replace with recipient's email address
            subject: 'Hello from EmailJS',
            message: 'This is a test message from EmailJS'
        };

        emailjs.send('service_vsik92b', 'template_3qtuxd1', templateParams, 'vHng79LMvBFoDfNIx')
            .then(response => {
                console.log('Email sent successfully:', response);
                setEmailSent(true);
            })
            .catch(error => {
                console.error('Error sending email:', error);
                setError('Failed to send email. Please try again.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div >
            <button 
                onClick={handleSendEmail} 
                className="bg-blue-500 text-white py-2 px-4 rounded"
                disabled={isSending}
            >
                {isSending ? 'Sending...' : 'Send Email'}
            </button>
            {emailSent && <p className="text-green-500 mt-2">Email sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default SendEmailButton;