/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION RandomNonce */
/**
 * @summary RandomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RandomNonce  ::=  OCTET STRING (SIZE(4..MAX))
 * ```
 */
export type RandomNonce = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RandomNonce */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNonce */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _decode_RandomNonce */
export const _decode_RandomNonce = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNonce */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _encode_RandomNonce */
export const _encode_RandomNonce = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_RandomNonce */

/* eslint-enable */
