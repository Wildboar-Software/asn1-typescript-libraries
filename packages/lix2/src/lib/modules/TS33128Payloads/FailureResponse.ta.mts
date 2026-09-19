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
 * @summary FailureResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FailureResponse {
    error400 = 1,
    error401 = 2,
    error403 = 3,
    error404 = 4,
    error406 = 5,
    error411 = 6,
    error413 = 7,
    error415 = 8,
    error429 = 9,
    error500 = 10,
    error503 = 11,
}

/**
 * @summary FailureResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FailureResponse = _enum_for_FailureResponse;

/**
 * @summary FailureResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FailureResponse = _enum_for_FailureResponse;

/**
 * @summary FailureResponse_error400
 * @constant
 * @type {number}
 */
export
const FailureResponse_error400: FailureResponse = FailureResponse.error400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error400
 * @constant
 * @type {number}
 */
export
const error400: FailureResponse = FailureResponse.error400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error401
 * @constant
 * @type {number}
 */
export
const FailureResponse_error401: FailureResponse = FailureResponse.error401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error401
 * @constant
 * @type {number}
 */
export
const error401: FailureResponse = FailureResponse.error401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error403
 * @constant
 * @type {number}
 */
export
const FailureResponse_error403: FailureResponse = FailureResponse.error403; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error403
 * @constant
 * @type {number}
 */
export
const error403: FailureResponse = FailureResponse.error403; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error404
 * @constant
 * @type {number}
 */
export
const FailureResponse_error404: FailureResponse = FailureResponse.error404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error404
 * @constant
 * @type {number}
 */
export
const error404: FailureResponse = FailureResponse.error404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error406
 * @constant
 * @type {number}
 */
export
const FailureResponse_error406: FailureResponse = FailureResponse.error406; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error406
 * @constant
 * @type {number}
 */
export
const error406: FailureResponse = FailureResponse.error406; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error411
 * @constant
 * @type {number}
 */
export
const FailureResponse_error411: FailureResponse = FailureResponse.error411; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error411
 * @constant
 * @type {number}
 */
export
const error411: FailureResponse = FailureResponse.error411; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error413
 * @constant
 * @type {number}
 */
export
const FailureResponse_error413: FailureResponse = FailureResponse.error413; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error413
 * @constant
 * @type {number}
 */
export
const error413: FailureResponse = FailureResponse.error413; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error415
 * @constant
 * @type {number}
 */
export
const FailureResponse_error415: FailureResponse = FailureResponse.error415; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error415
 * @constant
 * @type {number}
 */
export
const error415: FailureResponse = FailureResponse.error415; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error429
 * @constant
 * @type {number}
 */
export
const FailureResponse_error429: FailureResponse = FailureResponse.error429; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error429
 * @constant
 * @type {number}
 */
export
const error429: FailureResponse = FailureResponse.error429; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error500
 * @constant
 * @type {number}
 */
export
const FailureResponse_error500: FailureResponse = FailureResponse.error500; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error500
 * @constant
 * @type {number}
 */
export
const error500: FailureResponse = FailureResponse.error500; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error503
 * @constant
 * @type {number}
 */
export
const FailureResponse_error503: FailureResponse = FailureResponse.error503; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error503
 * @constant
 * @type {number}
 */
export
const error503: FailureResponse = FailureResponse.error503; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FailureResponse: $.ASN1Decoder<FailureResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailureResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailureResponse (el: _Element): FailureResponse {
    if (!_cached_decoder_for_FailureResponse) { _cached_decoder_for_FailureResponse = $._decodeEnumerated; }
    return _cached_decoder_for_FailureResponse(el);
}

let _cached_encoder_for_FailureResponse: $.ASN1Encoder<FailureResponse> | null = null;

/**
 * @summary Encodes a(n) FailureResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureResponse, encoded as an ASN.1 Element.
 */
export
function _encode_FailureResponse (value: FailureResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailureResponse) { _cached_encoder_for_FailureResponse = $._encodeEnumerated; }
    return _cached_encoder_for_FailureResponse(value, elGetter);
}


/* eslint-enable */
