/* eslint-disable */
import { ASN1Element as _Element, type PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CountryName
 * @description
 *
 * ISO 3166-1 alpha-2; SIZE 2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  PrintableString(SIZE (2)) (CONSTRAINED BY { -- ISO 3166 alpha-2 codes only -- })
 * ```
 */
export type CountryName = PrintableString; // PrintableString


export const _decode_CountryName: $.ASN1Decoder<string> = $._decodePrintableString;


export const _encode_CountryName: $.ASN1Encoder<string> = $._encodePrintableString;


/* eslint-enable */
