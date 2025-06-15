/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyHash */
/**
 * @summary KeyHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyHash  ::=  OCTET STRING
 * ```
 */
export type KeyHash = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KeyHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyHash */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyHash */

/* START_OF_SYMBOL_DEFINITION _decode_KeyHash */
export const _decode_KeyHash = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_KeyHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyHash */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyHash */

/* START_OF_SYMBOL_DEFINITION _encode_KeyHash */
export const _encode_KeyHash = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_KeyHash */

/* eslint-enable */
