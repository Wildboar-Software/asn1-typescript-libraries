import { chainedSearch as directoryChainedSearch } from "@wildboar/x500/DistributedOperations";
import { roseOperation } from "../shared/roseOperation.mjs";

export const chainedSearch = roseOperation(directoryChainedSearch);
