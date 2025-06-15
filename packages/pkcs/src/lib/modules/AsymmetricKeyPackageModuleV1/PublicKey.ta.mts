/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PublicKey */
/**
 * @summary PublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export type PublicKey = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKey */
export const _decode_PublicKey = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_PublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKey */
export const _encode_PublicKey = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_PublicKey */

/* eslint-enable */
