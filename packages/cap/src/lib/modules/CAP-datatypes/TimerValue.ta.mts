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
 * @summary TimerValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimerValue ::= Integer4
 * ```
 *
 */
export type TimerValue = INTEGER;
export const _decode_TimerValue = $._decodeInteger;
export const _encode_TimerValue = $._encodeInteger;
