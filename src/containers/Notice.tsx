import LatestNews from "@/components/LatestNews"
import LatestNotice from "@/components/LatestNotice"

const Notice = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex lg:flex-row flex-col items-start xl:w-[85rem] gap-12 w-full md:px-6 px-3">
                <LatestNotice />
                <LatestNews />
            </div>
        </div>
    )
}

export default Notice