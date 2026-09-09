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
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InfoType {
    numericString = 0,
    characterString = 1,
    iA5String = 2,
}

/**
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
type InfoType = _enum_for_InfoType;

/**
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
const InfoType = _enum_for_InfoType;

/**
 * @summary InfoType_numericString
 * @constant
 * @type {number}
 */
export
const InfoType_numericString: InfoType = InfoType.numericString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericString
 * @constant
 * @type {number}
 */
export
const numericString: InfoType = InfoType.numericString; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_characterString
 * @constant
 * @type {number}
 */
export
const InfoType_characterString: InfoType = InfoType.characterString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterString
 * @constant
 * @type {number}
 */
export
const characterString: InfoType = InfoType.characterString; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_iA5String
 * @constant
 * @type {number}
 */
export
const InfoType_iA5String: InfoType = InfoType.iA5String; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iA5String
 * @constant
 * @type {number}
 */
export
const iA5String: InfoType = InfoType.iA5String; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InfoType: $.ASN1Decoder<InfoType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoType (el: _Element): InfoType {
    if (!_cached_decoder_for_InfoType) { _cached_decoder_for_InfoType = $._decodeEnumerated; }
    return _cached_decoder_for_InfoType(el);
}

let _cached_encoder_for_InfoType: $.ASN1Encoder<InfoType> | null = null;

/**
 * @summary Encodes a(n) InfoType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoType, encoded as an ASN.1 Element.
 */
export
function _encode_InfoType (value: InfoType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoType) { _cached_encoder_for_InfoType = $._encodeEnumerated; }
    return _cached_encoder_for_InfoType(value, elGetter);
}


/* eslint-enable */
