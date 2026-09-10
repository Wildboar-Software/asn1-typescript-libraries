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
