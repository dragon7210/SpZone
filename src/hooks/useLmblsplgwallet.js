import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useLmblsplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "lmblsplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
