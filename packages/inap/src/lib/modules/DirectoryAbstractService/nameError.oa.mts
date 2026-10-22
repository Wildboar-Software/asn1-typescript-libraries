import { nameError as directoryNameError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const nameError = roseError(directoryNameError);
