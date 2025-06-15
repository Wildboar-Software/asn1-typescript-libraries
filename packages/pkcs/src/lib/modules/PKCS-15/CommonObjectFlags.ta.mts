/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags */
/**
 * @summary CommonObjectFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonObjectFlags  ::=  BIT STRING { private (0), modifiable (1) }
 * ```
 */
export type CommonObjectFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags_private_ */
/**
 * @summary CommonObjectFlags_private_
 * @constant
 */
export const CommonObjectFlags_private_: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 */
export const private_: number = CommonObjectFlags_private_; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags_modifiable */
/**
 * @summary CommonObjectFlags_modifiable
 * @constant
 */
export const CommonObjectFlags_modifiable: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags_modifiable */

/* START_OF_SYMBOL_DEFINITION modifiable */
/**
 * @summary modifiable
 * @constant
 */
export const modifiable: number = CommonObjectFlags_modifiable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION modifiable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectFlags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _decode_CommonObjectFlags */
export const _decode_CommonObjectFlags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectFlags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _encode_CommonObjectFlags */
export const _encode_CommonObjectFlags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_CommonObjectFlags */

/* eslint-enable */
