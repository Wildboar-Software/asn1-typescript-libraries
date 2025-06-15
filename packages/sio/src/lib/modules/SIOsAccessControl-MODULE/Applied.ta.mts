/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Applied */
/**
 * @summary Applied
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Applied  ::=  INTEGER {encrypt(0), decrypt(1), both(2)}(encrypt | decrypt | both)
 * ```
 */
export type Applied = INTEGER;
/* END_OF_SYMBOL_DEFINITION Applied */

/* START_OF_SYMBOL_DEFINITION Applied_encrypt */
/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const Applied_encrypt: Applied = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_encrypt */

/* START_OF_SYMBOL_DEFINITION encrypt */
/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const encrypt: Applied = Applied_encrypt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION encrypt */

/* START_OF_SYMBOL_DEFINITION Applied_decrypt */
/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const Applied_decrypt: Applied = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_decrypt */

/* START_OF_SYMBOL_DEFINITION decrypt */
/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const decrypt: Applied = Applied_decrypt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decrypt */

/* START_OF_SYMBOL_DEFINITION Applied_both */
/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const Applied_both: Applied = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Applied_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const both: Applied = Applied_both; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Applied */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Applied */

/* START_OF_SYMBOL_DEFINITION _decode_Applied */
export const _decode_Applied = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Applied */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Applied */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Applied */

/* START_OF_SYMBOL_DEFINITION _encode_Applied */
export const _encode_Applied = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Applied */

/* eslint-enable */
