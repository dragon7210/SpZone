import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useAypndSplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "AYPNDSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
