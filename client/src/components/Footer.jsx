import logo from "../../images/logo.png";

const Footer = () => {
    return(
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer ">
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
            <div className="w-full flex sm:flex-row flex-col align-middle justify-between items-center my-10">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32"/>
                </div>
                <div className="flex flex-1 justify-evenly align-middle items-center flex-wrap w-full">
                    <p className="text-base text-center mx-2 cursor-pointer text-white hover:text-yellow-500">Market</p>
                    <p className="text-base text-center mx-2 cursor-pointer text-white hover:text-yellow-500">About Us</p>
                    <p className="text-base text-center mx-2 cursor-pointer text-white hover:text-yellow-500">Career</p>
                    <p className="text-base text-center mx-2 cursor-pointer text-white hover:text-yellow-500">Join Us</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-10 mb-3">
                <div className="text-white text-sm text-center">@Ethereal 2022</div>
                <div className="text-white text-sm text-center">All rights reversed</div>
            </div>
        </div>
    );
};

export default Footer;
