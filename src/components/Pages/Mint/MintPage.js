import Mint from "components/Mint";
import NFTImage from "assets/img/1.png";

const x = [1, 2, 3];
const MintPage = () => {
  return (
    <div>
      <div className="flex justify-between px-[20px]">
        {x.map((index, ele) => (
          <Mint key={index} NFTImage={NFTImage} />
        ))}
      </div>
      <div className="flex justify-between px-[20px]">
        {x.map((index, ele) => (
          <Mint key={index} NFTImage={NFTImage} />
        ))}
      </div>
      <div className="text-center mt-[15px]">
        <p className="text-[30px]">Total NFTS: 1818</p>
        <p className="text-[30px]">Number of Tiers</p>
        <p className="text-[30px]">6 Total Raised: in USD</p>
        <p className="text-[30px]">
          The amount of NFT left to mint out of 1818
        </p>
      </div>
    </div>
  );
};

export default MintPage;
