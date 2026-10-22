import { modifyEntry as directoryModifyEntry } from "@wildboar/x500/DirectoryAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const modifyEntry = roseOperation(directoryModifyEntry);
