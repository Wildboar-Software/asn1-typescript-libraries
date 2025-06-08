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

/* START_OF_SYMBOL_DEFINITION _enum_for_X25PLEMode */
/**
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```@enum {number}
 */
export enum _enum_for_X25PLEMode {
    dTE = 0,
    dCE = 1,
    dTEasDCE = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_X25PLEMode */

/* START_OF_SYMBOL_DEFINITION X25PLEMode */
/**
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```@enum {number}
 */
export type X25PLEMode = _enum_for_X25PLEMode;
/* END_OF_SYMBOL_DEFINITION X25PLEMode */

/* START_OF_SYMBOL_DEFINITION X25PLEMode */
/**
 * @summary X25PLEMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```@enum {number}
 */
export const X25PLEMode = _enum_for_X25PLEMode;
/* END_OF_SYMBOL_DEFINITION X25PLEMode */

/* START_OF_SYMBOL_DEFINITION X25PLEMode_dTE */
/**
 * @summary X25PLEMode_dTE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTE: X25PLEMode =
    X25PLEMode.dTE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION X25PLEMode_dTE */

/* START_OF_SYMBOL_DEFINITION dTE */
/**
 * @summary dTE
 * @constant
 * @type {number}
 */
export const dTE: X25PLEMode =
    X25PLEMode.dTE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dTE */

/* START_OF_SYMBOL_DEFINITION X25PLEMode_dCE */
/**
 * @summary X25PLEMode_dCE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dCE: X25PLEMode =
    X25PLEMode.dCE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION X25PLEMode_dCE */

/* START_OF_SYMBOL_DEFINITION dCE */
/**
 * @summary dCE
 * @constant
 * @type {number}
 */
export const dCE: X25PLEMode =
    X25PLEMode.dCE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dCE */

/* START_OF_SYMBOL_DEFINITION X25PLEMode_dTEasDCE */
/**
 * @summary X25PLEMode_dTEasDCE
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION X25PLEMode_dTEasDCE */

/* START_OF_SYMBOL_DEFINITION dTEasDCE */
/**
 * @summary dTEasDCE
 * @constant
 * @type {number}
 */
export const dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dTEasDCE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X25PLEMode */
let _cached_decoder_for_X25PLEMode: $.ASN1Decoder<X25PLEMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X25PLEMode */

/* START_OF_SYMBOL_DEFINITION _decode_X25PLEMode */
/**
 * @summary Decodes an ASN.1 element into a(n) X25PLEMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X25PLEMode} The decoded data structure.
 */
export function _decode_X25PLEMode(el: _Element) {
    if (!_cached_decoder_for_X25PLEMode) {
        _cached_decoder_for_X25PLEMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_X25PLEMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X25PLEMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X25PLEMode */
let _cached_encoder_for_X25PLEMode: $.ASN1Encoder<X25PLEMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X25PLEMode */

/* START_OF_SYMBOL_DEFINITION _encode_X25PLEMode */
/**
 * @summary Encodes a(n) X25PLEMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X25PLEMode, encoded as an ASN.1 Element.
 */
export function _encode_X25PLEMode(
    value: X25PLEMode,
    elGetter: $.ASN1Encoder<X25PLEMode>
) {
    if (!_cached_encoder_for_X25PLEMode) {
        _cached_encoder_for_X25PLEMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_X25PLEMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X25PLEMode */

/* eslint-enable */
