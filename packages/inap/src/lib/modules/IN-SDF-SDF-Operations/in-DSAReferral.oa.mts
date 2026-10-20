/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { dsaReferral } from "../DistributedOperations/dsaReferral.oa.mjs";
// export { dsaReferral } from "../DistributedOperations/dsaReferral.oa.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary in_DSAReferral
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-DSAReferral ERROR ::= dsaReferral
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const in_DSAReferral: ERROR = dsaReferral as unknown as ERROR;

/* eslint-enable */
