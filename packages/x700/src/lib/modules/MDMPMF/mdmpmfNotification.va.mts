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
 * @summary mdmpmfNotification
 * @description
 *
 * Arc for MDMPMF notifications: `policyViolation` (1), emitted when
 * a domain member violates a jurisdiction’s policy. ITU-T Rec.
 * X.749 (08/97)
 * [A.6](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.3.1, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfNotification OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) notification(10)}
 * ```
 *
 * @constant
 */
export const mdmpmfNotification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
