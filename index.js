const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lathamani12345v@gmail.com',
        pass: 'mqeiuebjvvvvhoyj'
    }
});

// Email options
const mailOptions = {
    from: 'lathamani12345v@gmail.com',
    to: 'vivekindev@gmail.com',
    subject: 'Robocor-24(ByteWars)',
    text: 'Plain text version of the email',
    html: `
  HELLO WORLD
    
    `
};

// Function to send email
const sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error.message);
        } else {
            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
        }
    });
};

// Send 50 emails continuously
const totalEmails = 1;
let emailsSent = 0;

const sendNextEmail = () => {
    if (emailsSent < totalEmails) {
        console.log(`Sending email ${emailsSent + 1}`);
        sendEmail();
        emailsSent++;
        setTimeout(sendNextEmail, 2000); // Wait for 1 second before sending the next email
    } else {
        console.log('All emails sent!');
    }
};

sendNextEmail();
