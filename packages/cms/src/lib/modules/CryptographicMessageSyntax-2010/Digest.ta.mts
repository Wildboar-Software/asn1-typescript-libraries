/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Digest */
/**
 * @summary Digest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digest  ::=  OCTET STRING
 * ```
 */
export type Digest = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Digest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _decode_Digest */
export const _decode_Digest = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Digest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _encode_Digest */
export const _encode_Digest = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Digest */

/* eslint-enable */
