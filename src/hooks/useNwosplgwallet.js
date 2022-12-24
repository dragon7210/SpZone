import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useNwosplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "nwosplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
