import { useState } from "react";

const Mint = ({NFTImage}) => {
  const [mintAmount, setMintAmount] = useState(0);
  return (
    <div className="mt-[15px] w-[30%]">
      <div className="flex justify-center mt-[15px]">
        <img src={NFTImage} alt="NFT" className="w-[100%]" />
      </div>
      <div className="flex justify-center mt-[15px]">
        <button
          className="bg-[yellow] rounded-full w-[40px] h-[40px]"
          onClick={() => {
            setMintAmount(mintAmount > 0 ? mintAmount - 1 : mintAmount);
          }}
        >
          <p className="font-medium">-</p>
        </button>
        <p className="my-auto mx-[25px] text-[20px]">{mintAmount}</p>
        <button
          className="bg-[yellow] rounded-full w-[40px] h-[40px]"
          onClick={() => {
            setMintAmount(mintAmount + 1);
          }}
        >
          <p className="font-medium">+</p>
        </button>
      </div>
      <div className="flex justify-center mt-[15px]">
        <button className="bg-[yellow] w-[100%] py-[10px] rounded-[15px]  ">
          <p className="font-bold ">Mint</p>
        </button>
      </div>
      <div className="flex justify-center mt-[10px]">
        <p className="font-bold">10/100 Minted</p>
      </div>
    </div>
  );
};

export default Mint;
