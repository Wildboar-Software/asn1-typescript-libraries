import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DateAndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateAndTime ::= OCTET STRING (SIZE(7))
 * ```
 *
 */
export type DateAndTime = OCTET_STRING;
export const _decode_DateAndTime = $._decodeOctetString;
export const _encode_DateAndTime = $._encodeOctetString;
