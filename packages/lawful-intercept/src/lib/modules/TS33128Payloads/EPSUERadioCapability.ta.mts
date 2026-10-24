/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUERadioCapability
 * @description
 * 
 * Indicates the radio capabilities of the UE. Encoded per 36.413 [38] clause
 * 9.2.1.27.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUERadioCapability  ::=  OCTET STRING
 * ```
 */
export
type EPSUERadioCapability = OCTET_STRING; // OctetStringType
export const _decode_EPSUERadioCapability: $.ASN1Decoder<EPSUERadioCapability> = $._decodeOctetString;
export const _encode_EPSUERadioCapability: $.ASN1Encoder<EPSUERadioCapability> = $._encodeOctetString;


/* eslint-enable */
