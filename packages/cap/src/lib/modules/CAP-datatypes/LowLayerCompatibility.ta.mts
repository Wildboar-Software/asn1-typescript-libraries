import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LowLayerCompatibility
 * @description
 *
 * Low Layer Compatibility for the calling party. Encoding: value part of 3GPP
 * TS 24.008 (omit IEI and length). (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LowLayerCompatibility {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 *  bound.&minLowLayerCompatibilityLength .. bound.&maxLowLayerCompatibilityLength))
 * ```
 *
 */
export type LowLayerCompatibility = OCTET_STRING;
export const _decode_LowLayerCompatibility = $._decodeOctetString;
export const _encode_LowLayerCompatibility = $._encodeOctetString;
