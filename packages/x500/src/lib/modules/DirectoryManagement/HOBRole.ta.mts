/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION HOBRole */
/**
 * @summary HOBRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HOBRole  ::=  INTEGER {superior(0), subordinate(1)}
 * ```
 */
export type HOBRole = INTEGER;
/* END_OF_SYMBOL_DEFINITION HOBRole */

/* START_OF_SYMBOL_DEFINITION HOBRole_superior */
/**
 * @summary HOBRole_superior
 * @constant
 * @type {number}
 */
export const HOBRole_superior: HOBRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HOBRole_superior */

/* START_OF_SYMBOL_DEFINITION superior */
/**
 * @summary HOBRole_superior
 * @constant
 * @type {number}
 */
export const superior: HOBRole = HOBRole_superior; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION superior */

/* START_OF_SYMBOL_DEFINITION HOBRole_subordinate */
/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const HOBRole_subordinate: HOBRole = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HOBRole_subordinate */

/* START_OF_SYMBOL_DEFINITION subordinate */
/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const subordinate: HOBRole = HOBRole_subordinate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subordinate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HOBRole */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HOBRole */

/* START_OF_SYMBOL_DEFINITION _decode_HOBRole */
export const _decode_HOBRole = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_HOBRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HOBRole */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HOBRole */

/* START_OF_SYMBOL_DEFINITION _encode_HOBRole */
export const _encode_HOBRole = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_HOBRole */

/* eslint-enable */
