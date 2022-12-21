import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useLmblSplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "LMBLSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
