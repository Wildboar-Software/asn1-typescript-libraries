/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EMMRegStatus {
    uEEMMRegistered = 1,
    uENotEMMRegistered = 2,
}

/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMRegStatus  ::=  ENUMERATED
 * {
 *     uEEMMRegistered(1),
 *     uENotEMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EMMRegStatus = _enum_for_EMMRegStatus;

/**
 * @summary EMMRegStatus_uEEMMRegistered
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uEEMMRegistered: EMMRegStatus = EMMRegStatus.uEEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEEMMRegistered
 * @constant
 * @type {number}
 */
export
const uEEMMRegistered: EMMRegStatus = EMMRegStatus.uEEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EMMRegStatus_uENotEMMRegistered
 * @constant
 * @type {number}
 */
export
const EMMRegStatus_uENotEMMRegistered: EMMRegStatus = EMMRegStatus.uENotEMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENotEMMRegistered
 * @constant
 * @type {number}
 */
export
const uENotEMMRegistered: EMMRegStatus = EMMRegStatus.uENotEMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EMMRegStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EMMRegStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EMMRegStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMMRegStatus, encoded as an ASN.1 Element.
 */
export const _encode_EMMRegStatus = $._encodeEnumerated;


/* eslint-enable */
