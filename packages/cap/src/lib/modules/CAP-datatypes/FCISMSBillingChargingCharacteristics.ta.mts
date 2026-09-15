import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary FCISMSBillingChargingCharacteristics
 * @description
 *
 * OCTET STRING wrapping a BER-encoded
 * `CAMEL-FCISMSBillingChargingCharacteristics` (SMS FCI billing/charging).
 * UserDefinedConstraint violation is an ASN.1 syntax error. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCISMSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 *  (CONSTRAINED BY {
 *  CAMEL-FCISMSBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCISMSBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCISMSBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCISMSBillingChargingCharacteristics = $._encodeOctetString;
