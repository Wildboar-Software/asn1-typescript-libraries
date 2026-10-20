/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
// export { chained } from "../DistributedOperations/chained.oa.mjs";
// export { list } from "../DirectoryAbstractService/list.oa.mjs";


/**
 * @summary chainedList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedList OPERATION ::= chained{list}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedList: OPERATION = chained;

/* eslint-enable */
