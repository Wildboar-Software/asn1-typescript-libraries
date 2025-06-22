/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  PrintableString(SIZE (2)) (CONSTRAINED BY { -- ISO 3166 alpha-2 codes only -- })
 * ```
 */
export type CountryName = PrintableString; // PrintableString


export const _decode_CountryName = $._decodePrintableString;


export const _encode_CountryName = $._encodePrintableString;


/* eslint-enable */
