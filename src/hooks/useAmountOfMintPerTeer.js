import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useAmountOfMintPerTeer(mintPerteer) {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "amountOfMintPerTeer",
      args: [mintPerteer],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
