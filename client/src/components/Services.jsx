import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color, title, icon, subtitle}) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-5 m-2 mr-4 cursor-pointer hover:shadow-xl border-yellow-400 w-11/12">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-yellow-500 text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)
const Services = () => {
    return(
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services px-20 py-10">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className=" flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Why Ethereal?
                        <br/>
                        Best industry services.
                    </h1>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start items-center ">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                    subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Best Exachange Rate"
                    icon={<BiSearchAlt fontSize={21} className="text-white"/>}
                    subtitle="Using ethereal is free of charge (gas fee excluded). We guarantee your services for centuries."
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="Fastest Transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
                    subtitle="Transaction is the fastest in the industry."
                />
            </div>
        </div>
    );
};

export default Services;
