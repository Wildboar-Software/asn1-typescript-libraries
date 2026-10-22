import { dsaReferral as directoryDsaReferral } from "@wildboar/x500/DistributedOperations";
import { roseError } from "../shared/roseOperation.mjs";

export const dsaReferral = roseError(directoryDsaReferral);
