/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DHPublicKey */
/**
 * @summary DHPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicKey  ::=  INTEGER
 * ```
 */
export type DHPublicKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_DHPublicKey */
export const _decode_DHPublicKey = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_DHPublicKey */
export const _encode_DHPublicKey = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DHPublicKey */

/* eslint-enable */
