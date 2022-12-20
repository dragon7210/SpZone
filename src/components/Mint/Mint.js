import { useEffect, useState } from "react";
import { setTotalCount } from "Reducer/totalCount";
import { useDispatch } from "react-redux";
import Plus from "assets/img/plus.png";
import Minus from "assets/img/minus.png";

let temp = [0, 0, 0, 0, 0, 0];

function total(arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((a, v) => a + v);
}

const Mint = ({ NFTImage, number }) => {
  const dispatch = useDispatch();
  const [mintAmount, setMintAmount] = useState(0);
  const mint = () => {
    temp[number] += mintAmount;
    setMintAmount(0);
  };

  let totalCount = 1818 - total(temp);

  useEffect(() => {
    dispatch(setTotalCount(totalCount));
  }, [dispatch, totalCount]);

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
        <p className="font-bold mb-[10px]">{temp[number]}/303 Minted</p>
      </div>
    </div>
  );
};

export default Mint;
