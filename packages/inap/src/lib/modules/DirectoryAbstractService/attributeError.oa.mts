import { attributeError as directoryAttributeError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const attributeError = roseError(directoryAttributeError);
