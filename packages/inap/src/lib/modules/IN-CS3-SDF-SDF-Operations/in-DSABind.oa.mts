/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { in_DirectoryBind } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-DirectoryBind.oa.mjs";
// export { in_DirectoryBind } from "../IN-CS3-SCF-SDF-Additional-Definitions/in-DirectoryBind.oa.mjs";


/**
 * @summary in_DSABind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-DSABind OPERATION ::= in-DirectoryBind
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const in_DSABind: OPERATION = in_DirectoryBind;

/* eslint-enable */
