import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useJrsplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "jrsplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
