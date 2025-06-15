/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AES_InitializationVector */
/**
 * @summary AES_InitializationVector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AES-InitializationVector  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export type AES_InitializationVector = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AES_InitializationVector */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _decode_AES_InitializationVector */
export const _decode_AES_InitializationVector = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AES_InitializationVector */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _encode_AES_InitializationVector */
export const _encode_AES_InitializationVector = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_AES_InitializationVector */

/* eslint-enable */
