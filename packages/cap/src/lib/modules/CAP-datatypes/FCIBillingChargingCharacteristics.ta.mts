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
 * @summary FCIBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FCIBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minFCIBillingChargingLength .. bound.&maxFCIBillingChargingLength))
 (CONSTRAINED BY {
 CAMEL-FCIBillingChargingCharacteristics {bound}})
 * ```
 *
 */
export type FCIBillingChargingCharacteristics = OCTET_STRING;
export const _decode_FCIBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_FCIBillingChargingCharacteristics = $._encodeOctetString;
