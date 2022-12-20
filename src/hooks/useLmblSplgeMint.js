import { useContractFunction } from "@usedapp/core";
import { SploogeContract } from "./config";

export default function useLmblSplgeMint() {
  const { state, send, event } = useContractFunction(
    SploogeContract,
    "lmblSplgeMint",
    {}
  );
  return { state, send, event };
}
