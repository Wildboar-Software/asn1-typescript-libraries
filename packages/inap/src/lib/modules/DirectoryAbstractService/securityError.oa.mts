import { securityError as directorySecurityError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const securityError = roseError(directorySecurityError);
