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

/* START_OF_SYMBOL_DEFINITION Encipherment */
/**
 * @summary Encipherment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Encipherment  ::=  INTEGER {encrypted(1), clear(2)}
 * ```
 */
export type Encipherment = INTEGER;
/* END_OF_SYMBOL_DEFINITION Encipherment */

/* START_OF_SYMBOL_DEFINITION Encipherment_encrypted */
/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const Encipherment_encrypted: Encipherment = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Encipherment_encrypted */

/* START_OF_SYMBOL_DEFINITION encrypted */
/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const encrypted: Encipherment = Encipherment_encrypted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION encrypted */

/* START_OF_SYMBOL_DEFINITION Encipherment_clear */
/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const Encipherment_clear: Encipherment = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Encipherment_clear */

/* START_OF_SYMBOL_DEFINITION clear */
/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const clear: Encipherment = Encipherment_clear; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clear */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Encipherment */
let _cached_decoder_for_Encipherment: $.ASN1Decoder<Encipherment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Encipherment */

/* START_OF_SYMBOL_DEFINITION _decode_Encipherment */
/**
 * @summary Decodes an ASN.1 element into a(n) Encipherment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Encipherment} The decoded data structure.
 */
export function _decode_Encipherment(el: _Element) {
    if (!_cached_decoder_for_Encipherment) {
        _cached_decoder_for_Encipherment = $._decodeInteger;
    }
    return _cached_decoder_for_Encipherment(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Encipherment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Encipherment */
let _cached_encoder_for_Encipherment: $.ASN1Encoder<Encipherment> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Encipherment */

/* START_OF_SYMBOL_DEFINITION _encode_Encipherment */
/**
 * @summary Encodes a(n) Encipherment into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Encipherment, encoded as an ASN.1 Element.
 */
export function _encode_Encipherment(
    value: Encipherment,
    elGetter: $.ASN1Encoder<Encipherment>
) {
    if (!_cached_encoder_for_Encipherment) {
        _cached_encoder_for_Encipherment = $._encodeInteger;
    }
    return _cached_encoder_for_Encipherment(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Encipherment */

/* eslint-enable */
