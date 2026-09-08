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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



export
enum _enum_for_CompressionMethod {
    null_ = 0,
}

/**
 * @summary CompressionMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressionMethod     ::=     ENUMERATED {
 * null,
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CompressionMethod = _enum_for_CompressionMethod | ENUMERATED;

/**
 * @summary CompressionMethod_null_
 * @constant
 * @type {number}
 */
export
const CompressionMethod_null_: CompressionMethod = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @constant
 * @type {number}
 */
export
const null_: CompressionMethod = CompressionMethod_null_; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CompressionMethod: $.ASN1Decoder<CompressionMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressionMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressionMethod (el: _Element): CompressionMethod {
    if (!_cached_decoder_for_CompressionMethod) { _cached_decoder_for_CompressionMethod = $._decodeEnumerated; }
    return _cached_decoder_for_CompressionMethod(el);
}

let _cached_encoder_for_CompressionMethod: $.ASN1Encoder<CompressionMethod> | null = null;

/**
 * @summary Encodes a(n) CompressionMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressionMethod, encoded as an ASN.1 Element.
 */
export
function _encode_CompressionMethod (value: CompressionMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressionMethod) { _cached_encoder_for_CompressionMethod = $._encodeEnumerated; }
    return _cached_encoder_for_CompressionMethod(value, elGetter);
}


/* eslint-enable */
