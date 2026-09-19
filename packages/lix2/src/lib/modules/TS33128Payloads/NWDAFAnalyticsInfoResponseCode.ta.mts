/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFAnalyticsInfoResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFAnalyticsInfoResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     noContent204(2),
 *     badRequest400(3),
 *     unauthorized401(4),
 *     forbidden403(5),
 *     notFound404(6),
 *     notAcceptable406(7),
 *     uRITooLong414(8),
 *     tooManyRequests429(9),
 *     internalServerError500(10),
 *     badGateway502(11),
 *     serviceUnavailable503(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFAnalyticsInfoResponseCode {
    oK200 = 1,
    noContent204 = 2,
    badRequest400 = 3,
    unauthorized401 = 4,
    forbidden403 = 5,
    notFound404 = 6,
    notAcceptable406 = 7,
    uRITooLong414 = 8,
    tooManyRequests429 = 9,
    internalServerError500 = 10,
    badGateway502 = 11,
    serviceUnavailable503 = 12,
}

/**
 * @summary NWDAFAnalyticsInfoResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFAnalyticsInfoResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     noContent204(2),
 *     badRequest400(3),
 *     unauthorized401(4),
 *     forbidden403(5),
 *     notFound404(6),
 *     notAcceptable406(7),
 *     uRITooLong414(8),
 *     tooManyRequests429(9),
 *     internalServerError500(10),
 *     badGateway502(11),
 *     serviceUnavailable503(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFAnalyticsInfoResponseCode = _enum_for_NWDAFAnalyticsInfoResponseCode;

/**
 * @summary NWDAFAnalyticsInfoResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFAnalyticsInfoResponseCode  ::=  ENUMERATED
 * {
 *     oK200(1),
 *     noContent204(2),
 *     badRequest400(3),
 *     unauthorized401(4),
 *     forbidden403(5),
 *     notFound404(6),
 *     notAcceptable406(7),
 *     uRITooLong414(8),
 *     tooManyRequests429(9),
 *     internalServerError500(10),
 *     badGateway502(11),
 *     serviceUnavailable503(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFAnalyticsInfoResponseCode = _enum_for_NWDAFAnalyticsInfoResponseCode;

/**
 * @summary NWDAFAnalyticsInfoResponseCode_oK200
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_oK200: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.oK200; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oK200
 * @constant
 * @type {number}
 */
export
const oK200: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.oK200; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_noContent204
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_noContent204: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.noContent204; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noContent204
 * @constant
 * @type {number}
 */
export
const noContent204: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.noContent204; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_badRequest400
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_badRequest400: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.badRequest400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.badRequest400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_unauthorized401: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.unauthorized401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.unauthorized401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_forbidden403
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_forbidden403: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.forbidden403; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidden403
 * @constant
 * @type {number}
 */
export
const forbidden403: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.forbidden403; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_notFound404
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_notFound404: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.notFound404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.notFound404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_notAcceptable406
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_notAcceptable406: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.notAcceptable406; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAcceptable406
 * @constant
 * @type {number}
 */
export
const notAcceptable406: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.notAcceptable406; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_uRITooLong414
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_uRITooLong414: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.uRITooLong414; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uRITooLong414
 * @constant
 * @type {number}
 */
export
const uRITooLong414: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.uRITooLong414; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_tooManyRequests429
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_tooManyRequests429: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.tooManyRequests429; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooManyRequests429
 * @constant
 * @type {number}
 */
export
const tooManyRequests429: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.tooManyRequests429; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_internalServerError500
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_internalServerError500: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.internalServerError500; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalServerError500
 * @constant
 * @type {number}
 */
export
const internalServerError500: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.internalServerError500; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_badGateway502
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_badGateway502: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.badGateway502; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGateway502
 * @constant
 * @type {number}
 */
export
const badGateway502: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.badGateway502; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_serviceUnavailable503: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.serviceUnavailable503; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const serviceUnavailable503: NWDAFAnalyticsInfoResponseCode = NWDAFAnalyticsInfoResponseCode.serviceUnavailable503; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NWDAFAnalyticsInfoResponseCode: $.ASN1Decoder<NWDAFAnalyticsInfoResponseCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFAnalyticsInfoResponseCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFAnalyticsInfoResponseCode (el: _Element): NWDAFAnalyticsInfoResponseCode {
    if (!_cached_decoder_for_NWDAFAnalyticsInfoResponseCode) { _cached_decoder_for_NWDAFAnalyticsInfoResponseCode = $._decodeEnumerated; }
    return _cached_decoder_for_NWDAFAnalyticsInfoResponseCode(el);
}

let _cached_encoder_for_NWDAFAnalyticsInfoResponseCode: $.ASN1Encoder<NWDAFAnalyticsInfoResponseCode> | null = null;

/**
 * @summary Encodes a(n) NWDAFAnalyticsInfoResponseCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFAnalyticsInfoResponseCode, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFAnalyticsInfoResponseCode (value: NWDAFAnalyticsInfoResponseCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFAnalyticsInfoResponseCode) { _cached_encoder_for_NWDAFAnalyticsInfoResponseCode = $._encodeEnumerated; }
    return _cached_encoder_for_NWDAFAnalyticsInfoResponseCode(value, elGetter);
}


/* eslint-enable */
