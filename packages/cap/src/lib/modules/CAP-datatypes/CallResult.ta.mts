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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallResult {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minCallResultLength .. bound.&maxCallResultLength))
 (CONSTRAINED BY {
 CAMEL-CallResult {bound}})
 * ```
 *
 */
export type CallResult = OCTET_STRING;
export const _decode_CallResult = $._decodeOctetString;
export const _encode_CallResult = $._encodeOctetString;
