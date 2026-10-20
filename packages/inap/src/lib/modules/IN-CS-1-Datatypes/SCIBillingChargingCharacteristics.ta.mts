/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCIBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCIBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minSCIBillingChargingLength..maxSCIBillingChargingLength))
 * ```
 */
export
type SCIBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
const _decode_SCIBillingChargingCharacteristics: $.ASN1Decoder<SCIBillingChargingCharacteristics> = $._decodeOctetString;

export
const _encode_SCIBillingChargingCharacteristics: $.ASN1Encoder<SCIBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
