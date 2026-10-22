import { directoryBindError as directoryDirectoryBindError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const directoryBindError = roseError(directoryDirectoryBindError);
