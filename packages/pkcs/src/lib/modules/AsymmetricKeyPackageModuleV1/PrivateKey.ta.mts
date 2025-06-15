/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
