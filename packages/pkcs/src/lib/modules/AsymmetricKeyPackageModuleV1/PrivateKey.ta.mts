/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PrivateKey */
/**
 * @summary PrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKey  ::=  OCTET STRING
 * ```
 */
export type PrivateKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKey */
export const _decode_PrivateKey = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKey */
export const _encode_PrivateKey = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKey */

/* eslint-enable */
