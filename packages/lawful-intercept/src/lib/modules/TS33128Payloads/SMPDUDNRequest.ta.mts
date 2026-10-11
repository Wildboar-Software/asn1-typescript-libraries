/* eslint-disable */
import {
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SMPDUDNRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMPDUDNRequest  ::=  OCTET STRING
 * ```
 */
export
type SMPDUDNRequest = OCTET_STRING; // OctetStringType

export const _decode_SMPDUDNRequest: $.ASN1Decoder<SMPDUDNRequest> = $._decodeOctetString;

export const _encode_SMPDUDNRequest: $.ASN1Encoder<SMPDUDNRequest> = $._encodeOctetString;

/* eslint-enable */
