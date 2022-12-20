import { useState } from "react";
import Plus from "assets/img/plus.png";
import Minus from "assets/img/minus.png";

const Mint = ({ NFTImage }) => {
  const [mintAmount, setMintAmount] = useState(0);
  const mint = () => {
    console.log(mintAmount);
  };
  return (
    <div className="mt-[15px] w-[30%] border-2 border-[black] border-solid rounded-[30px]  ">
      <div className="flex justify-center">
        <img src={NFTImage} alt="NFT" className="w-[100%] rounded-[27px]" />
      </div>
      <div className="flex justify-center mt-[15px]">
        <button
          className="bg-[yellow] rounded-full w-[40px] h-[40px]"
          onClick={() => {
            setMintAmount(mintAmount > 0 ? mintAmount - 1 : mintAmount);
          }}
        >
          <img src={Minus} alt="minus" />
        </button>
        <p className="my-auto mx-[25px] text-[20px]">{mintAmount}</p>
        <button
          className="bg-[yellow] rounded-full w-[40px] h-[40px]"
          onClick={() => {
            setMintAmount(mintAmount + 1);
          }}
        >
          <img src={Plus} alt="Plus" />
        </button>
      </div>
      <div className="flex justify-center mt-[15px]">
        <button
          className="bg-[yellow] w-[100%] py-[10px] rounded-[15px] "
          onClick={mint}
        >
          <p className="font-bold ">Mint</p>
        </button>
      </div>
      <div className="flex justify-center mt-[10px]">
        <p className="font-bold mb-[10px]">10/100 Minted</p>
      </div>
    </div>
  );
};

export default Mint;
