/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary HMAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HMAC  ::=  OCTET STRING
 * ```
 */
export type HMAC = OCTET_STRING; // OctetStringType




export const _decode_HMAC = $._decodeOctetString;




export const _encode_HMAC = $._encodeOctetString;


/* eslint-enable */
