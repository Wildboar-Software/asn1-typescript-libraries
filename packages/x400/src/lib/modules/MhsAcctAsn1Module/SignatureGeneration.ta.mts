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

/* START_OF_SYMBOL_DEFINITION SignatureGeneration */
/**
 * @summary SignatureGeneration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureGeneration  ::=  INTEGER {generated(1), non-generated(2)}
 * ```
 */
export type SignatureGeneration = INTEGER;
/* END_OF_SYMBOL_DEFINITION SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION SignatureGeneration_generated */
/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_generated: SignatureGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureGeneration_generated */

/* START_OF_SYMBOL_DEFINITION generated */
/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: SignatureGeneration = SignatureGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION generated */

/* START_OF_SYMBOL_DEFINITION SignatureGeneration_non_generated */
/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_non_generated: SignatureGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureGeneration_non_generated */

/* START_OF_SYMBOL_DEFINITION non_generated */
/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: SignatureGeneration = SignatureGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_generated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureGeneration */
let _cached_decoder_for_SignatureGeneration: $.ASN1Decoder<SignatureGeneration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureGeneration */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureGeneration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureGeneration} The decoded data structure.
 */
export function _decode_SignatureGeneration(el: _Element) {
    if (!_cached_decoder_for_SignatureGeneration) {
        _cached_decoder_for_SignatureGeneration = $._decodeInteger;
    }
    return _cached_decoder_for_SignatureGeneration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureGeneration */
let _cached_encoder_for_SignatureGeneration: $.ASN1Encoder<SignatureGeneration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureGeneration */
/**
 * @summary Encodes a(n) SignatureGeneration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureGeneration, encoded as an ASN.1 Element.
 */
export function _encode_SignatureGeneration(
    value: SignatureGeneration,
    elGetter: $.ASN1Encoder<SignatureGeneration>
) {
    if (!_cached_encoder_for_SignatureGeneration) {
        _cached_encoder_for_SignatureGeneration = $._encodeInteger;
    }
    return _cached_encoder_for_SignatureGeneration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureGeneration */

/* eslint-enable */
