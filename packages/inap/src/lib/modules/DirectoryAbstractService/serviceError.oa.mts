import { serviceError as directoryServiceError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const serviceError = roseError(directoryServiceError);
