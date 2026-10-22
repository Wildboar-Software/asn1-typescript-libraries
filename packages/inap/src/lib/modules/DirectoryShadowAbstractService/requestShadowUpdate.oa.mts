import { requestShadowUpdate as directoryRequestShadowUpdate } from "@wildboar/x500/DirectoryShadowAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const requestShadowUpdate = roseOperation(directoryRequestShadowUpdate);
