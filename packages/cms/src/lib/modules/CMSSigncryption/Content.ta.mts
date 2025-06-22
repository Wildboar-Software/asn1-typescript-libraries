/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type Content = OCTET_STRING; // OctetStringType




export const _decode_Content = $._decodeOctetString;




export const _encode_Content = $._encodeOctetString;


/* eslint-enable */
