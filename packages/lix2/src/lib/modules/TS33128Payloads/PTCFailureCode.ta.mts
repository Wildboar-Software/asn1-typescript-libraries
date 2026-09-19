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

let _cached_decoder_for_PTCFailureCode: $.ASN1Decoder<PTCFailureCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCFailureCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCFailureCode (el: _Element): PTCFailureCode {
    if (!_cached_decoder_for_PTCFailureCode) { _cached_decoder_for_PTCFailureCode = $._decodeEnumerated; }
    return _cached_decoder_for_PTCFailureCode(el);
}

let _cached_encoder_for_PTCFailureCode: $.ASN1Encoder<PTCFailureCode> | null = null;

/**
 * @summary Encodes a(n) PTCFailureCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCFailureCode, encoded as an ASN.1 Element.
 */
export
function _encode_PTCFailureCode (value: PTCFailureCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCFailureCode) { _cached_encoder_for_PTCFailureCode = $._encodeEnumerated; }
    return _cached_encoder_for_PTCFailureCode(value, elGetter);
}


/* eslint-enable */
