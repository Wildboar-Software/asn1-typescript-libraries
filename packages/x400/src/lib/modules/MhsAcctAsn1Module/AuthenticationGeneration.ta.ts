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

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration */
/**
 * @summary AuthenticationGeneration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationGeneration  ::=  INTEGER {generated(1), non-generated(2)}
 * ```
 */
export type AuthenticationGeneration = INTEGER;
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration_generated */
/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_generated: AuthenticationGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration_generated */

/* START_OF_SYMBOL_DEFINITION generated */
/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: AuthenticationGeneration = AuthenticationGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION generated */

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration_non_generated */
/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_non_generated: AuthenticationGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration_non_generated */

/* START_OF_SYMBOL_DEFINITION non_generated */
/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: AuthenticationGeneration = AuthenticationGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_generated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationGeneration */
let _cached_decoder_for_AuthenticationGeneration: $.ASN1Decoder<AuthenticationGeneration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationGeneration */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationGeneration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationGeneration} The decoded data structure.
 */
export function _decode_AuthenticationGeneration(el: _Element) {
    if (!_cached_decoder_for_AuthenticationGeneration) {
        _cached_decoder_for_AuthenticationGeneration = $._decodeInteger;
    }
    return _cached_decoder_for_AuthenticationGeneration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationGeneration */
let _cached_encoder_for_AuthenticationGeneration: $.ASN1Encoder<AuthenticationGeneration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationGeneration */
/**
 * @summary Encodes a(n) AuthenticationGeneration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationGeneration, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationGeneration(
    value: AuthenticationGeneration,
    elGetter: $.ASN1Encoder<AuthenticationGeneration>
) {
    if (!_cached_encoder_for_AuthenticationGeneration) {
        _cached_encoder_for_AuthenticationGeneration = $._encodeInteger;
    }
    return _cached_encoder_for_AuthenticationGeneration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationGeneration */

/* eslint-enable */
