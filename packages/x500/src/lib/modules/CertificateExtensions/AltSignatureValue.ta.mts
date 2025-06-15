/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AltSignatureValue */
/**
 * @summary AltSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export type AltSignatureValue = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureValue */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _decode_AltSignatureValue */
export const _decode_AltSignatureValue = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureValue */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _encode_AltSignatureValue */
export const _encode_AltSignatureValue = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AltSignatureValue */

/* eslint-enable */
