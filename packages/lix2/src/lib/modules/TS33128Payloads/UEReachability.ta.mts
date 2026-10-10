/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEReachability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UEReachability {
    unreachable = 1,
    reachable = 2,
    regulatoryOnly = 3,
}

/**
 * @summary UEReachability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UEReachability = _enum_for_UEReachability;

/**
 * @summary UEReachability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UEReachability = _enum_for_UEReachability;

/**
 * @summary UEReachability_unreachable
 * @constant
 * @type {number}
 */
export
const UEReachability_unreachable: UEReachability = UEReachability.unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @constant
 * @type {number}
 */
export
const unreachable: UEReachability = UEReachability.unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UEReachability_reachable
 * @constant
 * @type {number}
 */
export
const UEReachability_reachable: UEReachability = UEReachability.reachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachable
 * @constant
 * @type {number}
 */
export
const reachable: UEReachability = UEReachability.reachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UEReachability_regulatoryOnly
 * @constant
 * @type {number}
 */
export
const UEReachability_regulatoryOnly: UEReachability = UEReachability.regulatoryOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regulatoryOnly
 * @constant
 * @type {number}
 */
export
const regulatoryOnly: UEReachability = UEReachability.regulatoryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UEReachability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UEReachability = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UEReachability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEReachability, encoded as an ASN.1 Element.
 */
export const _encode_UEReachability = $._encodeEnumerated;


/* eslint-enable */
