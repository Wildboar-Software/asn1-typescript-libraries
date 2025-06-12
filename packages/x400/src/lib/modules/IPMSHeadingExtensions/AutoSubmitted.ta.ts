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

/* START_OF_SYMBOL_DEFINITION _enum_for_AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export enum _enum_for_AutoSubmitted {
    not_auto_submitted = 0,
    auto_generated = 1,
    auto_replied = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export type AutoSubmitted = _enum_for_AutoSubmitted;
/* END_OF_SYMBOL_DEFINITION AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted */
/**
 * @summary AutoSubmitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSubmitted  ::=  ENUMERATED {
 *   not-auto-submitted(0), auto-generated(1), auto-replied(2)}
 * ```@enum {number}
 */
export const AutoSubmitted = _enum_for_AutoSubmitted;
/* END_OF_SYMBOL_DEFINITION AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_not_auto_submitted */
/**
 * @summary AutoSubmitted_not_auto_submitted
 * @constant
 * @type {number}
 */
export const AutoSubmitted_not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_not_auto_submitted */

/* START_OF_SYMBOL_DEFINITION not_auto_submitted */
/**
 * @summary not_auto_submitted
 * @constant
 * @type {number}
 */
export const not_auto_submitted: AutoSubmitted =
    AutoSubmitted.not_auto_submitted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION not_auto_submitted */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_auto_generated */
/**
 * @summary AutoSubmitted_auto_generated
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_auto_generated */

/* START_OF_SYMBOL_DEFINITION auto_generated */
/**
 * @summary auto_generated
 * @constant
 * @type {number}
 */
export const auto_generated: AutoSubmitted =
    AutoSubmitted.auto_generated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_generated */

/* START_OF_SYMBOL_DEFINITION AutoSubmitted_auto_replied */
/**
 * @summary AutoSubmitted_auto_replied
 * @constant
 * @type {number}
 */
export const AutoSubmitted_auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSubmitted_auto_replied */

/* START_OF_SYMBOL_DEFINITION auto_replied */
/**
 * @summary auto_replied
 * @constant
 * @type {number}
 */
export const auto_replied: AutoSubmitted =
    AutoSubmitted.auto_replied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_replied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSubmitted */
let _cached_decoder_for_AutoSubmitted: $.ASN1Decoder<AutoSubmitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _decode_AutoSubmitted */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoSubmitted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoSubmitted} The decoded data structure.
 */
export function _decode_AutoSubmitted(el: _Element) {
    if (!_cached_decoder_for_AutoSubmitted) {
        _cached_decoder_for_AutoSubmitted = $._decodeEnumerated;
    }
    return _cached_decoder_for_AutoSubmitted(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSubmitted */
let _cached_encoder_for_AutoSubmitted: $.ASN1Encoder<AutoSubmitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSubmitted */

/* START_OF_SYMBOL_DEFINITION _encode_AutoSubmitted */
/**
 * @summary Encodes a(n) AutoSubmitted into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoSubmitted, encoded as an ASN.1 Element.
 */
export function _encode_AutoSubmitted(
    value: AutoSubmitted,
    elGetter: $.ASN1Encoder<AutoSubmitted>
) {
    if (!_cached_encoder_for_AutoSubmitted) {
        _cached_encoder_for_AutoSubmitted = $._encodeEnumerated;
    }
    return _cached_encoder_for_AutoSubmitted(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoSubmitted */

/* eslint-enable */
