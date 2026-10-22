import { search as directorySearch } from "@wildboar/x500/DirectoryAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const search = roseOperation(directorySearch);
