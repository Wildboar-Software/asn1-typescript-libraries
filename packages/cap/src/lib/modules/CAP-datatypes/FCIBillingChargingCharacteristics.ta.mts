import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary FCIBillingChargingCharacteristics
 * @description
 *
 * OCTET STRING wrapping a BER-encoded `CAMEL-FCIBillingChargingCharacteristics`
 * (free-format FCI billing/charging data). UserDefinedConstraint violation is
 * an ASN.1 syntax error. (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.19)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCIBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 *  (CONSTRAINED BY {
 *  CAMEL-FCIBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCIBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCIBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCIBillingChargingCharacteristics = $._encodeOctetString;
