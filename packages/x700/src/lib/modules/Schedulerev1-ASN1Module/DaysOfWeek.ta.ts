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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION DaysOfWeek */
/**
 * @summary DaysOfWeek
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DaysOfWeek  ::=  BIT STRING {
 *   sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5),
 *   saturday(6)}(SIZE (7))
 * ```
 */
export type DaysOfWeek = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION DaysOfWeek */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_sunday */
/**
 * @summary DaysOfWeek_sunday
 * @constant
 */
export const DaysOfWeek_sunday: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_sunday */

/* START_OF_SYMBOL_DEFINITION sunday */
/**
 * @summary sunday
 * @constant
 */
export const sunday: number = DaysOfWeek_sunday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sunday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_monday */
/**
 * @summary DaysOfWeek_monday
 * @constant
 */
export const DaysOfWeek_monday: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_monday */

/* START_OF_SYMBOL_DEFINITION monday */
/**
 * @summary monday
 * @constant
 */
export const monday: number = DaysOfWeek_monday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION monday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_tuesday */
/**
 * @summary DaysOfWeek_tuesday
 * @constant
 */
export const DaysOfWeek_tuesday: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_tuesday */

/* START_OF_SYMBOL_DEFINITION tuesday */
/**
 * @summary tuesday
 * @constant
 */
export const tuesday: number = DaysOfWeek_tuesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION tuesday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_wednesday */
/**
 * @summary DaysOfWeek_wednesday
 * @constant
 */
export const DaysOfWeek_wednesday: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_wednesday */

/* START_OF_SYMBOL_DEFINITION wednesday */
/**
 * @summary wednesday
 * @constant
 */
export const wednesday: number = DaysOfWeek_wednesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wednesday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_thursday */
/**
 * @summary DaysOfWeek_thursday
 * @constant
 */
export const DaysOfWeek_thursday: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_thursday */

/* START_OF_SYMBOL_DEFINITION thursday */
/**
 * @summary thursday
 * @constant
 */
export const thursday: number = DaysOfWeek_thursday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION thursday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_friday */
/**
 * @summary DaysOfWeek_friday
 * @constant
 */
export const DaysOfWeek_friday: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_friday */

/* START_OF_SYMBOL_DEFINITION friday */
/**
 * @summary friday
 * @constant
 */
export const friday: number = DaysOfWeek_friday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION friday */

/* START_OF_SYMBOL_DEFINITION DaysOfWeek_saturday */
/**
 * @summary DaysOfWeek_saturday
 * @constant
 */
export const DaysOfWeek_saturday: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DaysOfWeek_saturday */

/* START_OF_SYMBOL_DEFINITION saturday */
/**
 * @summary saturday
 * @constant
 */
export const saturday: number = DaysOfWeek_saturday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION saturday */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DaysOfWeek */
let _cached_decoder_for_DaysOfWeek: $.ASN1Decoder<DaysOfWeek> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DaysOfWeek */

/* START_OF_SYMBOL_DEFINITION _decode_DaysOfWeek */
/**
 * @summary Decodes an ASN.1 element into a(n) DaysOfWeek
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DaysOfWeek} The decoded data structure.
 */
export function _decode_DaysOfWeek(el: _Element) {
    if (!_cached_decoder_for_DaysOfWeek) {
        _cached_decoder_for_DaysOfWeek = $._decodeBitString;
    }
    return _cached_decoder_for_DaysOfWeek(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DaysOfWeek */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DaysOfWeek */
let _cached_encoder_for_DaysOfWeek: $.ASN1Encoder<DaysOfWeek> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DaysOfWeek */

/* START_OF_SYMBOL_DEFINITION _encode_DaysOfWeek */
/**
 * @summary Encodes a(n) DaysOfWeek into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DaysOfWeek, encoded as an ASN.1 Element.
 */
export function _encode_DaysOfWeek(
    value: DaysOfWeek,
    elGetter: $.ASN1Encoder<DaysOfWeek>
) {
    if (!_cached_encoder_for_DaysOfWeek) {
        _cached_encoder_for_DaysOfWeek = $._encodeBitString;
    }
    return _cached_encoder_for_DaysOfWeek(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DaysOfWeek */

/* eslint-enable */
