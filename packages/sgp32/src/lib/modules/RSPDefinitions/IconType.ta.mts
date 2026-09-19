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
 * @summary IconType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IconType  ::=  INTEGER {jpg(0), png(1)}
 * ```
 */
export
type IconType = INTEGER;

/**
 * @summary IconType_jpg
 * @constant
 * @type {number}
 */
export
const IconType_jpg: IconType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_jpg
 * @constant
 * @type {number}
 */
export
const jpg: IconType = IconType_jpg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @constant
 * @type {number}
 */
export
const IconType_png: IconType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IconType_png
 * @constant
 * @type {number}
 */
export
const png: IconType = IconType_png; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_IconType: $.ASN1Decoder<IconType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IconType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IconType (el: _Element): IconType {
    if (!_cached_decoder_for_IconType) { _cached_decoder_for_IconType = $._decodeInteger; }
    return _cached_decoder_for_IconType(el);
}

let _cached_encoder_for_IconType: $.ASN1Encoder<IconType> | null = null;

/**
 * @summary Encodes a(n) IconType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IconType, encoded as an ASN.1 Element.
 */
export
function _encode_IconType (value: IconType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IconType) { _cached_encoder_for_IconType = $._encodeInteger; }
    return _cached_encoder_for_IconType(value, elGetter);
}


/* eslint-enable */
