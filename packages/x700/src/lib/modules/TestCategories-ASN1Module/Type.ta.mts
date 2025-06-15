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

/* START_OF_SYMBOL_DEFINITION Type */
/**
 * @summary Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type  ::=  INTEGER {connectionOriented(0), connectionless(1)}
 * ```
 */
export type Type = INTEGER;
/* END_OF_SYMBOL_DEFINITION Type */

/* START_OF_SYMBOL_DEFINITION Type_connectionOriented */
/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const Type_connectionOriented: Type = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_connectionOriented */

/* START_OF_SYMBOL_DEFINITION connectionOriented */
/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const connectionOriented: Type = Type_connectionOriented; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION connectionOriented */

/* START_OF_SYMBOL_DEFINITION Type_connectionless */
/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const Type_connectionless: Type = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_connectionless */

/* START_OF_SYMBOL_DEFINITION connectionless */
/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const connectionless: Type = Type_connectionless; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION connectionless */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Type */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Type */

/* START_OF_SYMBOL_DEFINITION _decode_Type */
export const _decode_Type = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Type */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Type */

/* START_OF_SYMBOL_DEFINITION _encode_Type */
export const _encode_Type = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Type */

/* eslint-enable */
