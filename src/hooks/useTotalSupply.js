import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useTotalSupply() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "totalSupply",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
