import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useNwoSplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "NWOSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
