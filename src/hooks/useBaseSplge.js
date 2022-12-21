import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useBaseSplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "baseSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
