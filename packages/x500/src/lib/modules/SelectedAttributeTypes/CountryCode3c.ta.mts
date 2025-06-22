/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CountryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3c  ::=  PrintableString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 alpha-3 codes only -- })
 * ```
 */
export type CountryCode3c = PrintableString; // PrintableString


export const _decode_CountryCode3c = $._decodePrintableString;


export const _encode_CountryCode3c = $._encodePrintableString;


/* eslint-enable */
