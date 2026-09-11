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
 * Cause for CAP-interface GPRS information. Shall include only the cause value.
 * `00000000`B = Unspecified; all other values shall be interpreted as
 * Unspecified. Mapping to/from GTP causes (3GPP TS 29.060) and 3GPP TS 24.008
 * GMM/SM causes is outside the scope of this specification. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSCause {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE
 *  (bound.&minGPRSCauseLength .. bound.&maxGPRSCauseLength))
 * ```
 *
 */
export type GPRSCause = OCTET_STRING;
export const _decode_GPRSCause = $._decodeOctetString;
export const _encode_GPRSCause = $._encodeOctetString;
