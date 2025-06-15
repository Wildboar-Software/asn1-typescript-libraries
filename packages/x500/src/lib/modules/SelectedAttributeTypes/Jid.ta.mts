/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Jid */
/**
 * @summary Jid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Jid  ::=  UTF8String (CONSTRAINED BY { / * Conforms to the format of a jabber identifier. * / })
 * ```
 */
export type Jid = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Jid */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Jid */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Jid */

/* START_OF_SYMBOL_DEFINITION _decode_Jid */
export const _decode_Jid = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_Jid */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Jid */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Jid */

/* START_OF_SYMBOL_DEFINITION _encode_Jid */
export const _encode_Jid = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_Jid */

/* eslint-enable */
