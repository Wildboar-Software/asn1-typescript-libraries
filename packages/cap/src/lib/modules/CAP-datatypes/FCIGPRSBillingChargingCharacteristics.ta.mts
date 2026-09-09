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
 * @summary FCIGPRSBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCIGPRSBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 (CONSTRAINED BY {
 CAMEL-FCIGPRSBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCIGPRSBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCIGPRSBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCIGPRSBillingChargingCharacteristics = $._encodeOctetString;
