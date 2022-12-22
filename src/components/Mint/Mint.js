import { useState } from "react";

import { toast } from "react-toastify";
import Plus from "assets/img/plus.png";
import Minus from "assets/img/minus.png";
import { useEtherBalance, useEthers } from "@usedapp/core";
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
  const [isOpen, setIsOpen] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);

  const { account } = useEthers();
  const balance = useEtherBalance(account);
  const NFTprice = useConfig();
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
          return;
        } else {
          setIsOpen(true);
          BaseSplgeMint(mintAmount, {
            value: NFTprice[number],
          });
          if (BaseSplgeMintState.status === "Success") {
            setIsOpen(false);
            toast.success("Success Minted");
          }
          if (BaseSplgeMintState.status === "None") {
            setIsOpen(false);
            toast.warning("Unsuccess Minted");
          }
        }
      }
      if (number === 1) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          if (balance > NFTprice[number] * mintAmount) {
            setIsOpen(true);
            JrSplgeMint(mintAmount, {
              value: NFTprice[number],
            });
            if (JrSplgeMintState.status === "Success") {
              setIsOpen(false);
              toast.success("Success Minted");
            } else {
              setIsOpen(false);
              toast.warning("Unsuccess Minted");
            }
          } else {
            toast.warning("Not enough Eth");
          }
        }
      }
      if (number === 2) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          if (balance > NFTprice[number] * mintAmount) {
            setIsOpen(true);
            LmblSplgeMint(mintAmount, {
              value: NFTprice[number],
            });
            if (LmblSplgeMintState.status === "Success") {
              setIsOpen(false);
              toast.success("Success Minted");
            } else {
              setIsOpen(false);
              toast.warning("Unsuccess Minted");
            }
          } else {
            toast.warning("Not enough Eth");
          }
        }
      }
      if (number === 3) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          if (balance > NFTprice[number] * mintAmount) {
            setIsOpen(true);
            YledSplgeMint(mintAmount, {
              value: NFTprice[number],
            });
            if (YledSplgeMintState.status === "Success") {
              setIsOpen(false);
              toast.success("Success Minted");
            } else {
              setIsOpen(false);
              toast.warning("Unsuccess Minted");
            }
          } else {
            toast.warning("Not enough Eth");
          }
        }
      }
      if (number === 4) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          if (balance > NFTprice[number] * mintAmount) {
            setIsOpen(true);
            AypndSplgeMint(mintAmount, {
              value: NFTprice[number],
            });
            if (AypndSplgeMintState.status === "Success") {
              setIsOpen(false);
              toast.success("Success Minted");
            } else {
              setIsOpen(false);
              toast.warning("Unsuccess Minted");
            }
          } else {
            toast.warning("Not enough Eth");
          }
        }
      }
      if (number === 5) {
        if (mintAmount === 0) {
          toast.warning("Please increase Amount");
          return;
        } else {
          if (balance > NFTprice[number] * mintAmount) {
            setIsOpen(true);
            NwoSplgeMint(mintAmount, {
              value: NFTprice[number],
            });
            if (NwoSplgeMintState.status === "Success") {
              setIsOpen(false);
              toast.success("Success Minted");
            } else {
              setIsOpen(false);
              toast.warning("Unsuccess Minted");
            }
          } else {
            toast.warning("Not enough Eth");
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
      className="mt-[30px] border-4 border-solid rounded-[30px] mx-auto md:flex max-w-[600px]"
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
      <div className="flex justify-center md:w-[100%]">
        <img src={NFTImage} alt="NFT" className="rounded-[27px]" />
      </div>
      <div className="p-5 my-auto md:w-[100%]">
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
