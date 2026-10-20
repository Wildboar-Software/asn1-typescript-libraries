/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
// export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";


/**
 * @summary dSABind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dSABind OPERATION ::= directoryBind
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const dSABind: OPERATION = directoryBind;

/* eslint-enable */
