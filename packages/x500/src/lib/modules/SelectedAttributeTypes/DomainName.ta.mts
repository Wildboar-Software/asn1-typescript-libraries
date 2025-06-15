/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DomainName */
/**
 * @summary DomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainName  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of a domain name. -- })
 * ```
 */
export type DomainName = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _decode_DomainName */
export const _decode_DomainName = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _encode_DomainName */
export const _encode_DomainName = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_DomainName */

/* eslint-enable */
