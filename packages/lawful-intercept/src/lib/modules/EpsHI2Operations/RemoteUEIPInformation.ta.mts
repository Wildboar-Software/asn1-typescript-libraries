/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUEIPInformation
 * @description
 * 
 * IP address of a connected ProSe remote UE, as provided by the ProSe
 * UE-to-network relay (clause 13.3.1 table 13.3.1-2 and clause 10.5.2). A
 * disconnected remote UE is reported as an identity only. The handover text
 * does not state the octet layout.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIPInformation  ::=  OCTET STRING
 * ```
 */
export
type RemoteUEIPInformation = OCTET_STRING; // OctetStringType
export const _decode_RemoteUEIPInformation: $.ASN1Decoder<RemoteUEIPInformation> = $._decodeOctetString;
export const _encode_RemoteUEIPInformation: $.ASN1Encoder<RemoteUEIPInformation> = $._encodeOctetString;


/* eslint-enable */
