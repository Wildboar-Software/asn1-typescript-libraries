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

/* START_OF_SYMBOL_DEFINITION TypeOfMpr */
/**
 * @summary TypeOfMpr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfMpr  ::=  INTEGER {message(0), probe(1), report(2)}
 * ```
 */
export type TypeOfMpr = INTEGER;
/* END_OF_SYMBOL_DEFINITION TypeOfMpr */

/* START_OF_SYMBOL_DEFINITION TypeOfMpr_message */
/**
 * @summary TypeOfMpr_message
 * @constant
 * @type {number}
 */
export const TypeOfMpr_message: TypeOfMpr = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMpr_message */

/* START_OF_SYMBOL_DEFINITION message */
/**
 * @summary TypeOfMpr_message
 * @constant
 * @type {number}
 */
export const message: TypeOfMpr = TypeOfMpr_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message */

/* START_OF_SYMBOL_DEFINITION TypeOfMpr_probe */
/**
 * @summary TypeOfMpr_probe
 * @constant
 * @type {number}
 */
export const TypeOfMpr_probe: TypeOfMpr = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMpr_probe */

/* START_OF_SYMBOL_DEFINITION probe */
/**
 * @summary TypeOfMpr_probe
 * @constant
 * @type {number}
 */
export const probe: TypeOfMpr = TypeOfMpr_probe; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION probe */

/* START_OF_SYMBOL_DEFINITION TypeOfMpr_report */
/**
 * @summary TypeOfMpr_report
 * @constant
 * @type {number}
 */
export const TypeOfMpr_report: TypeOfMpr = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMpr_report */

/* START_OF_SYMBOL_DEFINITION report */
/**
 * @summary TypeOfMpr_report
 * @constant
 * @type {number}
 */
export const report: TypeOfMpr = TypeOfMpr_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfMpr */
let _cached_decoder_for_TypeOfMpr: $.ASN1Decoder<TypeOfMpr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfMpr */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfMpr */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfMpr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfMpr} The decoded data structure.
 */
export function _decode_TypeOfMpr(el: _Element) {
    if (!_cached_decoder_for_TypeOfMpr) {
        _cached_decoder_for_TypeOfMpr = $._decodeInteger;
    }
    return _cached_decoder_for_TypeOfMpr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfMpr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfMpr */
let _cached_encoder_for_TypeOfMpr: $.ASN1Encoder<TypeOfMpr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfMpr */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfMpr */
/**
 * @summary Encodes a(n) TypeOfMpr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfMpr, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfMpr(
    value: TypeOfMpr,
    elGetter: $.ASN1Encoder<TypeOfMpr>
) {
    if (!_cached_encoder_for_TypeOfMpr) {
        _cached_encoder_for_TypeOfMpr = $._encodeInteger;
    }
    return _cached_encoder_for_TypeOfMpr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfMpr */

/* eslint-enable */
