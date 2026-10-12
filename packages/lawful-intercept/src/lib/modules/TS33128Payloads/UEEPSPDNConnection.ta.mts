/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEEPSPDNConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEEPSPDNConnection  ::=  OCTET STRING
 * ```
 */
export
type UEEPSPDNConnection = OCTET_STRING; // OctetStringType
export const _decode_UEEPSPDNConnection: $.ASN1Decoder<UEEPSPDNConnection> = $._decodeOctetString;
export const _encode_UEEPSPDNConnection: $.ASN1Encoder<UEEPSPDNConnection> = $._encodeOctetString;


/* eslint-enable */
