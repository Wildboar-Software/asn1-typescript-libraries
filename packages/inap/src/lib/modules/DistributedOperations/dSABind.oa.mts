import { dSABind as directoryDSABind } from "@wildboar/x500/DistributedOperations";
import { roseOperation } from "../shared/roseOperation.mjs";

export const dSABind = roseOperation(directoryDSABind);
