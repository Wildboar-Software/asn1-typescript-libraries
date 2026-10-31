/* eslint-disable */
// export { SupportedCurves, _decode_SupportedCurves, _encode_SupportedCurves } from "../AuthenticationFramework/SupportedCurves.vsa.mjs";
// export { id_ecPublicKey } from "../AuthenticationFramework/id-ecPublicKey.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";


/**
 * @summary ecPublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKey ALGORITHM ::= {  -- copied IETF RFC 5480
 *   PARMS       SupportedCurves
 *   IDENTIFIED  BY id-ecPublicKey }
 * ```
 * 
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export
const ecPublicKey: ALGORITHM = undefined;

/* eslint-enable */
