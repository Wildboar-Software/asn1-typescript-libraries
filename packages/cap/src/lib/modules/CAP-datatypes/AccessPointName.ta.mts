import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AccessPointName
 * @description
 *
 * APN as the value part of 3GPP TS 24.008; omit the 24.008 IEI and length
 * octet. Size is `PARAMETERS-BOUND` min/max AccessPointNameLength.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessPointName {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minAccessPointNameLength .. bound.&maxAccessPointNameLength))
 * ```
 *
 */
export type AccessPointName = OCTET_STRING;
export const _decode_AccessPointName = $._decodeOctetString;
export const _encode_AccessPointName = $._encodeOctetString;
