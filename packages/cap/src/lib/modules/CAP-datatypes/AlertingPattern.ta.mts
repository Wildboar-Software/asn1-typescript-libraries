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
 * @summary AlertingPattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertingPattern ::= OCTET STRING (SIZE(3))
 * ```
 *
 */
export type AlertingPattern = OCTET_STRING;
export const _decode_AlertingPattern = $._decodeOctetString;
export const _encode_AlertingPattern = $._encodeOctetString;
