import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PDPID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDPID ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type PDPID = OCTET_STRING;
export const _decode_PDPID = $._decodeOctetString;
export const _encode_PDPID = $._encodeOctetString;
