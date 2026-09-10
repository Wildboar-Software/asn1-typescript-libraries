import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Cause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cause {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCauseLength .. bound.&maxCauseLength))
 * ```
 *
 */
export type Cause = OCTET_STRING;
export const _decode_Cause = $._decodeOctetString;
export const _encode_Cause = $._encodeOctetString;
