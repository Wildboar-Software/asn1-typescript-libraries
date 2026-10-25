/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEEPSPDNConnection
 * @description
 * 
 * This IE shall be present, if available, during an EPS to 5GS Idle mode
 * mobility or handover using the N26 interface. If present, it shall contain
 * the EPS bearer context(s) information present in the uEEPSPDNConnection
 * parameter of the intercepted SmContextCreateData message. (see TS 29.502 [16]
 * clause 6.1.6.2.2).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
