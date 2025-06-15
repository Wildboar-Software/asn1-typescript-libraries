/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyGenParameters */
/**
 * @summary KeyGenParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyGenParameters  ::=  OCTET STRING
 * ```
 */
export type KeyGenParameters = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KeyGenParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyGenParameters */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyGenParameters */

/* START_OF_SYMBOL_DEFINITION _decode_KeyGenParameters */
export const _decode_KeyGenParameters = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_KeyGenParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyGenParameters */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyGenParameters */

/* START_OF_SYMBOL_DEFINITION _encode_KeyGenParameters */
export const _encode_KeyGenParameters = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_KeyGenParameters */

/* eslint-enable */
