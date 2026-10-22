import { updateError as directoryUpdateError } from "@wildboar/x500/DirectoryAbstractService";
import { roseError } from "../shared/roseOperation.mjs";

export const updateError = roseError(directoryUpdateError);
