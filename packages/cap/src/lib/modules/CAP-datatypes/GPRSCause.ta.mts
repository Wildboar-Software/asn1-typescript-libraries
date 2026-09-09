import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary GPRSCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSCause {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE
 (bound.&minGPRSCauseLength .. bound.&maxGPRSCauseLength))
 * ```
 *
 */
export type GPRSCause = OCTET_STRING;
export const _decode_GPRSCause = $._decodeOctetString;
export const _encode_GPRSCause = $._encodeOctetString;
