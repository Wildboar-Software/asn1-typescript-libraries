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
 * @summary TPShortMessageSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPShortMessageSpecificInfo ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type TPShortMessageSpecificInfo = OCTET_STRING;
export const _decode_TPShortMessageSpecificInfo = $._decodeOctetString;
export const _encode_TPShortMessageSpecificInfo = $._encodeOctetString;
