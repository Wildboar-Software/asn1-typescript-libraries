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

/* START_OF_SYMBOL_DEFINITION _enum_for_DialogueMode */
/**
 * @summary DialogueMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```@enum {number}
 */
export enum _enum_for_DialogueMode {
    structured = 1,
    unstructured = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DialogueMode */

/* START_OF_SYMBOL_DEFINITION DialogueMode */
/**
 * @summary DialogueMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```@enum {number}
 */
export type DialogueMode = _enum_for_DialogueMode;
/* END_OF_SYMBOL_DEFINITION DialogueMode */

/* START_OF_SYMBOL_DEFINITION DialogueMode */
/**
 * @summary DialogueMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```@enum {number}
 */
export const DialogueMode = _enum_for_DialogueMode;
/* END_OF_SYMBOL_DEFINITION DialogueMode */

/* START_OF_SYMBOL_DEFINITION DialogueMode_structured */
/**
 * @summary DialogueMode_structured
 * @constant
 * @type {number}
 */
export const DialogueMode_structured: DialogueMode =
    DialogueMode.structured; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DialogueMode_structured */

/* START_OF_SYMBOL_DEFINITION structured */
/**
 * @summary structured
 * @constant
 * @type {number}
 */
export const structured: DialogueMode =
    DialogueMode.structured; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION structured */

/* START_OF_SYMBOL_DEFINITION DialogueMode_unstructured */
/**
 * @summary DialogueMode_unstructured
 * @constant
 * @type {number}
 */
export const DialogueMode_unstructured: DialogueMode =
    DialogueMode.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DialogueMode_unstructured */

/* START_OF_SYMBOL_DEFINITION unstructured */
/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export const unstructured: DialogueMode =
    DialogueMode.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unstructured */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DialogueMode */
let _cached_decoder_for_DialogueMode: $.ASN1Decoder<DialogueMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _decode_DialogueMode */
/**
 * @summary Decodes an ASN.1 element into a(n) DialogueMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DialogueMode} The decoded data structure.
 */
export function _decode_DialogueMode(el: _Element) {
    if (!_cached_decoder_for_DialogueMode) {
        _cached_decoder_for_DialogueMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_DialogueMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DialogueMode */
let _cached_encoder_for_DialogueMode: $.ASN1Encoder<DialogueMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _encode_DialogueMode */
/**
 * @summary Encodes a(n) DialogueMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialogueMode, encoded as an ASN.1 Element.
 */
export function _encode_DialogueMode(
    value: DialogueMode,
    elGetter: $.ASN1Encoder<DialogueMode>
) {
    if (!_cached_encoder_for_DialogueMode) {
        _cached_encoder_for_DialogueMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_DialogueMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DialogueMode */

/* eslint-enable */
