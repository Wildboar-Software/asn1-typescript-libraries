/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCCPDUPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCPDUPayload  ::=  OCTET STRING
 * ```
 */
export
type IMSCCPDUPayload = OCTET_STRING; // OctetStringType
export const _decode_IMSCCPDUPayload: $.ASN1Decoder<IMSCCPDUPayload> = $._decodeOctetString;
export const _encode_IMSCCPDUPayload: $.ASN1Encoder<IMSCCPDUPayload> = $._encodeOctetString;


/* eslint-enable */
