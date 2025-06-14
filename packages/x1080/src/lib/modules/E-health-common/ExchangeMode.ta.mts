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

/* START_OF_SYMBOL_DEFINITION _enum_for_ExchangeMode */
export enum _enum_for_ExchangeMode {
    sync = 0,
    async = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ExchangeMode */

/* START_OF_SYMBOL_DEFINITION ExchangeMode */
/**
 * @summary ExchangeMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExchangeMode  ::=  ENUMERATED {
 *   sync     (0),
 *   async    (1),
 *   ... }
 * ```@enum {number}
 */
export type ExchangeMode = _enum_for_ExchangeMode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ExchangeMode */

/* START_OF_SYMBOL_DEFINITION ExchangeMode_sync */
/**
 * @summary ExchangeMode_sync
 * @constant
 * @type {number}
 */
export const ExchangeMode_sync: ExchangeMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ExchangeMode_sync */

/* START_OF_SYMBOL_DEFINITION sync */
/**
 * @summary sync
 * @constant
 * @type {number}
 */
export const sync: ExchangeMode = ExchangeMode_sync; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sync */

/* START_OF_SYMBOL_DEFINITION ExchangeMode_async */
/**
 * @summary ExchangeMode_async
 * @constant
 * @type {number}
 */
export const ExchangeMode_async: ExchangeMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ExchangeMode_async */

/* START_OF_SYMBOL_DEFINITION async */
/**
 * @summary async
 * @constant
 * @type {number}
 */
export const async: ExchangeMode = ExchangeMode_async; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION async */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExchangeMode */
let _cached_decoder_for_ExchangeMode: $.ASN1Decoder<ExchangeMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExchangeMode */

/* START_OF_SYMBOL_DEFINITION _decode_ExchangeMode */
/**
 * @summary Decodes an ASN.1 element into a(n) ExchangeMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExchangeMode} The decoded data structure.
 */
export function _decode_ExchangeMode(el: _Element) {
    if (!_cached_decoder_for_ExchangeMode) {
        _cached_decoder_for_ExchangeMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_ExchangeMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExchangeMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExchangeMode */
let _cached_encoder_for_ExchangeMode: $.ASN1Encoder<ExchangeMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExchangeMode */

/* START_OF_SYMBOL_DEFINITION _encode_ExchangeMode */
/**
 * @summary Encodes a(n) ExchangeMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExchangeMode, encoded as an ASN.1 Element.
 */
export function _encode_ExchangeMode(
    value: ExchangeMode,
    elGetter: $.ASN1Encoder<ExchangeMode>
) {
    if (!_cached_encoder_for_ExchangeMode) {
        _cached_encoder_for_ExchangeMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_ExchangeMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExchangeMode */

/* eslint-enable */
