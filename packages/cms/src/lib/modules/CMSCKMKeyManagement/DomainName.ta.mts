/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DomainName */
/**
 * @summary DomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainName  ::=  PrintableString (SIZE(1..MAX))
 * ```
 */
export type DomainName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _decode_DomainName */
export const _decode_DomainName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _encode_DomainName */
export const _encode_DomainName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_DomainName */

/* eslint-enable */
