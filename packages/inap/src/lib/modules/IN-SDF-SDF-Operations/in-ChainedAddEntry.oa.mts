/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { in_Chained } from "../IN-SDF-SDF-Operations/in-Chained.oa.mjs";
// export { in_Chained } from "../IN-SDF-SDF-Operations/in-Chained.oa.mjs";
// export { in_AddEntry } from "../IN-SCF-SDF-Additional-Definitions/in-AddEntry.oa.mjs";


/**
 * @summary in_ChainedAddEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-ChainedAddEntry OPERATION ::= in-Chained{in-AddEntry}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const in_ChainedAddEntry: OPERATION = in_Chained;

/* eslint-enable */
