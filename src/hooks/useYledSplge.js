import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useYledplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "YLEDSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
