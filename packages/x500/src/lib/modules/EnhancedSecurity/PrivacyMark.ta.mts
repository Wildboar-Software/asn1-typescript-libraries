/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
