import { useEthers } from "@usedapp/core";

const Header = () => {
  const { account, activate, activateBrowserWallet, deactivate } = useEthers();
  const connect = () => {
    activateBrowserWallet();
  };
  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="bg-[black] py-[25px] relative">
      <p className="text-[#dab420] text-center">Ready to Splooge?</p>
      {account ? (
        <button
          className="bg-[blue] px-[20px] py-[5px]  rounded-lg absolute right-10 top-[20px]"
          onClick={disconnect}
        >
          <span className="text-[yellow]">
            {account.slice(0, 5) +
              "..." +
              account.slice(account.length - 4, account)}
          </span>
        </button>
      ) : (
        <button
          className="bg-[blue] px-[20px] py-[5px]  rounded-lg absolute right-10 top-[20px]"
          onClick={connect}
        >
          <span className="text-[yellow]">Connect</span>
        </button>
      )}
    </div>
  );
};

export default Header;
