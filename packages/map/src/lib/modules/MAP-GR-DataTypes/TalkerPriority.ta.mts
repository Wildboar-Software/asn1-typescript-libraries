/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TalkerPriority
 * @description
 *
 * Talker priority. Use is specified in 3GPP TS 43.068 (3GPP TS 29.002 V19.1.0
 * clauses 10.5.3 and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TalkerPriority {
    normal = 0,
    privileged = 1,
    emergency = 2,
}

/**
 * @summary TalkerPriority
 * @description
 *
 * Talker priority. Use is specified in 3GPP TS 43.068 (3GPP TS 29.002 V19.1.0
 * clauses 10.5.3 and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type TalkerPriority = _enum_for_TalkerPriority;

/**
 * @summary TalkerPriority
 * @description
 *
 * Talker priority. Use is specified in 3GPP TS 43.068 (3GPP TS 29.002 V19.1.0
 * clauses 10.5.3 and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TalkerPriority  ::=  ENUMERATED {
 *     normal  (0),
 *     privileged  (1),
 *     emergency  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const TalkerPriority = _enum_for_TalkerPriority;

/**
 * @summary TalkerPriority_normal
 * @description
 *
 * `normal (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const TalkerPriority_normal: TalkerPriority = TalkerPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description
 *
 * `normal (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const normal: TalkerPriority = TalkerPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TalkerPriority_privileged
 * @description
 *
 * `privileged (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const TalkerPriority_privileged: TalkerPriority = TalkerPriority.privileged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privileged
 * @description
 *
 * `privileged (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const privileged: TalkerPriority = TalkerPriority.privileged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TalkerPriority_emergency
 * @description
 *
 * `emergency (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const TalkerPriority_emergency: TalkerPriority = TalkerPriority.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @description
 *
 * `emergency (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * @constant
 * @type {number}
 */
export
const emergency: TalkerPriority = TalkerPriority.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TalkerPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TalkerPriority = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TalkerPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TalkerPriority, encoded as an ASN.1 Element.
 */
export const _encode_TalkerPriority = $._encodeEnumerated;


/* eslint-enable */
