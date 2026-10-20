/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FCIBillingChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FCIBillingChargingCharacteristics  ::= 
 *   OCTET STRING(SIZE (minFCIBillingChargingLength..maxFCIBillingChargingLength))
 * ```
 */
export
type FCIBillingChargingCharacteristics = OCTET_STRING; // OctetStringType

export
const _decode_FCIBillingChargingCharacteristics: $.ASN1Decoder<FCIBillingChargingCharacteristics> = $._decodeOctetString;

export
const _encode_FCIBillingChargingCharacteristics: $.ASN1Encoder<FCIBillingChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
