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

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests */
/**
 * @summary EDINotificationRequests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationRequests  ::=  BIT STRING {pn(0), nn(1), fn(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationRequests = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_pn */
/**
 * @summary EDINotificationRequests_pn
 * @constant
 */
export const EDINotificationRequests_pn: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_pn */

/* START_OF_SYMBOL_DEFINITION pn */
/**
 * @summary pn
 * @constant
 */
export const pn: number = EDINotificationRequests_pn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pn */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_nn */
/**
 * @summary EDINotificationRequests_nn
 * @constant
 */
export const EDINotificationRequests_nn: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_nn */

/* START_OF_SYMBOL_DEFINITION nn */
/**
 * @summary nn
 * @constant
 */
export const nn: number = EDINotificationRequests_nn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nn */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_fn */
/**
 * @summary EDINotificationRequests_fn
 * @constant
 */
export const EDINotificationRequests_fn: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_fn */

/* START_OF_SYMBOL_DEFINITION fn */
/**
 * @summary fn
 * @constant
 */
export const fn: number = EDINotificationRequests_fn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fn */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequests */
let _cached_decoder_for_EDINotificationRequests: $.ASN1Decoder<EDINotificationRequests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationRequests */
/**
 * @summary Decodes an ASN.1 element into a(n) EDINotificationRequests
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINotificationRequests} The decoded data structure.
 */
export function _decode_EDINotificationRequests(el: _Element) {
    if (!_cached_decoder_for_EDINotificationRequests) {
        _cached_decoder_for_EDINotificationRequests = $._decodeBitString;
    }
    return _cached_decoder_for_EDINotificationRequests(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequests */
let _cached_encoder_for_EDINotificationRequests: $.ASN1Encoder<EDINotificationRequests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationRequests */
/**
 * @summary Encodes a(n) EDINotificationRequests into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINotificationRequests, encoded as an ASN.1 Element.
 */
export function _encode_EDINotificationRequests(
    value: EDINotificationRequests,
    elGetter: $.ASN1Encoder<EDINotificationRequests>
) {
    if (!_cached_encoder_for_EDINotificationRequests) {
        _cached_encoder_for_EDINotificationRequests = $._encodeBitString;
    }
    return _cached_encoder_for_EDINotificationRequests(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationRequests */

/* eslint-enable */
