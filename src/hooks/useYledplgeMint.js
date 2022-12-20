import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useYledplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "yledSplgeMint",
    {}
  );
  return { state, send, event };
}
