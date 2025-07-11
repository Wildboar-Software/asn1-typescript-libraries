/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivacyMark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type PrivacyMark = PrintableString; // PrintableString


export const _decode_PrivacyMark = $._decodePrintableString;


export const _encode_PrivacyMark = $._encodePrintableString;


/* eslint-enable */
