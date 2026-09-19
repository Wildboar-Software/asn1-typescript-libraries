/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AForASSessionWithQoSResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     created201(2),
 *     noContent204(3),
 *     temporaryRedirect307(4),
 *     permanentRedirect308(5),
 *     badRequest400(6),
 *     unauthorized401(7),
 *     forbidden403(8),
 *     notFound404(9),
 *     notAcceptable406(10),
 *     lengthRequired411(11),
 *     unsupportedMediaType415(12),
 *     tooManyRequests429(13),
 *     internalServerError500(14),
 *     serviceUnavailable503(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AForASSessionWithQoSResponseCode {
    oK200 = 1,
    created201 = 2,
    noContent204 = 3,
    temporaryRedirect307 = 4,
    permanentRedirect308 = 5,
    badRequest400 = 6,
    unauthorized401 = 7,
    forbidden403 = 8,
    notFound404 = 9,
    notAcceptable406 = 10,
    lengthRequired411 = 11,
    unsupportedMediaType415 = 12,
    tooManyRequests429 = 13,
    internalServerError500 = 14,
    serviceUnavailable503 = 15,
}

/**
 * @summary AForASSessionWithQoSResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     created201(2),
 *     noContent204(3),
 *     temporaryRedirect307(4),
 *     permanentRedirect308(5),
 *     badRequest400(6),
 *     unauthorized401(7),
 *     forbidden403(8),
 *     notFound404(9),
 *     notAcceptable406(10),
 *     lengthRequired411(11),
 *     unsupportedMediaType415(12),
 *     tooManyRequests429(13),
 *     internalServerError500(14),
 *     serviceUnavailable503(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AForASSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;

/**
 * @summary AForASSessionWithQoSResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     created201(2),
 *     noContent204(3),
 *     temporaryRedirect307(4),
 *     permanentRedirect308(5),
 *     badRequest400(6),
 *     unauthorized401(7),
 *     forbidden403(8),
 *     notFound404(9),
 *     notAcceptable406(10),
 *     lengthRequired411(11),
 *     unsupportedMediaType415(12),
 *     tooManyRequests429(13),
 *     internalServerError500(14),
 *     serviceUnavailable503(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AForASSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;

/**
 * @summary AForASSessionWithQoSResponseCode_oK200
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_oK200: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.oK200; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oK200
 * @constant
 * @type {number}
 */
export
const oK200: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.oK200; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_created201
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_created201: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.created201; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created201
 * @constant
 * @type {number}
 */
export
const created201: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.created201; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_noContent204
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_noContent204: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.noContent204; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noContent204
 * @constant
 * @type {number}
 */
export
const noContent204: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.noContent204; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_temporaryRedirect307
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_temporaryRedirect307: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.temporaryRedirect307; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryRedirect307
 * @constant
 * @type {number}
 */
export
const temporaryRedirect307: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.temporaryRedirect307; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_permanentRedirect308
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_permanentRedirect308: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.permanentRedirect308; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permanentRedirect308
 * @constant
 * @type {number}
 */
export
const permanentRedirect308: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.permanentRedirect308; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_badRequest400
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_badRequest400: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.badRequest400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.badRequest400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_unauthorized401: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.unauthorized401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.unauthorized401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_forbidden403
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_forbidden403: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.forbidden403; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidden403
 * @constant
 * @type {number}
 */
export
const forbidden403: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.forbidden403; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_notFound404
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_notFound404: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.notFound404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.notFound404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_notAcceptable406
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_notAcceptable406: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.notAcceptable406; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAcceptable406
 * @constant
 * @type {number}
 */
export
const notAcceptable406: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.notAcceptable406; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_lengthRequired411
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_lengthRequired411: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.lengthRequired411; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lengthRequired411
 * @constant
 * @type {number}
 */
export
const lengthRequired411: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.lengthRequired411; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_unsupportedMediaType415: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.unsupportedMediaType415; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const unsupportedMediaType415: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.unsupportedMediaType415; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_tooManyRequests429
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_tooManyRequests429: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.tooManyRequests429; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooManyRequests429
 * @constant
 * @type {number}
 */
export
const tooManyRequests429: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.tooManyRequests429; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_internalServerError500
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_internalServerError500: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.internalServerError500; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalServerError500
 * @constant
 * @type {number}
 */
export
const internalServerError500: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.internalServerError500; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSResponseCode_serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSResponseCode_serviceUnavailable503: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.serviceUnavailable503; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const serviceUnavailable503: AForASSessionWithQoSResponseCode = AForASSessionWithQoSResponseCode.serviceUnavailable503; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AForASSessionWithQoSResponseCode: $.ASN1Decoder<AForASSessionWithQoSResponseCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AForASSessionWithQoSResponseCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AForASSessionWithQoSResponseCode (el: _Element): AForASSessionWithQoSResponseCode {
    if (!_cached_decoder_for_AForASSessionWithQoSResponseCode) { _cached_decoder_for_AForASSessionWithQoSResponseCode = $._decodeEnumerated; }
    return _cached_decoder_for_AForASSessionWithQoSResponseCode(el);
}

let _cached_encoder_for_AForASSessionWithQoSResponseCode: $.ASN1Encoder<AForASSessionWithQoSResponseCode> | null = null;

/**
 * @summary Encodes a(n) AForASSessionWithQoSResponseCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AForASSessionWithQoSResponseCode, encoded as an ASN.1 Element.
 */
export
function _encode_AForASSessionWithQoSResponseCode (value: AForASSessionWithQoSResponseCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AForASSessionWithQoSResponseCode) { _cached_encoder_for_AForASSessionWithQoSResponseCode = $._encodeEnumerated; }
    return _cached_encoder_for_AForASSessionWithQoSResponseCode(value, elGetter);
}


/* eslint-enable */
