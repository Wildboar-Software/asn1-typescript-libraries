/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { inEmptyUnbind } from "../IN-CS2-classes/inEmptyUnbind.oa.mjs";
// export { inEmptyUnbind } from "../IN-CS2-classes/inEmptyUnbind.oa.mjs";


/**
 * @summary in_directoryUnbind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-directoryUnbind OPERATION ::= inEmptyUnbind
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const in_directoryUnbind: OPERATION = inEmptyUnbind;

/* eslint-enable */
