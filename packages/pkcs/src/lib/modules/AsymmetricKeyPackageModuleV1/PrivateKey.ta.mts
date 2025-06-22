/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKey  ::=  OCTET STRING
 * ```
 */
export type PrivateKey = OCTET_STRING; // OctetStringType




export const _decode_PrivateKey = $._decodeOctetString;




export const _encode_PrivateKey = $._encodeOctetString;


/* eslint-enable */
