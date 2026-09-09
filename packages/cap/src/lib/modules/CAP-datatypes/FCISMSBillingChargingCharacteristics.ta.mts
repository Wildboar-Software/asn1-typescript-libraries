import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary FCISMSBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCISMSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 (CONSTRAINED BY {
 CAMEL-FCISMSBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCISMSBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCISMSBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCISMSBillingChargingCharacteristics = $._encodeOctetString;
