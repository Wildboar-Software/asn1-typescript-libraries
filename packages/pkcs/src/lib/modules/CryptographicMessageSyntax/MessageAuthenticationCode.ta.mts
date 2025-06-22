/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MessageAuthenticationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export type MessageAuthenticationCode = OCTET_STRING; // OctetStringType




export const _decode_MessageAuthenticationCode = $._decodeOctetString;




export const _encode_MessageAuthenticationCode = $._encodeOctetString;


/* eslint-enable */
