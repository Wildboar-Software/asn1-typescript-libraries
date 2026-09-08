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



/**
 * @summary DataPathType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathType  ::=  ENUMERATED
 * {     text                 ( 0),
 *     voice                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DataPathType {
    text = 0,
    voice = 1,
}

/**
 * @summary DataPathType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathType  ::=  ENUMERATED
 * {     text                 ( 0),
 *     voice                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type DataPathType = _enum_for_DataPathType;

/**
 * @summary DataPathType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataPathType  ::=  ENUMERATED
 * {     text                 ( 0),
 *     voice                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const DataPathType = _enum_for_DataPathType;

/**
 * @summary DataPathType_text
 * @constant
 * @type {number}
 */
export
const DataPathType_text: DataPathType = DataPathType.text; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @constant
 * @type {number}
 */
export
const text: DataPathType = DataPathType.text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataPathType_voice
 * @constant
 * @type {number}
 */
export
const DataPathType_voice: DataPathType = DataPathType.voice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voice
 * @constant
 * @type {number}
 */
export
const voice: DataPathType = DataPathType.voice; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DataPathType: $.ASN1Decoder<DataPathType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataPathType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataPathType (el: _Element): DataPathType {
    if (!_cached_decoder_for_DataPathType) { _cached_decoder_for_DataPathType = $._decodeEnumerated; }
    return _cached_decoder_for_DataPathType(el);
}

let _cached_encoder_for_DataPathType: $.ASN1Encoder<DataPathType> | null = null;

/**
 * @summary Encodes a(n) DataPathType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataPathType, encoded as an ASN.1 Element.
 */
export
function _encode_DataPathType (value: DataPathType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataPathType) { _cached_encoder_for_DataPathType = $._encodeEnumerated; }
    return _cached_encoder_for_DataPathType(value, elGetter);
}


/* eslint-enable */
