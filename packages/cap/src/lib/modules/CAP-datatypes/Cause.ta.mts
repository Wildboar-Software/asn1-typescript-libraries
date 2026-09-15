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
 * Interface-related cause. ETSI EN 300 356-1 Cause encoding; cause and location
 * values per ITU-T Q.850. Always include the cause value; include diagnostics
 * when available. (3GPP TS 29.078 V19.0.0 clause 5.1).
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
