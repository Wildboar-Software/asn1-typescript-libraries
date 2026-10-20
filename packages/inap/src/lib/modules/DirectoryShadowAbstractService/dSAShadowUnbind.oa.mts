/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { directoryUnbind } from "../DirectoryAbstractService/directoryUnbind.oa.mjs";
// export { directoryUnbind } from "../DirectoryAbstractService/directoryUnbind.oa.mjs";


/**
 * @summary dSAShadowUnbind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dSAShadowUnbind OPERATION ::= directoryUnbind
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const dSAShadowUnbind: OPERATION = directoryUnbind;

/* eslint-enable */
