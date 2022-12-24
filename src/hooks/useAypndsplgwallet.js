import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useAypndsplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "aypndsplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
