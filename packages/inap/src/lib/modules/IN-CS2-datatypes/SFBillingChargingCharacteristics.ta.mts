/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SFBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SFBillingChargingCharacteristics  ::= 
 *   OCTET STRING
 * ```
 */
export
type SFBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
const _decode_SFBillingChargingCharacteristics: $.ASN1Decoder<SFBillingChargingCharacteristics> = $._decodeOctetString;

export
const _encode_SFBillingChargingCharacteristics: $.ASN1Encoder<SFBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
