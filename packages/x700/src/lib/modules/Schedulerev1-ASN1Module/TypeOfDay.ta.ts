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

/* START_OF_SYMBOL_DEFINITION TypeOfDay */
/**
 * @summary TypeOfDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfDay  ::=  INTEGER {
 *   workday(0), weekend(1), specialDay1(2), specialDay2(3), specialDay3(4),
 *   specialDay4(5), specialDay5(6), specialDay6(7), specialDay7(8),
 *   specialDay8(9), specialDay9(10), specialDay10(11), specialDay11(12),
 *   specialDay12(13), specialDay13(14), specialDay14(15), specialDay15(16),
 *   specialDay16(17)}
 * ```
 */
export type TypeOfDay = INTEGER;
/* END_OF_SYMBOL_DEFINITION TypeOfDay */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_workday */
/**
 * @summary TypeOfDay_workday
 * @constant
 * @type {number}
 */
export const TypeOfDay_workday: TypeOfDay = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_workday */

/* START_OF_SYMBOL_DEFINITION workday */
/**
 * @summary TypeOfDay_workday
 * @constant
 * @type {number}
 */
export const workday: TypeOfDay = TypeOfDay_workday; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION workday */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_weekend */
/**
 * @summary TypeOfDay_weekend
 * @constant
 * @type {number}
 */
export const TypeOfDay_weekend: TypeOfDay = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_weekend */

/* START_OF_SYMBOL_DEFINITION weekend */
/**
 * @summary TypeOfDay_weekend
 * @constant
 * @type {number}
 */
export const weekend: TypeOfDay = TypeOfDay_weekend; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION weekend */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay1 */
/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay1: TypeOfDay = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay1 */

/* START_OF_SYMBOL_DEFINITION specialDay1 */
/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const specialDay1: TypeOfDay = TypeOfDay_specialDay1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay1 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay2 */
/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay2: TypeOfDay = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay2 */

/* START_OF_SYMBOL_DEFINITION specialDay2 */
/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const specialDay2: TypeOfDay = TypeOfDay_specialDay2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay2 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay3 */
/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay3: TypeOfDay = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay3 */

/* START_OF_SYMBOL_DEFINITION specialDay3 */
/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const specialDay3: TypeOfDay = TypeOfDay_specialDay3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay3 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay4 */
/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay4: TypeOfDay = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay4 */

/* START_OF_SYMBOL_DEFINITION specialDay4 */
/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const specialDay4: TypeOfDay = TypeOfDay_specialDay4; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay4 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay5 */
/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay5: TypeOfDay = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay5 */

/* START_OF_SYMBOL_DEFINITION specialDay5 */
/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const specialDay5: TypeOfDay = TypeOfDay_specialDay5; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay5 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay6 */
/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay6: TypeOfDay = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay6 */

/* START_OF_SYMBOL_DEFINITION specialDay6 */
/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const specialDay6: TypeOfDay = TypeOfDay_specialDay6; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay6 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay7 */
/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay7: TypeOfDay = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay7 */

/* START_OF_SYMBOL_DEFINITION specialDay7 */
/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const specialDay7: TypeOfDay = TypeOfDay_specialDay7; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay7 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay8 */
/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay8: TypeOfDay = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay8 */

/* START_OF_SYMBOL_DEFINITION specialDay8 */
/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const specialDay8: TypeOfDay = TypeOfDay_specialDay8; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay8 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay9 */
/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay9: TypeOfDay = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay9 */

/* START_OF_SYMBOL_DEFINITION specialDay9 */
/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const specialDay9: TypeOfDay = TypeOfDay_specialDay9; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay9 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay10 */
/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay10: TypeOfDay = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay10 */

/* START_OF_SYMBOL_DEFINITION specialDay10 */
/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const specialDay10: TypeOfDay = TypeOfDay_specialDay10; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay10 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay11 */
/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay11: TypeOfDay = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay11 */

/* START_OF_SYMBOL_DEFINITION specialDay11 */
/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const specialDay11: TypeOfDay = TypeOfDay_specialDay11; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay11 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay12 */
/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay12: TypeOfDay = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay12 */

/* START_OF_SYMBOL_DEFINITION specialDay12 */
/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const specialDay12: TypeOfDay = TypeOfDay_specialDay12; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay12 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay13 */
/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay13: TypeOfDay = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay13 */

/* START_OF_SYMBOL_DEFINITION specialDay13 */
/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const specialDay13: TypeOfDay = TypeOfDay_specialDay13; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay13 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay14 */
/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay14: TypeOfDay = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay14 */

/* START_OF_SYMBOL_DEFINITION specialDay14 */
/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const specialDay14: TypeOfDay = TypeOfDay_specialDay14; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay14 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay15 */
/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay15: TypeOfDay = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay15 */

/* START_OF_SYMBOL_DEFINITION specialDay15 */
/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const specialDay15: TypeOfDay = TypeOfDay_specialDay15; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay15 */

/* START_OF_SYMBOL_DEFINITION TypeOfDay_specialDay16 */
/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay16: TypeOfDay = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfDay_specialDay16 */

/* START_OF_SYMBOL_DEFINITION specialDay16 */
/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const specialDay16: TypeOfDay = TypeOfDay_specialDay16; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION specialDay16 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDay */
let _cached_decoder_for_TypeOfDay: $.ASN1Decoder<TypeOfDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDay */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfDay */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfDay} The decoded data structure.
 */
export function _decode_TypeOfDay(el: _Element) {
    if (!_cached_decoder_for_TypeOfDay) {
        _cached_decoder_for_TypeOfDay = $._decodeInteger;
    }
    return _cached_decoder_for_TypeOfDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDay */
let _cached_encoder_for_TypeOfDay: $.ASN1Encoder<TypeOfDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDay */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfDay */
/**
 * @summary Encodes a(n) TypeOfDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfDay, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfDay(
    value: TypeOfDay,
    elGetter: $.ASN1Encoder<TypeOfDay>
) {
    if (!_cached_encoder_for_TypeOfDay) {
        _cached_encoder_for_TypeOfDay = $._encodeInteger;
    }
    return _cached_encoder_for_TypeOfDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfDay */

/* eslint-enable */
