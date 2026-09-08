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
 * @summary MediaCallCharacteristics_bitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics-bitRate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MediaCallCharacteristics_bitRate {
    constant = 0,
    variable = 1,
}

/**
 * @summary MediaCallCharacteristics_bitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics-bitRate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MediaCallCharacteristics_bitRate = _enum_for_MediaCallCharacteristics_bitRate;

/**
 * @summary MediaCallCharacteristics_bitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics-bitRate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const MediaCallCharacteristics_bitRate = _enum_for_MediaCallCharacteristics_bitRate;

/**
 * @summary MediaCallCharacteristics_bitRate_constant
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_bitRate_constant: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.constant; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constant
 * @constant
 * @type {number}
 */
export
const constant: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.constant; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaCallCharacteristics_bitRate_variable
 * @constant
 * @type {number}
 */
export
const MediaCallCharacteristics_bitRate_variable: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.variable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary variable
 * @constant
 * @type {number}
 */
export
const variable: MediaCallCharacteristics_bitRate = MediaCallCharacteristics_bitRate.variable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaCallCharacteristics_bitRate: $.ASN1Decoder<MediaCallCharacteristics_bitRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaCallCharacteristics_bitRate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaCallCharacteristics_bitRate (el: _Element): MediaCallCharacteristics_bitRate {
    if (!_cached_decoder_for_MediaCallCharacteristics_bitRate) { _cached_decoder_for_MediaCallCharacteristics_bitRate = $._decodeEnumerated; }
    return _cached_decoder_for_MediaCallCharacteristics_bitRate(el);
}

let _cached_encoder_for_MediaCallCharacteristics_bitRate: $.ASN1Encoder<MediaCallCharacteristics_bitRate> | null = null;

/**
 * @summary Encodes a(n) MediaCallCharacteristics_bitRate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaCallCharacteristics_bitRate, encoded as an ASN.1 Element.
 */
export
function _encode_MediaCallCharacteristics_bitRate (value: MediaCallCharacteristics_bitRate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaCallCharacteristics_bitRate) { _cached_encoder_for_MediaCallCharacteristics_bitRate = $._encodeEnumerated; }
    return _cached_encoder_for_MediaCallCharacteristics_bitRate(value, elGetter);
}


/* eslint-enable */
