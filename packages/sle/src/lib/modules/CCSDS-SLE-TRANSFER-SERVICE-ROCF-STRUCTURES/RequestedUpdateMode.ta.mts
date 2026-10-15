/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedUpdateMode
 * @description
 * 
 * Whether ROCF-START delivers every matching OCF or only changes. Service
 * management permits a set of these values, and START must use a member of
 * that set. 0 is continuous. 1 is change-based.
 *
 * CCSDS 911.5-B-4, section 3.4.2.10 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUpdateMode      ::=    INTEGER
 * {  continuous                    (0)
 * ,  changeBased                   (1)
 * }
 * ```
 */
export
type RequestedUpdateMode = INTEGER;

/**
 * @summary RequestedUpdateMode_continuous
 * @description
 * 
 * Insert a transfer-data record for every OCF that meets the START time,
 * global VCID, control word type, and telecommand VC criteria. CCSDS
 * 911.5-B-4, section 3.4.2.10.
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_continuous: RequestedUpdateMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_continuous
 * @description
 * 
 * Deliver every OCF that meets the other START criteria (CCSDS 911.5-B-4,
 * section 3.4.2.10).
 * @constant
 * @type {number}
 */
export
const continuous: RequestedUpdateMode = RequestedUpdateMode_continuous; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @description
 * 
 * Insert a transfer-data record when the OCF contents differ from the previous
 * OCF with the same telecommand VC already inserted, or when no such OCF has
 * been delivered since this START. Section 3.4.2.10 states the comparison
 * using tc-vcid and gives no separate rule for a control word that is not a
 * CLCW. CCSDS 911.5-B-4, section 3.4.2.10.
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_changeBased: RequestedUpdateMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @description
 * 
 * Deliver an OCF when its contents differ from the previous OCF for the same
 * telecommand VC (CCSDS 911.5-B-4, section 3.4.2.10).
 * @constant
 * @type {number}
 */
export
const changeBased: RequestedUpdateMode = RequestedUpdateMode_changeBased; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedUpdateMode: $.ASN1Decoder<RequestedUpdateMode> = $._decodeInteger;
export const _encode_RequestedUpdateMode: $.ASN1Encoder<RequestedUpdateMode> = $._encodeInteger;


/* eslint-enable */
