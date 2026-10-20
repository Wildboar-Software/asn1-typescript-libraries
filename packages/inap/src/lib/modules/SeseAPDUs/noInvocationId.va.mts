/* eslint-disable */
import { InvocationId } from "../SeseAPDUs/InvocationId.ta.mjs";
// export { InvocationId, _decode_InvocationId, _encode_InvocationId } from "../SeseAPDUs/InvocationId.ta.mjs";


/**
 * @summary noInvocationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noInvocationId InvocationId ::= absent:NULL
 * ```
 * 
 * @constant
 */
export
const noInvocationId: InvocationId = { absent: null };

/* eslint-enable */
