import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";

import { SploogeZoneContractAddress } from "contract";
import SploogeABI from "abi/SploogeZone.json";

const SploogeContractInterface = new ethers.utils.Interface(SploogeABI);

export const SploogeContract = new Contract(
  SploogeZoneContractAddress,
  SploogeContractInterface
);
