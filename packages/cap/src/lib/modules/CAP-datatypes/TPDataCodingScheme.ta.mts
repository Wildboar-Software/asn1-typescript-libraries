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
 * @summary TPDataCodingScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPDataCodingScheme ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type TPDataCodingScheme = OCTET_STRING;
export const _decode_TPDataCodingScheme = $._decodeOctetString;
export const _encode_TPDataCodingScheme = $._encodeOctetString;
