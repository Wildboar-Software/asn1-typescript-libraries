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
 * @summary Period_days_bitDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-days-bitDay ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Period_days_bitDay = BIT_STRING;

/**
 * @summary Period_days_bitDay_sunday
 * @constant
 */
export
const Period_days_bitDay_sunday: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sunday
 * @constant
 */
export
const sunday: number = Period_days_bitDay_sunday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_monday
 * @constant
 */
export
const Period_days_bitDay_monday: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary monday
 * @constant
 */
export
const monday: number = Period_days_bitDay_monday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_tuesday
 * @constant
 */
export
const Period_days_bitDay_tuesday: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary tuesday
 * @constant
 */
export
const tuesday: number = Period_days_bitDay_tuesday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_wednesday
 * @constant
 */
export
const Period_days_bitDay_wednesday: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary wednesday
 * @constant
 */
export
const wednesday: number = Period_days_bitDay_wednesday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_thursday
 * @constant
 */
export
const Period_days_bitDay_thursday: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary thursday
 * @constant
 */
export
const thursday: number = Period_days_bitDay_thursday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_friday
 * @constant
 */
export
const Period_days_bitDay_friday: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary friday
 * @constant
 */
export
const friday: number = Period_days_bitDay_friday; /* SHORT_NAMED_BIT */

/**
 * @summary Period_days_bitDay_saturday
 * @constant
 */
export
const Period_days_bitDay_saturday: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary saturday
 * @constant
 */
export
const saturday: number = Period_days_bitDay_saturday; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Period_days_bitDay: $.ASN1Decoder<Period_days_bitDay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_days_bitDay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_days_bitDay (el: _Element): Period_days_bitDay {
    if (!_cached_decoder_for_Period_days_bitDay) { _cached_decoder_for_Period_days_bitDay = $._decodeBitString; }
    return _cached_decoder_for_Period_days_bitDay(el);
}

let _cached_encoder_for_Period_days_bitDay: $.ASN1Encoder<Period_days_bitDay> | null = null;

/**
 * @summary Encodes a(n) Period_days_bitDay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days_bitDay, encoded as an ASN.1 Element.
 */
export
function _encode_Period_days_bitDay (value: Period_days_bitDay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_days_bitDay) { _cached_encoder_for_Period_days_bitDay = $._encodeBitString; }
    return _cached_encoder_for_Period_days_bitDay(value, elGetter);
}


/* eslint-enable */
