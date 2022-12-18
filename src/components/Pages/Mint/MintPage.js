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
    </div>
  );
};

export default MintPage;
