/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DSAPrivateKey */
/**
 * @summary DSAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPrivateKey  ::=  INTEGER
 * ```
 */
export type DSAPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_DSAPrivateKey */
export const _decode_DSAPrivateKey = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_DSAPrivateKey */
export const _encode_DSAPrivateKey = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DSAPrivateKey */

/* eslint-enable */
