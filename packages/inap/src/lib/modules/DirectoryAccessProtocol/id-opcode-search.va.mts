import { id_opcode_search as directoryCode } from "@wildboar/x500/CommonProtocolSpecification";
import { type Code } from "@wildboar/rose";
import { roseCode } from "../shared/roseOperation.mjs";

export const id_opcode_search: Code = roseCode(directoryCode);
