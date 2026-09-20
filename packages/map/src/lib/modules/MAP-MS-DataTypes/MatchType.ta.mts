/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MatchType
 * @description
 *
 * How destination-number criteria match: inhibiting or enabling. Used in O-BCSM
 * CAMEL TDP criteria. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatchType        ::=  ENUMERATED {
 *     inhibiting    (0),
 *     enabling    (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MatchType {
    inhibiting = 0,
    enabling = 1,
}

/**
 * @summary MatchType
 * @description
 *
 * How destination-number criteria match: inhibiting or enabling. Used in O-BCSM
 * CAMEL TDP criteria. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatchType        ::=  ENUMERATED {
 *     inhibiting    (0),
 *     enabling    (1)}
 * ```
 * 
 * @enum {number}
 */
export
type MatchType = _enum_for_MatchType;

/**
 * @summary MatchType
 * @description
 *
 * How destination-number criteria match: inhibiting or enabling. Used in O-BCSM
 * CAMEL TDP criteria. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MatchType        ::=  ENUMERATED {
 *     inhibiting    (0),
 *     enabling    (1)}
 * ```
 * 
 * @enum {number}
 */
export
const MatchType = _enum_for_MatchType;

/**
 * @summary MatchType_inhibiting
 * @description
 *
 * Inhibiting match of destination-number criteria. (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const MatchType_inhibiting: MatchType = MatchType.inhibiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inhibiting
 * @description
 *
 * Inhibiting match of destination-number criteria. (3GPP TS 29.002 V19.1.0
 * clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const inhibiting: MatchType = MatchType.inhibiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MatchType_enabling
 * @description
 *
 * Enabling match of destination-number criteria. (3GPP TS 29.002 V19.1.0 clause
 * 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const MatchType_enabling: MatchType = MatchType.enabling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabling
 * @description
 *
 * Enabling match of destination-number criteria. (3GPP TS 29.002 V19.1.0 clause
 * 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const enabling: MatchType = MatchType.enabling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MatchType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MatchType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MatchType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchType, encoded as an ASN.1 Element.
 */
export const _encode_MatchType = $._encodeEnumerated;


/* eslint-enable */
