import Mint from "components/Mint";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NFTData } from "constant";

const MintPage = () => {
  const [count, setCount] = useState(1818);
  const temp = useSelector((e) => e.totalCount.value);
  useEffect(() => {
    setCount(temp);
  }, [temp]);
  return (
    <div className="bg-[wheat] pt-[30px]">
      <div className="px-[5%]">
        {NFTData.map((ele, index) => (
          <Mint
            key={index}
            NFTImage={ele.img}
            number={index}
            NFTCount={ele.count}
          />
        ))}
      </div>

      <div className="text-center mt-[15px]">
        <p className="text-[30px]">Total NFTS : 1818</p>
        <p className="text-[30px]">Number of Tiers : 6</p>
        <p className="text-[30px]">Total Raised: in USD</p>
        <p className="text-[30px]">
          The amount of NFT left to mint out of {count}
        </p>
      </div>
    </div>
  );
};

export default MintPage;
