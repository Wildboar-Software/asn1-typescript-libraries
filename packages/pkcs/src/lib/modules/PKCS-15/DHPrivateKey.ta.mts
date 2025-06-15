/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DHPrivateKey */
/**
 * @summary DHPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPrivateKey  ::=  INTEGER
 * ```
 */
export type DHPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_DHPrivateKey */
export const _decode_DHPrivateKey = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_DHPrivateKey */
export const _encode_DHPrivateKey = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DHPrivateKey */

/* eslint-enable */
