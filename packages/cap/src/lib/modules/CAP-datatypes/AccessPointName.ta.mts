import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AccessPointName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessPointName {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minAccessPointNameLength .. bound.&maxAccessPointNameLength))
 * ```
 *
 */
export type AccessPointName = OCTET_STRING;
export const _decode_AccessPointName = $._decodeOctetString;
export const _encode_AccessPointName = $._encodeOctetString;
