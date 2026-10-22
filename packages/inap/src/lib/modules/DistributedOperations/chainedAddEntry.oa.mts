import { chainedAddEntry as directoryChainedAddEntry } from "@wildboar/x500/DistributedOperations";
import { roseOperation } from "../shared/roseOperation.mjs";

export const chainedAddEntry = roseOperation(directoryChainedAddEntry);
