/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCFailureCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFailureCode   ::=  ENUMERATED
 * {
 *     sessionCannotBeEstablished(1),
 *     sessionCannotBeModified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCFailureCode {
    sessionCannotBeEstablished = 1,
    sessionCannotBeModified = 2,
}

/**
 * @summary PTCFailureCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFailureCode   ::=  ENUMERATED
 * {
 *     sessionCannotBeEstablished(1),
 *     sessionCannotBeModified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCFailureCode = _enum_for_PTCFailureCode;

/**
 * @summary PTCFailureCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFailureCode   ::=  ENUMERATED
 * {
 *     sessionCannotBeEstablished(1),
 *     sessionCannotBeModified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCFailureCode = _enum_for_PTCFailureCode;

/**
 * @summary PTCFailureCode_sessionCannotBeEstablished
 * @constant
 * @type {number}
 */
export
const PTCFailureCode_sessionCannotBeEstablished: PTCFailureCode = PTCFailureCode.sessionCannotBeEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionCannotBeEstablished
 * @constant
 * @type {number}
 */
export
const sessionCannotBeEstablished: PTCFailureCode = PTCFailureCode.sessionCannotBeEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFailureCode_sessionCannotBeModified
 * @constant
 * @type {number}
 */
export
const PTCFailureCode_sessionCannotBeModified: PTCFailureCode = PTCFailureCode.sessionCannotBeModified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionCannotBeModified
 * @constant
 * @type {number}
 */
export
const sessionCannotBeModified: PTCFailureCode = PTCFailureCode.sessionCannotBeModified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PTCFailureCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PTCFailureCode = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PTCFailureCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCFailureCode, encoded as an ASN.1 Element.
 */
export const _encode_PTCFailureCode = $._encodeEnumerated;


/* eslint-enable */
