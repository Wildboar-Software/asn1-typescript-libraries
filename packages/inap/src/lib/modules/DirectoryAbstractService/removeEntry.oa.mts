import { removeEntry as directoryRemoveEntry } from "@wildboar/x500/DirectoryAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const removeEntry = roseOperation(directoryRemoveEntry);
