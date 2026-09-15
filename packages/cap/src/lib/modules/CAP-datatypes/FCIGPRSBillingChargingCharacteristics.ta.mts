import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary FCIGPRSBillingChargingCharacteristics
 * @description
 *
 * OCTET STRING wrapping a BER-encoded
 * `CAMEL-FCIGPRSBillingChargingCharacteristics` (GPRS FCI billing/charging).
 * UserDefinedConstraint violation is an ASN.1 syntax error. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCIGPRSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 *  (CONSTRAINED BY {
 *  CAMEL-FCIGPRSBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCIGPRSBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCIGPRSBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCIGPRSBillingChargingCharacteristics = $._encodeOctetString;
