/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DSAPublicKey */
/**
 * @summary DSAPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPublicKey  ::=  INTEGER
 * ```
 */
export type DSAPublicKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_DSAPublicKey */
export const _decode_DSAPublicKey = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_DSAPublicKey */
export const _encode_DSAPublicKey = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DSAPublicKey */

/* eslint-enable */
