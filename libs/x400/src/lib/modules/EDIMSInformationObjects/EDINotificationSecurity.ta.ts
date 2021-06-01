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

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity */
/**
 * @summary EDINotificationSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationSecurity  ::=  BIT STRING {proof(0), non-repudiation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationSecurity = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity_proof */
/**
 * @summary EDINotificationSecurity_proof
 * @constant
 */
export const EDINotificationSecurity_proof: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity_proof */

/* START_OF_SYMBOL_DEFINITION proof */
/**
 * @summary proof
 * @constant
 */
export const proof: number = EDINotificationSecurity_proof; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION proof */

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity_non_repudiation */
/**
 * @summary EDINotificationSecurity_non_repudiation
 * @constant
 */
export const EDINotificationSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity_non_repudiation */

/* START_OF_SYMBOL_DEFINITION non_repudiation */
/**
 * @summary non_repudiation
 * @constant
 */
export const non_repudiation: number = EDINotificationSecurity_non_repudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION non_repudiation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationSecurity */
let _cached_decoder_for_EDINotificationSecurity: $.ASN1Decoder<EDINotificationSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationSecurity */
/**
 * @summary Decodes an ASN.1 element into a(n) EDINotificationSecurity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINotificationSecurity} The decoded data structure.
 */
export function _decode_EDINotificationSecurity(el: _Element) {
    if (!_cached_decoder_for_EDINotificationSecurity) {
        _cached_decoder_for_EDINotificationSecurity = $._decodeBitString;
    }
    return _cached_decoder_for_EDINotificationSecurity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationSecurity */
let _cached_encoder_for_EDINotificationSecurity: $.ASN1Encoder<EDINotificationSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationSecurity */
/**
 * @summary Encodes a(n) EDINotificationSecurity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINotificationSecurity, encoded as an ASN.1 Element.
 */
export function _encode_EDINotificationSecurity(
    value: EDINotificationSecurity,
    elGetter: $.ASN1Encoder<EDINotificationSecurity>
) {
    if (!_cached_encoder_for_EDINotificationSecurity) {
        _cached_encoder_for_EDINotificationSecurity = $._encodeBitString;
    }
    return _cached_encoder_for_EDINotificationSecurity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationSecurity */

/* eslint-enable */
