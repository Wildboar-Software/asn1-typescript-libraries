/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMMStatus {
    uE5GMMRegistered = 1,
    uENot5GMMRegistered = 2,
}

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus_uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMMStatus_uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGMMStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FiveGMMStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMStatus, encoded as an ASN.1 Element.
 */
export const _encode_FiveGMMStatus = $._encodeEnumerated;


/* eslint-enable */
