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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubscriptionProblem */
/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export enum _enum_for_SubscriptionProblem {
    ipms_eos_not_subscribed = 0,
    mts_eos_not_subscribed = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION SubscriptionProblem */
/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export type SubscriptionProblem = _enum_for_SubscriptionProblem;
/* END_OF_SYMBOL_DEFINITION SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION SubscriptionProblem */
/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export const SubscriptionProblem = _enum_for_SubscriptionProblem;
/* END_OF_SYMBOL_DEFINITION SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION SubscriptionProblem_ipms_eos_not_subscribed */
/**
 * @summary SubscriptionProblem_ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_ipms_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.ipms_eos_not_subscribed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubscriptionProblem_ipms_eos_not_subscribed */

/* START_OF_SYMBOL_DEFINITION ipms_eos_not_subscribed */
/**
 * @summary ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const ipms_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.ipms_eos_not_subscribed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipms_eos_not_subscribed */

/* START_OF_SYMBOL_DEFINITION SubscriptionProblem_mts_eos_not_subscribed */
/**
 * @summary SubscriptionProblem_mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_mts_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.mts_eos_not_subscribed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubscriptionProblem_mts_eos_not_subscribed */

/* START_OF_SYMBOL_DEFINITION mts_eos_not_subscribed */
/**
 * @summary mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const mts_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.mts_eos_not_subscribed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_eos_not_subscribed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriptionProblem */
let _cached_decoder_for_SubscriptionProblem: $.ASN1Decoder<SubscriptionProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SubscriptionProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscriptionProblem} The decoded data structure.
 */
export function _decode_SubscriptionProblem(el: _Element) {
    if (!_cached_decoder_for_SubscriptionProblem) {
        _cached_decoder_for_SubscriptionProblem = $._decodeEnumerated;
    }
    return _cached_decoder_for_SubscriptionProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriptionProblem */
let _cached_encoder_for_SubscriptionProblem: $.ASN1Encoder<SubscriptionProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriptionProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SubscriptionProblem */
/**
 * @summary Encodes a(n) SubscriptionProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionProblem, encoded as an ASN.1 Element.
 */
export function _encode_SubscriptionProblem(
    value: SubscriptionProblem,
    elGetter: $.ASN1Encoder<SubscriptionProblem>
) {
    if (!_cached_encoder_for_SubscriptionProblem) {
        _cached_encoder_for_SubscriptionProblem = $._encodeEnumerated;
    }
    return _cached_encoder_for_SubscriptionProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscriptionProblem */

/* eslint-enable */
