/* eslint-disable */
import {
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _decode_DialogueMode */
export const _decode_DialogueMode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DialogueMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DialogueMode */

/* START_OF_SYMBOL_DEFINITION _encode_DialogueMode */
export const _encode_DialogueMode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DialogueMode */

/* eslint-enable */
