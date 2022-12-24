import Mint from "components/Mint";
import { NFTData } from "constant";
import { useTotalSplooge, useTotalSupply } from "hooks";

const MintPage = () => {
  const totalSplooge = useTotalSplooge();
  const totalSupply = useTotalSupply();
  return (
    <div className="bg-[#111213] pt-[30px]">
      <div className="px-[5%]">
        {NFTData.map((ele, index) => (
          <Mint
            key={index}
            number={index}
            NFTImage={ele.img}
            color={ele.color}
          />
        ))}
      </div>

      <div className="text-center py-[30px] px-[20px]">
        <p className="text-[30px] text-[yellow]">
          Total NFTS : {totalSplooge ? parseInt(totalSplooge) : 0}
        </p>
        <p className="text-[30px] text-[yellow]">Number of Tiers : 6</p>
        <p className="text-[30px] text-[yellow]">Total Raised: in USD</p>
        <p className="text-[30px] text-[yellow]">
          The amount of NFT left to mint out of&nbsp;
          {totalSupply ? totalSplooge - parseInt(totalSupply) : 0}
        </p>
      </div>
    </div>
  );
};

export default MintPage;
