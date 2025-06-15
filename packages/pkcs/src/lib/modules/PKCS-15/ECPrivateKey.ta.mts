/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ECPrivateKey */
/**
 * @summary ECPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPrivateKey  ::=  INTEGER
 * ```
 */
export type ECPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */
export const _decode_ECPrivateKey = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */
export const _encode_ECPrivateKey = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */

/* eslint-enable */
