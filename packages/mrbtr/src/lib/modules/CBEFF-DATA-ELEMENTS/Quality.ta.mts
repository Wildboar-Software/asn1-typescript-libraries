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
 * @summary Quality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quality  ::=  INTEGER {
 *   no-value-available(-3), quality-not-supported(-2), quality-not-recorded(-1)
 * }(-3..100)
 * ```
 */
export
type Quality = INTEGER;

/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export
const Quality_no_value_available: Quality = -3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export
const no_value_available: Quality = Quality_no_value_available; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export
const Quality_quality_not_supported: Quality = -2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export
const quality_not_supported: Quality = Quality_quality_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export
const Quality_quality_not_recorded: Quality = -1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export
const quality_not_recorded: Quality = Quality_quality_not_recorded; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Quality: $.ASN1Decoder<Quality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Quality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Quality (el: _Element): Quality {
    if (!_cached_decoder_for_Quality) { _cached_decoder_for_Quality = $._decodeInteger; }
    return _cached_decoder_for_Quality(el);
}

let _cached_encoder_for_Quality: $.ASN1Encoder<Quality> | null = null;

/**
 * @summary Encodes a(n) Quality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Quality, encoded as an ASN.1 Element.
 */
export
function _encode_Quality (value: Quality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Quality) { _cached_encoder_for_Quality = $._encodeInteger; }
    return _cached_encoder_for_Quality(value, elGetter);
}


/* eslint-enable */
