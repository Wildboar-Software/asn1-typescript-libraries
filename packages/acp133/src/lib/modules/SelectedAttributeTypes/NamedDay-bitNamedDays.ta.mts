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
 * @summary NamedDay_bitNamedDays
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay-bitNamedDays ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type NamedDay_bitNamedDays = BIT_STRING;

/**
 * @summary NamedDay_bitNamedDays_sunday
 * @constant
 */
export
const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sunday
 * @constant
 */
export
const sunday: number = NamedDay_bitNamedDays_sunday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_monday
 * @constant
 */
export
const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary monday
 * @constant
 */
export
const monday: number = NamedDay_bitNamedDays_monday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_tuesday
 * @constant
 */
export
const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary tuesday
 * @constant
 */
export
const tuesday: number = NamedDay_bitNamedDays_tuesday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_wednesday
 * @constant
 */
export
const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary wednesday
 * @constant
 */
export
const wednesday: number = NamedDay_bitNamedDays_wednesday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_thursday
 * @constant
 */
export
const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary thursday
 * @constant
 */
export
const thursday: number = NamedDay_bitNamedDays_thursday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_friday
 * @constant
 */
export
const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary friday
 * @constant
 */
export
const friday: number = NamedDay_bitNamedDays_friday; /* SHORT_NAMED_BIT */

/**
 * @summary NamedDay_bitNamedDays_saturday
 * @constant
 */
export
const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary saturday
 * @constant
 */
export
const saturday: number = NamedDay_bitNamedDays_saturday; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NamedDay_bitNamedDays: $.ASN1Decoder<NamedDay_bitNamedDays> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay_bitNamedDays
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamedDay_bitNamedDays (el: _Element): NamedDay_bitNamedDays {
    if (!_cached_decoder_for_NamedDay_bitNamedDays) { _cached_decoder_for_NamedDay_bitNamedDays = $._decodeBitString; }
    return _cached_decoder_for_NamedDay_bitNamedDays(el);
}

let _cached_encoder_for_NamedDay_bitNamedDays: $.ASN1Encoder<NamedDay_bitNamedDays> | null = null;

/**
 * @summary Encodes a(n) NamedDay_bitNamedDays into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay_bitNamedDays, encoded as an ASN.1 Element.
 */
export
function _encode_NamedDay_bitNamedDays (value: NamedDay_bitNamedDays, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamedDay_bitNamedDays) { _cached_encoder_for_NamedDay_bitNamedDays = $._encodeBitString; }
    return _cached_encoder_for_NamedDay_bitNamedDays(value, elGetter);
}


/* eslint-enable */
