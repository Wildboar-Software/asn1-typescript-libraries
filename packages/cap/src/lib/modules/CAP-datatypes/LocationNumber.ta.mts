import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LocationNumber
 * @description
 *
 * Location Number for the calling party. Encoding: ETSI EN 300 356-1. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 *  bound.&minLocationNumberLength .. bound.&maxLocationNumberLength))
 * ```
 *
 */
export type LocationNumber = OCTET_STRING;
export const _decode_LocationNumber = $._decodeOctetString;
export const _encode_LocationNumber = $._encodeOctetString;
