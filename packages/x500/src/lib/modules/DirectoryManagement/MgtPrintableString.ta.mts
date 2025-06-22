/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtPrintableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtPrintableString  ::=  PrintableString
 * ```
 */
export type MgtPrintableString = PrintableString; // PrintableString


export const _decode_MgtPrintableString = $._decodePrintableString;


export const _encode_MgtPrintableString = $._encodePrintableString;


/* eslint-enable */
