/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QOSFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowDescription  ::=  OCTET STRING
 * ```
 */
export
type QOSFlowDescription = OCTET_STRING; // OctetStringType
export const _decode_QOSFlowDescription: $.ASN1Decoder<QOSFlowDescription> = $._decodeOctetString;
export const _encode_QOSFlowDescription: $.ASN1Encoder<QOSFlowDescription> = $._encodeOctetString;


/* eslint-enable */
