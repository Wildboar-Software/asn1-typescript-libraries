/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.mjs";
// export { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary in_DirectoryBindError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-DirectoryBindError ERROR ::= directoryBindError
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const in_DirectoryBindError: ERROR = directoryBindError as unknown as ERROR;

/* eslint-enable */
