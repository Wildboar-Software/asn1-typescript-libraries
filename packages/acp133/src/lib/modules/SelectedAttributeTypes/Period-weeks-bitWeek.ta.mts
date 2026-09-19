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
 * @summary Period_weeks_bitWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-weeks-bitWeek ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Period_weeks_bitWeek = BIT_STRING;

/**
 * @summary Period_weeks_bitWeek_week1
 * @constant
 */
export
const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary week1
 * @constant
 */
export
const week1: number = Period_weeks_bitWeek_week1; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week2
 * @constant
 */
export
const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary week2
 * @constant
 */
export
const week2: number = Period_weeks_bitWeek_week2; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week3
 * @constant
 */
export
const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary week3
 * @constant
 */
export
const week3: number = Period_weeks_bitWeek_week3; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week4
 * @constant
 */
export
const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary week4
 * @constant
 */
export
const week4: number = Period_weeks_bitWeek_week4; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week5
 * @constant
 */
export
const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary week5
 * @constant
 */
export
const week5: number = Period_weeks_bitWeek_week5; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Period_weeks_bitWeek: $.ASN1Decoder<Period_weeks_bitWeek> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks_bitWeek
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_weeks_bitWeek (el: _Element): Period_weeks_bitWeek {
    if (!_cached_decoder_for_Period_weeks_bitWeek) { _cached_decoder_for_Period_weeks_bitWeek = $._decodeBitString; }
    return _cached_decoder_for_Period_weeks_bitWeek(el);
}

let _cached_encoder_for_Period_weeks_bitWeek: $.ASN1Encoder<Period_weeks_bitWeek> | null = null;

/**
 * @summary Encodes a(n) Period_weeks_bitWeek into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks_bitWeek, encoded as an ASN.1 Element.
 */
export
function _encode_Period_weeks_bitWeek (value: Period_weeks_bitWeek, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_weeks_bitWeek) { _cached_encoder_for_Period_weeks_bitWeek = $._encodeBitString; }
    return _cached_encoder_for_Period_weeks_bitWeek(value, elGetter);
}


/* eslint-enable */
