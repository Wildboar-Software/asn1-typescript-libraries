/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMPDUDNRequest
 * @description
 * 
 * Contents of the SM PDU DN Request container, if available, as described in TS
 * 24.501 [13] clause 9.11.4.15.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
