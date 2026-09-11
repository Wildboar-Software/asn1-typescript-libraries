import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary GenericNumber
 * @description
 *
 * Generic Number. Encoding: ETSI EN 300 356-1. (3GPP TS 29.078 V19.0.0 clause
 * 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minGenericNumberLength .. bound.&maxGenericNumberLength))
 * ```
 *
 */
export type GenericNumber = OCTET_STRING;
export const _decode_GenericNumber = $._decodeOctetString;
export const _encode_GenericNumber = $._encodeOctetString;
