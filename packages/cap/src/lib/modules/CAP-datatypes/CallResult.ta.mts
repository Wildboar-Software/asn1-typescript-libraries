import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CallResult
 * @description
 *
 * OCTET STRING carrying BER-encoded `CAMEL-CallResult`. Charging information
 * previously requested with ApplyCharging; shall include `partyToCharge` as in
 * that request. UserDefinedConstraint violation is an ASN.1 syntax error.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallResult {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCallResultLength .. bound.&maxCallResultLength))
 *  (CONSTRAINED BY {
 *  CAMEL-CallResult {bound}})
 * ```
 *
 */
export type CallResult = OCTET_STRING;
export const _decode_CallResult = $._decodeOctetString;
export const _encode_CallResult = $._encodeOctetString;
