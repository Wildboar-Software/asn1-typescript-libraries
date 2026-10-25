/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Diagnostics
 * @description
 * 
 * Common negative-result codes. RAF-STOP uses both. SCHEDULE-STATUS-REPORT and
 * GET-PARAMETER use `duplicateInvokeId` and carry further codes in a specific
 * alternative. `otherReason` is returned only when no other listed value
 * describes the negative result.
 * 
 * CCSDS 911.1-B-5, sections 3.1.1, 3.5.2.6, 3.8.2.8, and 3.10.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Diagnostics              ::=    INTEGER
 * { duplicateInvokeId              (100)
 * , otherReason                    (127)
 * }
 * ```
 */
export
type Diagnostics = INTEGER;

/**
 * @summary Diagnostics_duplicateInvokeId
 * @description
 * 
 * The invoke-ID equals the invoke-ID of a previous operation that still has a
 * return outstanding in this service instance.
 * 
 * CCSDS 911.1-B-5, sections 3.1.6.5, 3.5.2.6, and 3.8.2.8.
 * @constant
 * @type {number}
 */
export
const Diagnostics_duplicateInvokeId = 100 satisfies Diagnostics; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_duplicateInvokeId
 * @description
 * 
 * The invoke-ID still has an outstanding return (CCSDS 911.1-B-5, section
 * 3.1.6.5).
 * @constant
 * @type {number}
 */
export
const duplicateInvokeId = Diagnostics_duplicateInvokeId satisfies Diagnostics; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @description
 * 
 * No other diagnostic in the operation's list describes the negative result.
 * The reason has to be found by other means.
 * 
 * CCSDS 911.1-B-5, sections 3.1.1.4, 3.5.2.6, and 3.8.2.8.
 * @constant
 * @type {number}
 */
export
const Diagnostics_otherReason = 127 satisfies Diagnostics; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @description
 * 
 * No listed diagnostic describes the negative result (CCSDS 911.1-B-5, section
 * 3.1.1.4).
 * @constant
 * @type {number}
 */
export
const otherReason = Diagnostics_otherReason satisfies Diagnostics; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Diagnostics: $.ASN1Decoder<Diagnostics> = $._decodeInteger;
export const _encode_Diagnostics: $.ASN1Encoder<Diagnostics> = $._encodeInteger;


/* eslint-enable */
