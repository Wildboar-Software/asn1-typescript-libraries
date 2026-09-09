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
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID ::= INTEGER (-128..127)
 * ```
 *
 */
export type InvokeID = INTEGER;
export const _decode_InvokeID = $._decodeInteger;
export const _encode_InvokeID = $._encodeInteger;
