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

/* START_OF_SYMBOL_DEFINITION CannotVerifyOrDenyAtThisTime */
/**
 * @summary CannotVerifyOrDenyAtThisTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CannotVerifyOrDenyAtThisTime  ::=  NULL
 * ```
 */
export type CannotVerifyOrDenyAtThisTime = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION CannotVerifyOrDenyAtThisTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CannotVerifyOrDenyAtThisTime */
let _cached_decoder_for_CannotVerifyOrDenyAtThisTime: $.ASN1Decoder<CannotVerifyOrDenyAtThisTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CannotVerifyOrDenyAtThisTime */

/* START_OF_SYMBOL_DEFINITION _decode_CannotVerifyOrDenyAtThisTime */
/**
 * @summary Decodes an ASN.1 element into a(n) CannotVerifyOrDenyAtThisTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CannotVerifyOrDenyAtThisTime} The decoded data structure.
 */
export function _decode_CannotVerifyOrDenyAtThisTime(el: _Element) {
    if (!_cached_decoder_for_CannotVerifyOrDenyAtThisTime) {
        _cached_decoder_for_CannotVerifyOrDenyAtThisTime = $._decodeNull;
    }
    return _cached_decoder_for_CannotVerifyOrDenyAtThisTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CannotVerifyOrDenyAtThisTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CannotVerifyOrDenyAtThisTime */
let _cached_encoder_for_CannotVerifyOrDenyAtThisTime: $.ASN1Encoder<CannotVerifyOrDenyAtThisTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CannotVerifyOrDenyAtThisTime */

/* START_OF_SYMBOL_DEFINITION _encode_CannotVerifyOrDenyAtThisTime */
/**
 * @summary Encodes a(n) CannotVerifyOrDenyAtThisTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CannotVerifyOrDenyAtThisTime, encoded as an ASN.1 Element.
 */
export function _encode_CannotVerifyOrDenyAtThisTime(
    value: CannotVerifyOrDenyAtThisTime,
    elGetter: $.ASN1Encoder<CannotVerifyOrDenyAtThisTime>
) {
    if (!_cached_encoder_for_CannotVerifyOrDenyAtThisTime) {
        _cached_encoder_for_CannotVerifyOrDenyAtThisTime = $._encodeNull;
    }
    return _cached_encoder_for_CannotVerifyOrDenyAtThisTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CannotVerifyOrDenyAtThisTime */

/* eslint-enable */
