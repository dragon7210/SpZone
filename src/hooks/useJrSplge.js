import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useJrSplge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "JrSplge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
