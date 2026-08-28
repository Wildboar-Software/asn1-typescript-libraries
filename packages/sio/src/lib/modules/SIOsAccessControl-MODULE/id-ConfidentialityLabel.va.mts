/* eslint-disable */
import {
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";


/**
 * @summary id_ConfidentialityLabel
 * @description
 *
 * Identifies the confidentiality-label SIO class:
 * `{joint-iso-itu-t sios(24) specification(0) securityLabels(1)
 * confidentiality(0)}`. ITU-T Rec. X.841 (10/2000)
 * [§6.1.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ConfidentialityLabel OBJECT IDENTIFIER ::= {joint-iso-itu-t sios(24) specification(0) securityLabels(1)
 *    confidentiality(0)}
 * ```
 *
 * @constant
 */
export const id_ConfidentialityLabel: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* sios */ 24,
        /* specification */ 0,
        /* securityLabels */ 1,
        /* confidentiality */ 0,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
