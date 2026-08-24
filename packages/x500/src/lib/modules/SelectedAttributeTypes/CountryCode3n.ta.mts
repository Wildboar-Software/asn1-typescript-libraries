/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CountryCode3n
 * @description
 *
 * ISO 3166-1 numeric-3; SIZE 3 digits.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3n  ::=  NumericString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 numeric-3 codes only -- })
 * ```
 */
export type CountryCode3n = NumericString; // NumericString


export const _decode_CountryCode3n = $._decodeNumericString;


export const _encode_CountryCode3n = $._encodeNumericString;


/* eslint-enable */
