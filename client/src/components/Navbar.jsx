import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps} hover:text-yellow-300`}>{title}</li>;
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-64 mt-5 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Wallets", "Explore", "Arts", "Ethereum"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        {!currentAccount &&
        <button type="button" onClick={connectWallet} className="bg-[#e3c129] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#d1b01f]">
            <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
        }
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer hover:text-yellow-500"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer hover:text-yellow-500"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-2xl w-full my-2 hover:text-yellow-500">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Wallets", "Explore", "Arts", "Ethereum"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-3xl font-semibold hover:underline"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
