import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useConfig() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "config",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
