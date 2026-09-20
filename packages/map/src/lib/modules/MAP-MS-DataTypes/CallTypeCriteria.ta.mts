/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallTypeCriteria
 * @description
 *
 * CAMEL TDP criterion distinguishing forwarded vs not-forwarded calls (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallTypeCriteria {
    forwarded = 0,
    notForwarded = 1,
}

/**
 * @summary CallTypeCriteria
 * @description
 *
 * CAMEL TDP criterion distinguishing forwarded vs not-forwarded calls (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
type CallTypeCriteria = _enum_for_CallTypeCriteria;

/**
 * @summary CallTypeCriteria
 * @description
 *
 * CAMEL TDP criterion distinguishing forwarded vs not-forwarded calls (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTypeCriteria        ::=  ENUMERATED {
 *     forwarded    (0),
 *     notForwarded    (1)}
 * ```
 * 
 * @enum {number}
 */
export
const CallTypeCriteria = _enum_for_CallTypeCriteria;

/**
 * @summary CallTypeCriteria_forwarded
 * @constant
 * @type {number}
 */
export
const CallTypeCriteria_forwarded: CallTypeCriteria = CallTypeCriteria.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: CallTypeCriteria = CallTypeCriteria.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallTypeCriteria_notForwarded
 * @constant
 * @type {number}
 */
export
const CallTypeCriteria_notForwarded: CallTypeCriteria = CallTypeCriteria.notForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notForwarded
 * @constant
 * @type {number}
 */
export
const notForwarded: CallTypeCriteria = CallTypeCriteria.notForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallTypeCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallTypeCriteria = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallTypeCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTypeCriteria, encoded as an ASN.1 Element.
 */
export const _encode_CallTypeCriteria = $._encodeEnumerated;


/* eslint-enable */
