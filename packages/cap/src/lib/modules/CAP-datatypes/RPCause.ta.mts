import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RPCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RPCause ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type RPCause = OCTET_STRING;
export const _decode_RPCause = $._decodeOctetString;
export const _encode_RPCause = $._encodeOctetString;
