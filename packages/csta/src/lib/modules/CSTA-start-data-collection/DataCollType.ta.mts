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
 * @summary DataCollType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DataCollType {
    digits = 0,
    telTones = 1,
}

/**
 * @summary DataCollType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
type DataCollType = _enum_for_DataCollType;

/**
 * @summary DataCollType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
const DataCollType = _enum_for_DataCollType;

/**
 * @summary DataCollType_digits
 * @constant
 * @type {number}
 */
export
const DataCollType_digits: DataCollType = DataCollType.digits; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digits
 * @constant
 * @type {number}
 */
export
const digits: DataCollType = DataCollType.digits; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataCollType_telTones
 * @constant
 * @type {number}
 */
export
const DataCollType_telTones: DataCollType = DataCollType.telTones; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telTones
 * @constant
 * @type {number}
 */
export
const telTones: DataCollType = DataCollType.telTones; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DataCollType: $.ASN1Decoder<DataCollType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollType (el: _Element): DataCollType {
    if (!_cached_decoder_for_DataCollType) { _cached_decoder_for_DataCollType = $._decodeEnumerated; }
    return _cached_decoder_for_DataCollType(el);
}

let _cached_encoder_for_DataCollType: $.ASN1Encoder<DataCollType> | null = null;

/**
 * @summary Encodes a(n) DataCollType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollType, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollType (value: DataCollType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollType) { _cached_encoder_for_DataCollType = $._encodeEnumerated; }
    return _cached_encoder_for_DataCollType(value, elGetter);
}


/* eslint-enable */
