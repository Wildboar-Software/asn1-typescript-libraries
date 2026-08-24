/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DestinationIndicator
 * @description
 *
 * Uppercase letters only (F.1/F.31 telegram destination). SIZE 1..MAX.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type DestinationIndicator = PrintableString; // PrintableString


export const _decode_DestinationIndicator = $._decodePrintableString;


export const _encode_DestinationIndicator = $._encodePrintableString;


/* eslint-enable */
