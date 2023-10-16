import React, { useState } from "react";
import './contact.css'
const Contact = () => {
    return (
        <div class="container">
            <form id="contact" action="" method="post">
                <h1>Contact form</h1>
                <fieldset>
                    <input type="text" tabindex="1" placeholder="first name" required />
                </fieldset>
                <fieldset>
                    <input type="text" tabindex="2" placeholder="last name" required />
                </fieldset>
                <fieldset>
                    <input type="email" tabindex="3" placeholder="email id" required />
                </fieldset>
                <fieldset>
                    <input type="tel" tabindex="4" placeholder="Phone No." required />
                </fieldset>
                <fieldset>
                    <input type="url" tabindex="5" placeholder="Website Link" required />
                </fieldset>
                <fieldset>
                    <textarea tabindex="4" placeholder="Leave your message" required>
                    </textarea>
                </fieldset>

                <fieldset>
                    <button
                        type="submit"
                        name="submit"
                        id="contact-submit"
                        data-submit="sending"
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
};

export default Contact;
