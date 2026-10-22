import { coordinateShadowUpdate as directoryCoordinateShadowUpdate } from "@wildboar/x500/DirectoryShadowAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const coordinateShadowUpdate = roseOperation(directoryCoordinateShadowUpdate);
