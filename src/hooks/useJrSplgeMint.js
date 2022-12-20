import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useJrSplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "jrSplgeMint",
    {}
  );
  return { state, send, event };
}
