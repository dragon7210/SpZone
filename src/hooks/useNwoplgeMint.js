import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useNwoplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "nwoSplgeMint",
    {}
  );
  return { state, send, event };
}
