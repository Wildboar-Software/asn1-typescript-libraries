/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedRfChargingData
 * @description
 * 
 * Shall contain the octets of the Diameter message ACR (Accounting Request) as
 * defined in clause TS 32.299 [111] clause 6.2.2.
 *
 * 3GPP TS 33.128, clause 7.19.3.11.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedRfChargingData  ::=  OCTET STRING
 * ```
 */
export
type EncapsulatedRfChargingData = OCTET_STRING; // OctetStringType
export const _decode_EncapsulatedRfChargingData: $.ASN1Decoder<EncapsulatedRfChargingData> = $._decodeOctetString;
export const _encode_EncapsulatedRfChargingData: $.ASN1Encoder<EncapsulatedRfChargingData> = $._encodeOctetString;


/* eslint-enable */
