/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyHash  ::=  OCTET STRING
 * ```
 */
export type KeyHash = OCTET_STRING; // OctetStringType




export const _decode_KeyHash = $._decodeOctetString;




export const _encode_KeyHash = $._encodeOctetString;


/* eslint-enable */
