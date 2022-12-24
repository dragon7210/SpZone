import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useBssplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "bssplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
