/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceUnavailableReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Resource unavailable: short-term or
 * long-term problem (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResourceUnavailableReason {
    shortTermResourceLimitation = 0,
    longTermResourceLimitation = 1,
}

/**
 * @summary ResourceUnavailableReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Resource unavailable: short-term or
 * long-term problem (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type ResourceUnavailableReason = _enum_for_ResourceUnavailableReason;

/**
 * @summary ResourceUnavailableReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Resource unavailable: short-term or
 * long-term problem (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceUnavailableReason  ::=  ENUMERATED {
 *     shortTermResourceLimitation  (0),
 *     longTermResourceLimitation  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const ResourceUnavailableReason = _enum_for_ResourceUnavailableReason;

/**
 * @summary ResourceUnavailableReason_shortTermResourceLimitation
 * @description
 *
 * `shortTermResourceLimitation (0)`: short-term problem (3GPP TS 29.002 V19.1.0
 * clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ResourceUnavailableReason_shortTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.shortTermResourceLimitation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortTermResourceLimitation
 * @description
 *
 * `shortTermResourceLimitation (0)` of `ResourceUnavailableReason` (3GPP TS
 * 29.002 V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const shortTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.shortTermResourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceUnavailableReason_longTermResourceLimitation
 * @description
 *
 * `longTermResourceLimitation (1)`: long-term problem (3GPP TS 29.002 V19.1.0
 * clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ResourceUnavailableReason_longTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.longTermResourceLimitation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary longTermResourceLimitation
 * @description
 *
 * `longTermResourceLimitation (1)` of `ResourceUnavailableReason` (3GPP TS
 * 29.002 V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const longTermResourceLimitation: ResourceUnavailableReason = ResourceUnavailableReason.longTermResourceLimitation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceUnavailableReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ResourceUnavailableReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ResourceUnavailableReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceUnavailableReason, encoded as an ASN.1 Element.
 */
export const _encode_ResourceUnavailableReason = $._encodeEnumerated;


/* eslint-enable */
