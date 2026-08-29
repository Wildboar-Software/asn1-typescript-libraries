/* eslint-disable */
import { UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary URI
 * @description
 *
 * RFC 3986 URI used to point at a stored BIT, PKC, or ACBio
 * report rather than embedding it. Used in a BDC and a BPC.
 * ITU-T Rec. X.1089 (05/2008)
 * [§8.3](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * §10.5, Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=
 *   UTF8String
 *     (CONSTRAINED BY {
 *        -- shall be a valid URI as defined in IETF RFC 3986 --})
 * ```
 */
export type URI = UTF8String; // UTF8String
export const _decode_URI = $._decodeUTF8String;
export const _encode_URI = $._encodeUTF8String;

/* eslint-enable */
