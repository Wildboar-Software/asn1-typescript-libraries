import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AChBillingChargingCharacteristics
 * @description
 *
 * OCTET STRING carrying BER-encoded `CAMEL-AChBillingChargingCharacteristics`.
 * Tells the gsmSSF what charging info to collect and when to send
 * ApplyChargingReport. UserDefinedConstraint violation is an ASN.1 syntax
 * error. (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AChBillingChargingCharacteristics {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE
 * (bound.&minAChBillingChargingLength .. bound.&maxAChBillingChargingLength))
 * (CONSTRAINED BY {
 * CAMEL-AChBillingChargingCharacteristics {bound} })
 * ```
 *
 */
export type AChBillingChargingCharacteristics = OCTET_STRING;
export const _decode_AChBillingChargingCharacteristics = $._decodeOctetString;
export const _encode_AChBillingChargingCharacteristics = $._encodeOctetString;
