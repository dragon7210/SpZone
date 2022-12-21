import { useState } from "react";

import { toast } from "react-toastify";
import Plus from "assets/img/plus.png";
import Minus from "assets/img/minus.png";
import { useEthers } from "@usedapp/core";
import { utils } from "ethers";
import Modal from "react-modal";
import RingLoader from "react-spinners/RingLoader";

import {
  useAypndSplgeMint,
  useBaseSplgeMint,
  useConfig,
  useJrSplgeMint,
  useLmblSplgeMint,
  useNwoSplgeMint,
  useYledSplgeMint,
} from "hooks";

let temp = [0, 0, 0, 0, 0, 0];

function ToValue(number) {
  return number / 10 ** 18;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "50%",
    overflow: "hidden",
    background: "transparent",
    transform: "translate(-50%, -50%)",
  },
};

const Mint = ({ NFTImage, number, color, nftCount }) => {
  const { account } = useEthers();
  const NFTprice = useConfig();
  const [isOpen, setIsOpen] = useState(false);

  const [mintAmount, setMintAmount] = useState(0);

  const { state: BaseSplgeMintState, send: BaseSplgeMint } = useBaseSplgeMint();
  const { state: JrSplgeMintState, send: JrSplgeMint } = useJrSplgeMint();
  const { state: LmblSplgeMintState, send: LmblSplgeMint } = useLmblSplgeMint();
  const { state: YledSplgeMintState, send: YledSplgeMint } = useYledSplgeMint();
  const { state: AypndSplgeMintState, send: AypndSplgeMint } =
    useAypndSplgeMint();
  const { state: NwoSplgeMintState, send: NwoSplgeMint } = useNwoSplgeMint();

  const mint = () => {
    if (account && NFTprice) {
      if (number === 0) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          BaseSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (BaseSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      if (number === 1) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          JrSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (JrSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      if (number === 2) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          LmblSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (LmblSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      if (number === 3) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          YledSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (YledSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      if (number === 4) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          AypndSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (AypndSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      if (number === 5) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          setIsOpen(true);
          NwoSplgeMint(mintAmount, {
            value: utils.parseEther(NFTprice[number].toString()),
          });
          if (NwoSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
        }
      }
      temp[number] += mintAmount;
      setMintAmount(0);
    } else {
      toast.error("Please connect Wallet");
    }
  };

  return (
    <div
      className="mt-[30px] w-[600px] border-4 border-solid rounded-[30px] mx-auto flex"
      style={{ borderColor: color }}
    >
      <Modal isOpen={isOpen} style={customStyles}>
        <RingLoader
          color={"#36d7b7"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Modal>
      <div className="flex justify-center w-[50%]">
        <img src={NFTImage} alt="NFT" className="rounded-[27px]" />
      </div>
      <div className="w-[50%] p-5 my-auto">
        <div className="flex justify-center">
          <button
            className="bg-[yellow] rounded-full w-[40px] h-[40px]"
            onClick={() => {
              setMintAmount(mintAmount > 0 ? mintAmount - 1 : mintAmount);
            }}
          >
            <img src={Minus} alt="minus" />
          </button>
          <p className="my-auto mx-[25px] text-[20px] text-[white]">
            {mintAmount}
          </p>
          <button
            className="bg-[yellow] rounded-full w-[40px] h-[40px]"
            onClick={() => {
              setMintAmount(
                mintAmount + 1 > nftCount - temp[number]
                  ? nftCount - temp[number]
                  : mintAmount + 1
              );
            }}
          >
            <img src={Plus} alt="Plus" />
          </button>
        </div>
        <div className="text-center mt-[20px]">
          <p className="font-bold mb-[10px] text-[white] text-[20px]">
            {NFTprice ? ToValue(NFTprice[number]) : 0} ETH
          </p>
          <button
            className="bg-[blue] w-[100%] py-[10px] rounded-[15px] "
            onClick={mint}
          >
            <p className="font-bold text-[yellow]">Mint</p>
          </button>
        </div>
        <div className="text-center mt-[20px]">
          <p className="font-bold mb-[10px] text-[white] text-[20px]">
            {temp[number]}/{nftCount} Minted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mint;
