/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReturnMode */
export enum _enum_for_ReturnMode {
    continuous = 0,
    batch = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION ReturnMode */
/**
 * @summary ReturnMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnMode  ::=  ENUMERATED {
 *   continuous,
 *   batch,
 *   ... }
 * ```@enum {number}
 */
export type ReturnMode = _enum_for_ReturnMode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ReturnMode */

/* START_OF_SYMBOL_DEFINITION ReturnMode_continuous */
/**
 * @summary ReturnMode_continuous
 * @constant
 * @type {number}
 */
export const ReturnMode_continuous: ReturnMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnMode_continuous */

/* START_OF_SYMBOL_DEFINITION continuous */
/**
 * @summary continuous
 * @constant
 * @type {number}
 */
export const continuous: ReturnMode = ReturnMode_continuous; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION continuous */

/* START_OF_SYMBOL_DEFINITION ReturnMode_batch */
/**
 * @summary ReturnMode_batch
 * @constant
 * @type {number}
 */
export const ReturnMode_batch: ReturnMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnMode_batch */

/* START_OF_SYMBOL_DEFINITION batch */
/**
 * @summary batch
 * @constant
 * @type {number}
 */
export const batch: ReturnMode = ReturnMode_batch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION batch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnMode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnMode */
export const _decode_ReturnMode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnMode */
export const _encode_ReturnMode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ReturnMode */

/* eslint-enable */
