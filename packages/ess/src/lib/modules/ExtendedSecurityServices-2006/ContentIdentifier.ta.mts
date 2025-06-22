/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ContentIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIdentifier  ::=  OCTET STRING
 * ```
 */
export type ContentIdentifier = OCTET_STRING; // OctetStringType




export const _decode_ContentIdentifier = $._decodeOctetString;




export const _encode_ContentIdentifier = $._encodeOctetString;


/* eslint-enable */
