/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ThreeGPP2SMSTPDU
 * @description
 * 
 * 3GPP2 SMS Transport Layer Message PDU encoded per the PDUs defined in 3GPP2
 * C.S0015-A [134] clause 4.5.2.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPP2SMSTPDU  ::=  OCTET STRING
 * ```
 */
export
type ThreeGPP2SMSTPDU = OCTET_STRING; // OctetStringType
export const _decode_ThreeGPP2SMSTPDU: $.ASN1Decoder<ThreeGPP2SMSTPDU> = $._decodeOctetString;
export const _encode_ThreeGPP2SMSTPDU: $.ASN1Encoder<ThreeGPP2SMSTPDU> = $._encodeOctetString;


/* eslint-enable */
