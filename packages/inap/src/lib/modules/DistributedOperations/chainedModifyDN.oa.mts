/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
// export { chained } from "../DistributedOperations/chained.oa.mjs";
// export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa.mjs";


/**
 * @summary chainedModifyDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedModifyDN OPERATION ::= chained{modifyDN}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedModifyDN: OPERATION = chained;

/* eslint-enable */
