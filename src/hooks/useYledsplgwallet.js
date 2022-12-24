import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useYledsplgwallet() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "yledsplgwallet",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
