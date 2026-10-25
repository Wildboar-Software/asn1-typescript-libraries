/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFAnalyticsInfoResponseCode
 * @description
 * 
 * Identifies the response code associated with the Nnwdaf_AnalyticsInfo_Request
 * service operation (i.e., GET) executed by the NWDAF.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the response code associated with the Nnwdaf_AnalyticsInfo_Request
 * service operation (i.e., GET) executed by the NWDAF.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the response code associated with the Nnwdaf_AnalyticsInfo_Request
 * service operation (i.e., GET) executed by the NWDAF.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const NWDAFAnalyticsInfoResponseCode: typeof _enum_for_NWDAFAnalyticsInfoResponseCode = _enum_for_NWDAFAnalyticsInfoResponseCode;

/**
 * @summary NWDAFAnalyticsInfoResponseCode_oK200
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_oK200: _enum_for_NWDAFAnalyticsInfoResponseCode.oK200 = NWDAFAnalyticsInfoResponseCode.oK200; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oK200
 * @constant
 * @type {number}
 */
export
const oK200: _enum_for_NWDAFAnalyticsInfoResponseCode.oK200 = NWDAFAnalyticsInfoResponseCode.oK200; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_noContent204
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_noContent204: _enum_for_NWDAFAnalyticsInfoResponseCode.noContent204 = NWDAFAnalyticsInfoResponseCode.noContent204; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noContent204
 * @constant
 * @type {number}
 */
export
const noContent204: _enum_for_NWDAFAnalyticsInfoResponseCode.noContent204 = NWDAFAnalyticsInfoResponseCode.noContent204; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_badRequest400
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_badRequest400: _enum_for_NWDAFAnalyticsInfoResponseCode.badRequest400 = NWDAFAnalyticsInfoResponseCode.badRequest400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400: _enum_for_NWDAFAnalyticsInfoResponseCode.badRequest400 = NWDAFAnalyticsInfoResponseCode.badRequest400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_unauthorized401: _enum_for_NWDAFAnalyticsInfoResponseCode.unauthorized401 = NWDAFAnalyticsInfoResponseCode.unauthorized401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401: _enum_for_NWDAFAnalyticsInfoResponseCode.unauthorized401 = NWDAFAnalyticsInfoResponseCode.unauthorized401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_forbidden403
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_forbidden403: _enum_for_NWDAFAnalyticsInfoResponseCode.forbidden403 = NWDAFAnalyticsInfoResponseCode.forbidden403; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidden403
 * @constant
 * @type {number}
 */
export
const forbidden403: _enum_for_NWDAFAnalyticsInfoResponseCode.forbidden403 = NWDAFAnalyticsInfoResponseCode.forbidden403; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_notFound404
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_notFound404: _enum_for_NWDAFAnalyticsInfoResponseCode.notFound404 = NWDAFAnalyticsInfoResponseCode.notFound404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404: _enum_for_NWDAFAnalyticsInfoResponseCode.notFound404 = NWDAFAnalyticsInfoResponseCode.notFound404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_notAcceptable406
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_notAcceptable406: _enum_for_NWDAFAnalyticsInfoResponseCode.notAcceptable406 = NWDAFAnalyticsInfoResponseCode.notAcceptable406; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAcceptable406
 * @constant
 * @type {number}
 */
export
const notAcceptable406: _enum_for_NWDAFAnalyticsInfoResponseCode.notAcceptable406 = NWDAFAnalyticsInfoResponseCode.notAcceptable406; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_uRITooLong414
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_uRITooLong414: _enum_for_NWDAFAnalyticsInfoResponseCode.uRITooLong414 = NWDAFAnalyticsInfoResponseCode.uRITooLong414; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uRITooLong414
 * @constant
 * @type {number}
 */
export
const uRITooLong414: _enum_for_NWDAFAnalyticsInfoResponseCode.uRITooLong414 = NWDAFAnalyticsInfoResponseCode.uRITooLong414; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_tooManyRequests429
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_tooManyRequests429: _enum_for_NWDAFAnalyticsInfoResponseCode.tooManyRequests429 = NWDAFAnalyticsInfoResponseCode.tooManyRequests429; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooManyRequests429
 * @constant
 * @type {number}
 */
export
const tooManyRequests429: _enum_for_NWDAFAnalyticsInfoResponseCode.tooManyRequests429 = NWDAFAnalyticsInfoResponseCode.tooManyRequests429; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_internalServerError500
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_internalServerError500: _enum_for_NWDAFAnalyticsInfoResponseCode.internalServerError500 = NWDAFAnalyticsInfoResponseCode.internalServerError500; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalServerError500
 * @constant
 * @type {number}
 */
export
const internalServerError500: _enum_for_NWDAFAnalyticsInfoResponseCode.internalServerError500 = NWDAFAnalyticsInfoResponseCode.internalServerError500; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_badGateway502
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_badGateway502: _enum_for_NWDAFAnalyticsInfoResponseCode.badGateway502 = NWDAFAnalyticsInfoResponseCode.badGateway502; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGateway502
 * @constant
 * @type {number}
 */
export
const badGateway502: _enum_for_NWDAFAnalyticsInfoResponseCode.badGateway502 = NWDAFAnalyticsInfoResponseCode.badGateway502; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFAnalyticsInfoResponseCode_serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const NWDAFAnalyticsInfoResponseCode_serviceUnavailable503: _enum_for_NWDAFAnalyticsInfoResponseCode.serviceUnavailable503 = NWDAFAnalyticsInfoResponseCode.serviceUnavailable503; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const serviceUnavailable503: _enum_for_NWDAFAnalyticsInfoResponseCode.serviceUnavailable503 = NWDAFAnalyticsInfoResponseCode.serviceUnavailable503; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NWDAFAnalyticsInfoResponseCode: $.ASN1Decoder<NWDAFAnalyticsInfoResponseCode> = $._decodeEnumerated;
export const _encode_NWDAFAnalyticsInfoResponseCode: $.ASN1Encoder<NWDAFAnalyticsInfoResponseCode> = $._encodeEnumerated;


/* eslint-enable */
