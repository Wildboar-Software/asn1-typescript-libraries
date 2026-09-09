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
 * @summary SGSNCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SGSNCapabilities ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type SGSNCapabilities = OCTET_STRING;
export const _decode_SGSNCapabilities = $._decodeOctetString;
export const _encode_SGSNCapabilities = $._encodeOctetString;
