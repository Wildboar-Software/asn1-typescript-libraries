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
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_taskRefused_ParameterType {
    generic = 0,
    unobtainable = 1,
    congestion = 2,
}

/**
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType_generic
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_unobtainable
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unobtainable
 * @constant
 * @type {number}
 */
export
const unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_congestion
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_taskRefused_ParameterType: $.ASN1Decoder<taskRefused_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) taskRefused_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_taskRefused_ParameterType (el: _Element): taskRefused_ParameterType {
    if (!_cached_decoder_for_taskRefused_ParameterType) { _cached_decoder_for_taskRefused_ParameterType = $._decodeEnumerated; }
    return _cached_decoder_for_taskRefused_ParameterType(el);
}

let _cached_encoder_for_taskRefused_ParameterType: $.ASN1Encoder<taskRefused_ParameterType> | null = null;

/**
 * @summary Encodes a(n) taskRefused_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The taskRefused_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_taskRefused_ParameterType (value: taskRefused_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_taskRefused_ParameterType) { _cached_encoder_for_taskRefused_ParameterType = $._encodeEnumerated; }
    return _cached_encoder_for_taskRefused_ParameterType(value, elGetter);
}


/* eslint-enable */
