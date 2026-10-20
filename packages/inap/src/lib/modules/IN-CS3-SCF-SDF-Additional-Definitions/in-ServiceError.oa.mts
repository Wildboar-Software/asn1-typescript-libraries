/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary in_ServiceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-ServiceError ERROR ::= serviceError
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const in_ServiceError: ERROR = serviceError as unknown as ERROR;

/* eslint-enable */
