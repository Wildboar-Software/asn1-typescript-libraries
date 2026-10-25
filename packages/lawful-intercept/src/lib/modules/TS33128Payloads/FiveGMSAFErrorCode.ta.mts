/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMSAFErrorCode
 * @description
 * 
 * Error code returned for the unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFErrorCode  ::= ENUMERATED
 * {
 *     badRequest400(1),
 *     unauthorized401(2),
 *     notFound404(3),
 *     unsupportedMediaType415(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMSAFErrorCode {
    badRequest400 = 1,
    unauthorized401 = 2,
    notFound404 = 3,
    unsupportedMediaType415 = 4,
}

/**
 * @summary FiveGMSAFErrorCode
 * @description
 * 
 * Error code returned for the unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFErrorCode  ::= ENUMERATED
 * {
 *     badRequest400(1),
 *     unauthorized401(2),
 *     notFound404(3),
 *     unsupportedMediaType415(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMSAFErrorCode = _enum_for_FiveGMSAFErrorCode;

/**
 * @summary FiveGMSAFErrorCode
 * @description
 * 
 * Error code returned for the unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFErrorCode  ::= ENUMERATED
 * {
 *     badRequest400(1),
 *     unauthorized401(2),
 *     notFound404(3),
 *     unsupportedMediaType415(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMSAFErrorCode = _enum_for_FiveGMSAFErrorCode;

/**
 * @summary FiveGMSAFErrorCode_badRequest400
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_badRequest400 = FiveGMSAFErrorCode.badRequest400 satisfies FiveGMSAFErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400 = FiveGMSAFErrorCode.badRequest400 satisfies FiveGMSAFErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_unauthorized401 = FiveGMSAFErrorCode.unauthorized401 satisfies FiveGMSAFErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401 = FiveGMSAFErrorCode.unauthorized401 satisfies FiveGMSAFErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_notFound404
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_notFound404 = FiveGMSAFErrorCode.notFound404 satisfies FiveGMSAFErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404 = FiveGMSAFErrorCode.notFound404 satisfies FiveGMSAFErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_unsupportedMediaType415 = FiveGMSAFErrorCode.unsupportedMediaType415 satisfies FiveGMSAFErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const unsupportedMediaType415 = FiveGMSAFErrorCode.unsupportedMediaType415 satisfies FiveGMSAFErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGMSAFErrorCode: $.ASN1Decoder<FiveGMSAFErrorCode> = $._decodeEnumerated;
export const _encode_FiveGMSAFErrorCode: $.ASN1Encoder<FiveGMSAFErrorCode> = $._encodeEnumerated;


/* eslint-enable */
