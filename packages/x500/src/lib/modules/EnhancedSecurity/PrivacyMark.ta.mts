/* eslint-disable */
import { ASN1Element as _Element, type PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivacyMark
 * @description
 *
 * PrintableString SIZE (1..MAX): empty is invalid. Human-readable privacy
 * marking on a {@link SecurityLabel}.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type PrivacyMark = PrintableString; // PrintableString


export const _decode_PrivacyMark: $.ASN1Decoder<string> = $._decodePrintableString;


export const _encode_PrivacyMark: $.ASN1Encoder<string> = $._encodePrintableString;


/* eslint-enable */
