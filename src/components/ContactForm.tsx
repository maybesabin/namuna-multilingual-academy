const ContactForm = () => {
    return (
        <form className="mt-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Hari"
                        className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Bahadur"
                        className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="+977 9829100636"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm">
                    Message
                </label>
                <textarea
                    style={{ resize: "none" }}
                    id="message"
                    rows={4}
                    placeholder="Please enter your message here..."
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm