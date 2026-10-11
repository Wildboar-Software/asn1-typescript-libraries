/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedRfChargingData
 * @description
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
