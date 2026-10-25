/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCFailureCode
 * @description
 * 
 * Provide when the pre-established session cannot be established or modified.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Provide when the pre-established session cannot be established or modified.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Provide when the pre-established session cannot be established or modified.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const PTCFailureCode: typeof _enum_for_PTCFailureCode = _enum_for_PTCFailureCode;

/**
 * @summary PTCFailureCode_sessionCannotBeEstablished
 * @constant
 * @type {number}
 */
export
const PTCFailureCode_sessionCannotBeEstablished: _enum_for_PTCFailureCode.sessionCannotBeEstablished = PTCFailureCode.sessionCannotBeEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionCannotBeEstablished
 * @constant
 * @type {number}
 */
export
const sessionCannotBeEstablished: _enum_for_PTCFailureCode.sessionCannotBeEstablished = PTCFailureCode.sessionCannotBeEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFailureCode_sessionCannotBeModified
 * @constant
 * @type {number}
 */
export
const PTCFailureCode_sessionCannotBeModified: _enum_for_PTCFailureCode.sessionCannotBeModified = PTCFailureCode.sessionCannotBeModified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionCannotBeModified
 * @constant
 * @type {number}
 */
export
const sessionCannotBeModified: _enum_for_PTCFailureCode.sessionCannotBeModified = PTCFailureCode.sessionCannotBeModified; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCFailureCode: $.ASN1Decoder<PTCFailureCode> = $._decodeEnumerated;
export const _encode_PTCFailureCode: $.ASN1Encoder<PTCFailureCode> = $._encodeEnumerated;


/* eslint-enable */
