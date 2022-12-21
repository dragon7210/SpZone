import { useEffect, useState } from "react";
import { setTotalCount } from "Reducer/totalCount";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Plus from "assets/img/plus.png";
import Minus from "assets/img/minus.png";
import { useEthers } from "@usedapp/core";
import {
  useAypndSplgeMint,
  useBaseSplgeMint,
  useJrSplgeMint,
  useLmblSplgeMint,
  useNwoSplgeMint,
  useYledSplgeMint,
} from "hooks";

let temp = [0, 0, 0, 0, 0, 0];

function total(arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((a, v) => a + v);
}

const Mint = ({ NFTImage, number, NFTCount, color, price }) => {
  const { account } = useEthers();
  const dispatch = useDispatch();
  const [mintAmount, setMintAmount] = useState(0);

  const { state: AypndSplgeMintState, send: AypndSplgeMint } =
    useAypndSplgeMint();
  const { state: BaseSplgeMintState, send: BaseSplgeMint } = useBaseSplgeMint();
  const { state: JrSplgeMintState, send: JrSplgeMint } = useJrSplgeMint();
  const { state: LmblSplgeMintState, send: LmblSplgeMint } = useLmblSplgeMint();
  const { state: NwoSplgeMintState, send: NwoSplgeMint } = useNwoSplgeMint();
  const { state: YledSplgeMintState, send: YledSplgeMint } = useYledSplgeMint();

  const mint = () => {
    if (account) {
      if (number === 0) {
        BaseSplgeMint(1, mintAmount);
        if (BaseSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      if (number === 1) {
        JrSplgeMint(1, mintAmount);
        if (JrSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      if (number === 2) {
        LmblSplgeMint(1, mintAmount);
        if (LmblSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      if (number === 3) {
        YledSplgeMint(1, mintAmount);
        if (YledSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      if (number === 4) {
        AypndSplgeMint(price, mintAmount);
        if (AypndSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      if (number === 5) {
        NwoSplgeMint(1, mintAmount);
        if (NwoSplgeMintState.status === "success") {
          toast.success("Success Minted");
        }
      }
      temp[number] += mintAmount;
      setMintAmount(0);
    } else {
      toast.error("Please connect Wallet");
    }
  };
  let totalCount = 1818 - total(temp);

  useEffect(() => {
    dispatch(setTotalCount(totalCount));
  }, [dispatch, totalCount]);

  return (
    <div
      className="mt-[30px] w-[600px] border-4 border-solid rounded-[30px] mx-auto flex"
      style={{ borderColor: color }}
    >
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
                mintAmount + 1 > NFTCount - temp[number]
                  ? NFTCount - temp[number]
                  : mintAmount + 1
              );
            }}
          >
            <img src={Plus} alt="Plus" />
          </button>
        </div>
        <div className="text-center mt-[20px]">
          <p className="font-bold mb-[10px] text-[white] text-[20px]">
            {price === 0 ? "Free" : "$" + price}
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
            {temp[number]}/{NFTCount} Minted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mint;
