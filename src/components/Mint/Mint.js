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

const Mint = ({ NFTImage, number, NFTCount }) => {
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
    <div className="mt-[30px] w-[50%] border-2 border-[white] border-solid rounded-[30px] mx-auto flex">
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
        <div className="flex justify-center mt-[30px]">
          <button
            className="bg-[blue] w-[100%] py-[10px] rounded-[15px] "
            onClick={mint}
          >
            <p className="font-bold text-[yellow]">Mint</p>
          </button>
        </div>
        <div className="flex justify-center mt-[30px]">
          <p className="font-bold mb-[10px] text-[white] text-[20px]">
            {temp[number]}/{NFTCount} Minted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mint;
