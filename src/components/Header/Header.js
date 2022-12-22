import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useEthers, shortenAddress } from "@usedapp/core";

const Header = () => {
  const { account, activate, deactivate } = useEthers();
  const handleConnect = async () => {
    if (account) {
      deactivate();
      return;
    }

    const providerOptions = {
      injected: {
        display: {
          name: "Metamask",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    };

    if (!account) {
      const web3Modal = new Web3Modal({
        providerOptions,
      });
      const provider = await web3Modal.connect();
      await activate(provider);
    }
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
      <p className="text-[#dab420] px-10 sm:px-0 sm:text-center text-[larger]">
        Ready to Splooge?
      </p>
      {account ? (
        <button
          className="bg-[blue] px-[20px] py-[5px]  rounded-lg absolute right-3 top-[23px]"
          onClick={disconnect}
        >
          <span className="text-[yellow]">{shortenAddress(account)}</span>
        </button>
      ) : (
        <button
          className="bg-[blue] px-[20px] py-[5px]  rounded-lg absolute right-3 top-[23px]"
          onClick={handleConnect}
        >
          <span className="text-[yellow]">Connect</span>
        </button>
      )}
    </div>
  );
};

export default Header;
