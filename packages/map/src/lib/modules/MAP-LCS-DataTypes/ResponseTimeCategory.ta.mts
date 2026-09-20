/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ResponseTimeCategory {
    lowdelay = 0,
    delaytolerant = 1,
}

/**
 * @summary ResponseTimeCategory
 * @description
 *
 * Unrecognized value treated as delaytolerant (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.11.8 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseTimeCategory  ::=  ENUMERATED {
 *     lowdelay  (0),
 *     delaytolerant  (1),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type ResponseTimeCategory = _enum_for_ResponseTimeCategory | ENUMERATED;

/**
 * @summary ResponseTimeCategory_lowdelay
 * @description
 *
 * `lowdelay (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.8).
 *
 * @constant
 * @type {number}
 */
export
const ResponseTimeCategory_lowdelay: ResponseTimeCategory = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lowdelay
 * @description
 *
 * `lowdelay (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.8).
 *
 * @constant
 * @type {number}
 */
export
const lowdelay: ResponseTimeCategory = ResponseTimeCategory_lowdelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseTimeCategory_delaytolerant
 * @description
 *
 * `delaytolerant (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.8).
 *
 * @constant
 * @type {number}
 */
export
const ResponseTimeCategory_delaytolerant: ResponseTimeCategory = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delaytolerant
 * @description
 *
 * `delaytolerant (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.8).
 *
 * @constant
 * @type {number}
 */
export
const delaytolerant: ResponseTimeCategory = ResponseTimeCategory_delaytolerant; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTimeCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ResponseTimeCategory = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ResponseTimeCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTimeCategory, encoded as an ASN.1 Element.
 */
export const _encode_ResponseTimeCategory = $._encodeEnumerated;


/* eslint-enable */
