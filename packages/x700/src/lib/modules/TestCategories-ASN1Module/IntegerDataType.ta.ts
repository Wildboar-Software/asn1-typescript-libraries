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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION IntegerDataType */
/**
 * @summary IntegerDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntegerDataType  ::=  INTEGER {
 *   allBitOn(0), allBitOff(1), incrementNumber(2),
 *   pn11(3), -- CCITT 0.152
 *   pn15(4), -- CCITT 0.151
 *   pn20(5)}
 * ```
 */
export type IntegerDataType = INTEGER;
/* END_OF_SYMBOL_DEFINITION IntegerDataType */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_allBitOn */
/**
 * @summary IntegerDataType_allBitOn
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOn: IntegerDataType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_allBitOn */

/* START_OF_SYMBOL_DEFINITION allBitOn */
/**
 * @summary IntegerDataType_allBitOn
 * @constant
 * @type {number}
 */
export const allBitOn: IntegerDataType = IntegerDataType_allBitOn; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION allBitOn */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_allBitOff */
/**
 * @summary IntegerDataType_allBitOff
 * @constant
 * @type {number}
 */
export const IntegerDataType_allBitOff: IntegerDataType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_allBitOff */

/* START_OF_SYMBOL_DEFINITION allBitOff */
/**
 * @summary IntegerDataType_allBitOff
 * @constant
 * @type {number}
 */
export const allBitOff: IntegerDataType = IntegerDataType_allBitOff; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION allBitOff */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_incrementNumber */
/**
 * @summary IntegerDataType_incrementNumber
 * @constant
 * @type {number}
 */
export const IntegerDataType_incrementNumber: IntegerDataType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_incrementNumber */

/* START_OF_SYMBOL_DEFINITION incrementNumber */
/**
 * @summary IntegerDataType_incrementNumber
 * @constant
 * @type {number}
 */
export const incrementNumber: IntegerDataType = IntegerDataType_incrementNumber; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incrementNumber */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_pn11 */
/**
 * @summary IntegerDataType_pn11
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn11: IntegerDataType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_pn11 */

/* START_OF_SYMBOL_DEFINITION pn11 */
/**
 * @summary IntegerDataType_pn11
 * @constant
 * @type {number}
 */
export const pn11: IntegerDataType = IntegerDataType_pn11; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pn11 */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_pn15 */
/**
 * @summary IntegerDataType_pn15
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn15: IntegerDataType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_pn15 */

/* START_OF_SYMBOL_DEFINITION pn15 */
/**
 * @summary IntegerDataType_pn15
 * @constant
 * @type {number}
 */
export const pn15: IntegerDataType = IntegerDataType_pn15; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pn15 */

/* START_OF_SYMBOL_DEFINITION IntegerDataType_pn20 */
/**
 * @summary IntegerDataType_pn20
 * @constant
 * @type {number}
 */
export const IntegerDataType_pn20: IntegerDataType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IntegerDataType_pn20 */

/* START_OF_SYMBOL_DEFINITION pn20 */
/**
 * @summary IntegerDataType_pn20
 * @constant
 * @type {number}
 */
export const pn20: IntegerDataType = IntegerDataType_pn20; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pn20 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegerDataType */
let _cached_decoder_for_IntegerDataType: $.ASN1Decoder<IntegerDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegerDataType */

/* START_OF_SYMBOL_DEFINITION _decode_IntegerDataType */
/**
 * @summary Decodes an ASN.1 element into a(n) IntegerDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntegerDataType} The decoded data structure.
 */
export function _decode_IntegerDataType(el: _Element) {
    if (!_cached_decoder_for_IntegerDataType) {
        _cached_decoder_for_IntegerDataType = $._decodeInteger;
    }
    return _cached_decoder_for_IntegerDataType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntegerDataType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegerDataType */
let _cached_encoder_for_IntegerDataType: $.ASN1Encoder<IntegerDataType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegerDataType */

/* START_OF_SYMBOL_DEFINITION _encode_IntegerDataType */
/**
 * @summary Encodes a(n) IntegerDataType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegerDataType, encoded as an ASN.1 Element.
 */
export function _encode_IntegerDataType(
    value: IntegerDataType,
    elGetter: $.ASN1Encoder<IntegerDataType>
) {
    if (!_cached_encoder_for_IntegerDataType) {
        _cached_encoder_for_IntegerDataType = $._encodeInteger;
    }
    return _cached_encoder_for_IntegerDataType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntegerDataType */

/* eslint-enable */
