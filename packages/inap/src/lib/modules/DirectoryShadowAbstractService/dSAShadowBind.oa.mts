import { dSAShadowBind as directoryDSAShadowBind } from "@wildboar/x500/DirectoryShadowAbstractService";
import { roseOperation } from "../shared/roseOperation.mjs";

export const dSAShadowBind = roseOperation(directoryDSAShadowBind);
