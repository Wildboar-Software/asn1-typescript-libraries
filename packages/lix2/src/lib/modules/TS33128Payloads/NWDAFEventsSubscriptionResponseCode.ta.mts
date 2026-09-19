/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFEventsSubscriptionResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionResponseCode  ::=  ENUMERATED
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
 *     payloadTooLarge413(12),
 *     unsupportedMediaType415(13),
 *     tooManyRequests429(14),
 *     internalServerError500(15),
 *     notImplemented501(16),
 *     badGateway502(17),
 *     serviceUnavailable503(18)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEventsSubscriptionResponseCode {
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
    payloadTooLarge413 = 12,
    unsupportedMediaType415 = 13,
    tooManyRequests429 = 14,
    internalServerError500 = 15,
    notImplemented501 = 16,
    badGateway502 = 17,
    serviceUnavailable503 = 18,
}

/**
 * @summary NWDAFEventsSubscriptionResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionResponseCode  ::=  ENUMERATED
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
 *     payloadTooLarge413(12),
 *     unsupportedMediaType415(13),
 *     tooManyRequests429(14),
 *     internalServerError500(15),
 *     notImplemented501(16),
 *     badGateway502(17),
 *     serviceUnavailable503(18)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEventsSubscriptionResponseCode = _enum_for_NWDAFEventsSubscriptionResponseCode;

/**
 * @summary NWDAFEventsSubscriptionResponseCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscriptionResponseCode  ::=  ENUMERATED
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
 *     payloadTooLarge413(12),
 *     unsupportedMediaType415(13),
 *     tooManyRequests429(14),
 *     internalServerError500(15),
 *     notImplemented501(16),
 *     badGateway502(17),
 *     serviceUnavailable503(18)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEventsSubscriptionResponseCode = _enum_for_NWDAFEventsSubscriptionResponseCode;

/**
 * @summary NWDAFEventsSubscriptionResponseCode_oK200
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_oK200: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.oK200; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oK200
 * @constant
 * @type {number}
 */
export
const oK200: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.oK200; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_created201
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_created201: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.created201; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created201
 * @constant
 * @type {number}
 */
export
const created201: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.created201; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_noContent204
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_noContent204: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.noContent204; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noContent204
 * @constant
 * @type {number}
 */
export
const noContent204: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.noContent204; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_temporaryRedirect307
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_temporaryRedirect307: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.temporaryRedirect307; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryRedirect307
 * @constant
 * @type {number}
 */
export
const temporaryRedirect307: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.temporaryRedirect307; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_permanentRedirect308
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_permanentRedirect308: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.permanentRedirect308; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permanentRedirect308
 * @constant
 * @type {number}
 */
export
const permanentRedirect308: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.permanentRedirect308; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_badRequest400
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_badRequest400: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.badRequest400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.badRequest400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_unauthorized401: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.unauthorized401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.unauthorized401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_forbidden403
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_forbidden403: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.forbidden403; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidden403
 * @constant
 * @type {number}
 */
export
const forbidden403: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.forbidden403; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_notFound404
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_notFound404: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notFound404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notFound404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_notAcceptable406
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_notAcceptable406: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notAcceptable406; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAcceptable406
 * @constant
 * @type {number}
 */
export
const notAcceptable406: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notAcceptable406; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_lengthRequired411
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_lengthRequired411: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.lengthRequired411; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lengthRequired411
 * @constant
 * @type {number}
 */
export
const lengthRequired411: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.lengthRequired411; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_payloadTooLarge413
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_payloadTooLarge413: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.payloadTooLarge413; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary payloadTooLarge413
 * @constant
 * @type {number}
 */
export
const payloadTooLarge413: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.payloadTooLarge413; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.unsupportedMediaType415; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const unsupportedMediaType415: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.unsupportedMediaType415; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_tooManyRequests429
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_tooManyRequests429: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.tooManyRequests429; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooManyRequests429
 * @constant
 * @type {number}
 */
export
const tooManyRequests429: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.tooManyRequests429; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_internalServerError500
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_internalServerError500: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.internalServerError500; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalServerError500
 * @constant
 * @type {number}
 */
export
const internalServerError500: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.internalServerError500; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_notImplemented501
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_notImplemented501: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notImplemented501; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notImplemented501
 * @constant
 * @type {number}
 */
export
const notImplemented501: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.notImplemented501; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_badGateway502
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_badGateway502: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.badGateway502; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGateway502
 * @constant
 * @type {number}
 */
export
const badGateway502: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.badGateway502; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEventsSubscriptionResponseCode_serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const NWDAFEventsSubscriptionResponseCode_serviceUnavailable503: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.serviceUnavailable503; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceUnavailable503
 * @constant
 * @type {number}
 */
export
const serviceUnavailable503: NWDAFEventsSubscriptionResponseCode = NWDAFEventsSubscriptionResponseCode.serviceUnavailable503; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NWDAFEventsSubscriptionResponseCode: $.ASN1Decoder<NWDAFEventsSubscriptionResponseCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEventsSubscriptionResponseCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFEventsSubscriptionResponseCode (el: _Element): NWDAFEventsSubscriptionResponseCode {
    if (!_cached_decoder_for_NWDAFEventsSubscriptionResponseCode) { _cached_decoder_for_NWDAFEventsSubscriptionResponseCode = $._decodeEnumerated; }
    return _cached_decoder_for_NWDAFEventsSubscriptionResponseCode(el);
}

let _cached_encoder_for_NWDAFEventsSubscriptionResponseCode: $.ASN1Encoder<NWDAFEventsSubscriptionResponseCode> | null = null;

/**
 * @summary Encodes a(n) NWDAFEventsSubscriptionResponseCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEventsSubscriptionResponseCode, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFEventsSubscriptionResponseCode (value: NWDAFEventsSubscriptionResponseCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFEventsSubscriptionResponseCode) { _cached_encoder_for_NWDAFEventsSubscriptionResponseCode = $._encodeEnumerated; }
    return _cached_encoder_for_NWDAFEventsSubscriptionResponseCode(value, elGetter);
}


/* eslint-enable */
