import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SCIGPRSBillingChargingCharacteristics
 * @description
 *
 * OCTET STRING wrapping a BER-encoded
 * `CAMEL-SCIGPRSBillingChargingCharacteristics` (AOC information to send to a
 * Mobile Station for GPRS). UserDefinedConstraint violation is an ASN.1 syntax
 * error. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SCIGPRSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 *  bound.&minSCIBillingChargingLength .. bound.&maxSCIBillingChargingLength))
 *  (CONSTRAINED BY {
 *  CAMEL-SCIGPRSBillingChargingCharacteristics})
 * ```
 *
 */
export type SCIGPRSBillingChargingCharacteristics = OCTET_STRING;
export const _decode_SCIGPRSBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_SCIGPRSBillingChargingCharacteristics = $._encodeOctetString;
