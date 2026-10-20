/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";
// export { abandon } from "../DirectoryAbstractService/abandon.oa.mjs";


/**
 * @summary chainedAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedAbandon OPERATION ::= abandon
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedAbandon: OPERATION = abandon;

/* eslint-enable */
