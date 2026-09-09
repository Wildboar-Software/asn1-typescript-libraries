import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ScfID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScfID {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minScfIDLength .. bound.&maxScfIDLength))
 * ```
 *
 */
export type ScfID = OCTET_STRING;
export const _decode_ScfID = $._decodeOctetString;
export const _encode_ScfID = $._encodeOctetString;
