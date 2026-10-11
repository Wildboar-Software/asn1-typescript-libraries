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

export const _decode_PTCFailureCode: $.ASN1Decoder<PTCFailureCode> = $._decodeEnumerated;

export const _encode_PTCFailureCode: $.ASN1Encoder<PTCFailureCode> = $._encodeEnumerated;

/* eslint-enable */
