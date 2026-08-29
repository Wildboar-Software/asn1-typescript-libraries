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
 * @summary mdmpmfAction
 * @description
 *
 * Arc for MDMPMF actions: `applyOperationToMembership` (1),
 * `determineViolationStatus` (2), `listDirectMembership` (3),
 * `listMembership` (4), `verifyMembershipStatus` (5). ITU-T Rec.
 * X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfAction OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) action(8)}
 * ```
 *
 * @constant
 */
export const mdmpmfAction: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* action */ 8],
    joint_iso_itu_t
);

/* eslint-enable */
