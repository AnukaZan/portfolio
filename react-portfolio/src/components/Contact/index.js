import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import './index.scss';

function Contact() {
    const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
  return (

    <div className="contact-section">
        <h1 className="contact-heading">
            Contact <strong className="pink">Me </strong>
        </h1>
        <section class="contact-links border-left">
            <a href="https://drive.google.com/file/d/1hmnMfEOQ5FE5G_l8vb17g81lR6fx-WYx/view?usp=sharing" className='flat-button'> My Resume</a>
            <a href="https://www.linkedin.com/in/anuka-zan/" className='flat-button'> LinkedIn </a>
            <a href="https://github.com/AnukaZan" className='flat-button'> Github</a>
            <a href="anukazan@gmail.com" className='flat-button'> Email</a>
        </section>
        <form id="contact-form">
            <div>
                <label htmlFor="Name">Name:</label>
                <br></br>
                <input
                    type="text"
                    defaultValue={name}
                    onBlur={handleBlank}
                    name="Name"
                />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <br></br>
                <input
                    type="email"
                    defaultValue={email}
                    name="email"
                    onBlur={handleChange}
                />
            </div>
            <div>
                <label htmlFor="Message">Message:</label>
                <br></br>
                <textarea
                    name="Message"
                    defaultValue={message}
                    onBlur={handleBlank}
                    rows="5"
                />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit" className="flat-button">Submit</button>
        </form>
	</div>
    
  );
}

export default Contact;