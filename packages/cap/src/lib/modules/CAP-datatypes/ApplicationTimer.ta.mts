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
 * @summary ApplicationTimer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationTimer ::=INTEGER (0..2047)
 * ```
 *
 */
export type ApplicationTimer = INTEGER;
export const _decode_ApplicationTimer = $._decodeInteger;
export const _encode_ApplicationTimer = $._encodeInteger;
