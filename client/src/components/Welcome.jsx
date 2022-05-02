import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-yellow-600 text-sm text-yellow-300 font-light hover:text-gray-500";

const Input = ({ placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder} 
        type={type}
        step="0.0001"
        value={value}
        onChange={(e)=> handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message }= formData;
        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message )return;

        sendTransaction();
    }
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-start justify-center w-full mf:px-40 md:p-10 mf:py-12">
            <div className="flex mf:flex-row flex-col justify-center items-center my-20 mf:px-10 w-full">
                    <div className="flex flex-col justify-start mf:pl-10 w-6/12">
                        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                            Send your crypto <br/> Amazing velocity
                        </h1>
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            Smartcontract guarantees your security. <br/>
                            Trade cryptocurrencies on Ethereal easily.
                        </p>
                        {!currentAccount &&
                        <button type="button" onClick={connectWallet} className="flex felx-row justify-center w-80 items-center my-5 bg-[#e3c129] p-3 rounded-full cursor-pointer hover:bg-[#d1b01f]">
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                        </button>
                        }
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 mt-10 w-6/12">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={commonStyles}>
                            Ropsten
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Kovan
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Rinkeby
                        </div>
                        <div className={commonStyles}>
                            Goerli
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Localhost
                        </div>
                    </div>
                </div>
                <div className="flex mf:flex-row flex-col flex-1 items-center justify-start w-full mf:mt-0 px-10 ">
                    <div className={`mx-10 p-5 justify-end items-start flex-col rounded-xl h-60 w-full my-5 ${currentAccount?'eth-card hover:bg-yellow-300':''} white-glassmorphism  hover:cursor-pointer`}>
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-star">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center hover:bg-yellow-400">
                                    <SiEthereum fontSize={21} color="#fff"/>
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff"/>
                            </div>
                            <div>
                                <p className="text-white font-light text-xl">
                                    {currentAccount? shortenAddress(currentAccount): 'Wallet Unconnected.'}
                                </p>
                                <p className="text-white font-semibold mt-1 text-2xl">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-20 p-5 w-full flex flex-col items-center justify-start blue-glassmorphism ">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
                        <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleChange}/>
                        <Input placeholder="Keyword(Gif)" name="keyword" type="text" handleChange={handleChange}/>
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>
                        <div className="h-[1px] w-full bg-[#aa994d] my-2"/>
                        {isLoading? (
                            <Loader/>
                        ):(
                            <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#7e7d7a] cursor-pointer rounded-full hover:bg-yellow-500">
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Welcome;
