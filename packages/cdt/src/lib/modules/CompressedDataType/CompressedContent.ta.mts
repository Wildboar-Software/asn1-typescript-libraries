/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CompressedContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedContent  ::=  OCTET STRING
 * ```
 */
export
type CompressedContent = OCTET_STRING; // OctetStringType
export const _decode_CompressedContent = $._decodeOctetString;
export const _encode_CompressedContent = $._encodeOctetString;


/* eslint-enable */
