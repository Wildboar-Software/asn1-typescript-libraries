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
 * @summary FiveGMSAFErrorCode
 * @description
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
const FiveGMSAFErrorCode_badRequest400: FiveGMSAFErrorCode = FiveGMSAFErrorCode.badRequest400; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badRequest400
 * @constant
 * @type {number}
 */
export
const badRequest400: FiveGMSAFErrorCode = FiveGMSAFErrorCode.badRequest400; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_unauthorized401
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_unauthorized401: FiveGMSAFErrorCode = FiveGMSAFErrorCode.unauthorized401; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorized401
 * @constant
 * @type {number}
 */
export
const unauthorized401: FiveGMSAFErrorCode = FiveGMSAFErrorCode.unauthorized401; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_notFound404
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_notFound404: FiveGMSAFErrorCode = FiveGMSAFErrorCode.notFound404; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notFound404
 * @constant
 * @type {number}
 */
export
const notFound404: FiveGMSAFErrorCode = FiveGMSAFErrorCode.notFound404; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFErrorCode_unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const FiveGMSAFErrorCode_unsupportedMediaType415: FiveGMSAFErrorCode = FiveGMSAFErrorCode.unsupportedMediaType415; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedMediaType415
 * @constant
 * @type {number}
 */
export
const unsupportedMediaType415: FiveGMSAFErrorCode = FiveGMSAFErrorCode.unsupportedMediaType415; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FiveGMSAFErrorCode: $.ASN1Decoder<FiveGMSAFErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMSAFErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMSAFErrorCode (el: _Element): FiveGMSAFErrorCode {
    if (!_cached_decoder_for_FiveGMSAFErrorCode) { _cached_decoder_for_FiveGMSAFErrorCode = $._decodeEnumerated; }
    return _cached_decoder_for_FiveGMSAFErrorCode(el);
}

let _cached_encoder_for_FiveGMSAFErrorCode: $.ASN1Encoder<FiveGMSAFErrorCode> | null = null;

/**
 * @summary Encodes a(n) FiveGMSAFErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMSAFErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMSAFErrorCode (value: FiveGMSAFErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMSAFErrorCode) { _cached_encoder_for_FiveGMSAFErrorCode = $._encodeEnumerated; }
    return _cached_encoder_for_FiveGMSAFErrorCode(value, elGetter);
}


/* eslint-enable */
