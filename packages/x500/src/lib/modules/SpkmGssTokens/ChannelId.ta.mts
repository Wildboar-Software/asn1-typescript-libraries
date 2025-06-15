/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ChannelId */
/**
 * @summary ChannelId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChannelId  ::=  OCTET STRING
 * ```
 */
export type ChannelId = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelId */

/* START_OF_SYMBOL_DEFINITION _decode_ChannelId */
export const _decode_ChannelId = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelId */

/* START_OF_SYMBOL_DEFINITION _encode_ChannelId */
export const _encode_ChannelId = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ChannelId */

/* eslint-enable */
