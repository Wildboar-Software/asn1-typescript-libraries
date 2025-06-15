/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Encipherment */
/**
 * @summary Encipherment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Encipherment  ::=  INTEGER {encrypted(1), clear(2)}
 * ```
 */
export type Encipherment = INTEGER;
/* END_OF_SYMBOL_DEFINITION Encipherment */

/* START_OF_SYMBOL_DEFINITION Encipherment_encrypted */
/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const Encipherment_encrypted: Encipherment = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Encipherment_encrypted */

/* START_OF_SYMBOL_DEFINITION encrypted */
/**
 * @summary Encipherment_encrypted
 * @constant
 * @type {number}
 */
export const encrypted: Encipherment = Encipherment_encrypted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION encrypted */

/* START_OF_SYMBOL_DEFINITION Encipherment_clear */
/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const Encipherment_clear: Encipherment = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Encipherment_clear */

/* START_OF_SYMBOL_DEFINITION clear */
/**
 * @summary Encipherment_clear
 * @constant
 * @type {number}
 */
export const clear: Encipherment = Encipherment_clear; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clear */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Encipherment */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Encipherment */

/* START_OF_SYMBOL_DEFINITION _decode_Encipherment */
export const _decode_Encipherment = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Encipherment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Encipherment */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Encipherment */

/* START_OF_SYMBOL_DEFINITION _encode_Encipherment */
export const _encode_Encipherment = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Encipherment */

/* eslint-enable */
