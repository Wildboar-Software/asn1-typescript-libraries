import { referral as directoryReferral } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const referral = roseError(directoryReferral);
