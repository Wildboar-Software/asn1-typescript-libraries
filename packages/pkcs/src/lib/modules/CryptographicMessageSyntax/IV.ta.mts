/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION IV */
/**
 * @summary IV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IV  ::=  OCTET STRING
 * ```
 */
export type IV = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION IV */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IV */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IV */

/* START_OF_SYMBOL_DEFINITION _decode_IV */
export const _decode_IV = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_IV */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IV */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IV */

/* START_OF_SYMBOL_DEFINITION _encode_IV */
export const _encode_IV = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_IV */

/* eslint-enable */
