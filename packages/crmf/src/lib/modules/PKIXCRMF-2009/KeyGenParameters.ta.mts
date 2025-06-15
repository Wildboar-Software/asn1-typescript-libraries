/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary KeyGenParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyGenParameters  ::=  OCTET STRING
 * ```
 */
export type KeyGenParameters = OCTET_STRING; // OctetStringType




export const _decode_KeyGenParameters = $._decodeOctetString;




export const _encode_KeyGenParameters = $._encodeOctetString;


/* eslint-enable */
