/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCVideoCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCVideoCCPDU  ::=  OCTET STRING
 * ```
 */
export
type MCVideoCCPDU = OCTET_STRING; // OctetStringType
export const _decode_MCVideoCCPDU: $.ASN1Decoder<MCVideoCCPDU> = $._decodeOctetString;
export const _encode_MCVideoCCPDU: $.ASN1Encoder<MCVideoCCPDU> = $._encodeOctetString;


/* eslint-enable */
