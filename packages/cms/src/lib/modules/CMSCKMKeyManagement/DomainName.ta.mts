/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
