import { addEntry as directoryAddEntry } from "@wildboar/x500/DirectoryAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const addEntry = roseOperation(directoryAddEntry);
