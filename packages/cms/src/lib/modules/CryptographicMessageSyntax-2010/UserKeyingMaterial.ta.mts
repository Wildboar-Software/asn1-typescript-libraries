/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION UserKeyingMaterial */
/**
 * @summary UserKeyingMaterial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserKeyingMaterial */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _decode_UserKeyingMaterial */
export const _decode_UserKeyingMaterial = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserKeyingMaterial */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _encode_UserKeyingMaterial */
export const _encode_UserKeyingMaterial = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_UserKeyingMaterial */

/* eslint-enable */
