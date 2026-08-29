/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary moaSpecificProblems
 * @description
 *
 * Arc for quality-of-service alarm `specificProblems` values
 * used in workload monitoring: `resourceRequestRate` (1),
 * `resourceUtilization` (2), `rejectionRate` (3). ITU-T Rec.
 * X.739 (11/93)
 * [§8.1.9.7.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §8.2.1, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * moaSpecificProblems OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part11(11) standardSpecificExtension(0) 0}
 * ```
 *
 * @constant
 */
export const moaSpecificProblems: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part11 */ 11,
        /* standardSpecificExtension */ 0,
        0,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
