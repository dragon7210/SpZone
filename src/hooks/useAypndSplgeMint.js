import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useAypndSplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "aypndSplgeMint",
    {}
  );
  return { state, send, event };
}
