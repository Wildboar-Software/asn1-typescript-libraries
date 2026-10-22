import { updateShadow as directoryUpdateShadow } from "@wildboar/x500/DirectoryShadowAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const updateShadow = roseOperation(directoryUpdateShadow);
