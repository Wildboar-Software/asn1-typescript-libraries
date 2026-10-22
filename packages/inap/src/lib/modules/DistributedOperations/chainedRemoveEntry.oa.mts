import { chainedRemoveEntry as directoryChainedRemoveEntry } from "@wildboar/x500/DistributedOperations";
import { roseOperation } from "../shared/roseOperation.mjs";

export const chainedRemoveEntry = roseOperation(directoryChainedRemoveEntry);
