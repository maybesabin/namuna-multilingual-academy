import ContactForm from "@/components/ContactForm"
import { Send } from "lucide-react"

const Form = () => {
    return (
        <div className="lg:w-3/5 w-full border border-neutral-200/50 rounded-lg lg:p-6 p-3">
            <h3 className="flex items-center gap-2">
                <Send className="lg:size-6 size-4 text-blue-700" />
                <span className="md:text-3xl text-xl font-semibold text-blue-700">
                    Send us a Message
                </span>
            </h3>
            <p className="md:text-sm text-xs text-blue-600 my-2">
                We are here to help you. Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
    )
}

export default Form