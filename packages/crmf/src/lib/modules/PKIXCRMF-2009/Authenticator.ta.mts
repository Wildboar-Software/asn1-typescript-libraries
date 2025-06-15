/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Authenticator */
/**
 * @summary Authenticator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authenticator  ::=  UTF8String
 * ```
 */
export type Authenticator = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Authenticator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Authenticator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Authenticator */

/* START_OF_SYMBOL_DEFINITION _decode_Authenticator */
export const _decode_Authenticator = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_Authenticator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Authenticator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Authenticator */

/* START_OF_SYMBOL_DEFINITION _encode_Authenticator */
export const _encode_Authenticator = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_Authenticator */

/* eslint-enable */
