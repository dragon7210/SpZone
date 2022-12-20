import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useBaseSplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "baseSplgeMint",
    {}
  );
  return { state, send, event };
}
