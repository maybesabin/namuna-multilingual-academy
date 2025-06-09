import { Clock, Mail, MapPin, MapPinned, Phone } from "lucide-react"

const GetInTouch = () => {
    const items = [
        { title: "Address", icon: MapPinned, list: ["123 Education street", "Learning City, LC 12345", "United States"] },
        { title: "Phone", icon: Phone, list: ["Main Office: +977 929292929", "Admissions: +977 922999292"] },
        { title: "Email", icon: Mail, list: ["info@ourschool.edu", "admissions@ourschool.edu"] },
        { title: "Office Hours", icon: Clock, list: ["Monday-Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 AM", "Sunday: Closed"] }
    ]
    return (
        <div className="lg:w-2/5 w-full border border-neutral-200/50 rounded-lg lg:p-6 p-3">
            <h3 className="flex items-center gap-2">
                <MapPin className="lg:size-6 size-4 text-blue-700" />
                <span className="md:text-3xl text-xl font-semibold text-blue-700">
                    Get In Touch
                </span>
            </h3>
            <p className="md:text-sm text-xs text-blue-600 my-2">
                We are here to help you. Please fill out the form below and we will get back to you as soon as possible.
            </p>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-start gap-4 mt-6"
                >
                    <item.icon className="lg:size-12 size-10 text-blue-600 lg:p-[13px] p-2.5 bg-blue-200 rounded-full" />
                    <div className="flex flex-col items-start">
                        <p className="md:text-xl text-base text-blue-800 font-medium">
                            {item.title}
                        </p>
                        <ol className="text-sm text-neutral-600 mt-1">
                            {item.list.map((_) => (
                                <li key={_}>{_}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GetInTouch