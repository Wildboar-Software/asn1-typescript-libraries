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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minGenericNumberLength .. bound.&maxGenericNumberLength))
 * ```
 *
 */
export type GenericNumber = OCTET_STRING;
export const _decode_GenericNumber = $._decodeOctetString;
export const _encode_GenericNumber = $._encodeOctetString;
