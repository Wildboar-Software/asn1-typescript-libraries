/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
// export { chained } from "../DistributedOperations/chained.oa.mjs";
// export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa.mjs";


/**
 * @summary chainedModifyEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedModifyEntry OPERATION ::= chained{modifyEntry}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedModifyEntry: OPERATION = chained;

/* eslint-enable */
