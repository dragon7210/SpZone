import { useCall } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useTotalSplooge() {
  const { value, error } =
    useCall({
      contract: SploogeContract,
      method: "totalSplooge",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value;
}
