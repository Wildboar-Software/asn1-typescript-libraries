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
 * @summary LocationNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE (
 bound.&minLocationNumberLength .. bound.&maxLocationNumberLength))
 * ```
 *
 */
export type LocationNumber = OCTET_STRING;
export const _decode_LocationNumber = $._decodeOctetString;
export const _encode_LocationNumber = $._encodeOctetString;
