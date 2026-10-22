import { chainedModifyEntry as directoryChainedModifyEntry } from "@wildboar/x500/DistributedOperations";
import { roseOperation } from "../shared/roseOperation.mjs";

export const chainedModifyEntry = roseOperation(directoryChainedModifyEntry);
