import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SCIBillingChargingCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SCIBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 *  bound.&minSCIBillingChargingLength .. bound.&maxSCIBillingChargingLength))
 *  (CONSTRAINED BY {
 *  CAMEL-SCIBillingChargingCharacteristics})
 * ```
 *
 */
export type SCIBillingChargingCharacteristics = OCTET_STRING;
export const _decode_SCIBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_SCIBillingChargingCharacteristics = $._encodeOctetString;
