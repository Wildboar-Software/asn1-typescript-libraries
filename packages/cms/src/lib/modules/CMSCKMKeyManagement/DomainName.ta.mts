/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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




export const _decode_DomainName = $._decodePrintableString;




export const _encode_DomainName = $._encodePrintableString;


/* eslint-enable */
