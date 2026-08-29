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
 * @summary mdmpmfAttribute
 * @description
 *
 * Arc for MDMPMF attributes: `administrativeAspectId` (1),
 * `administrativeAspectPointer` (2), `administrativeAuthority`
 * (3), `administrativeContactInformation` (4),
 * `administrativeOwner` (5), `administrativeSpecifier` (6),
 * `assertion` (7), `creationTime` (8), `domainId` (9),
 * `domainPointer` (10), `indirectMembershipSpecifierList` (11),
 * `jurisdictionId` (12), `lastUpdateTime` (13),
 * `memberSelectionFilter` (14), `memberSelectionList` (15),
 * `policyId` (16), `policyPointer` (17), `versionIdentifier` (18),
 * `violatedPolicy` (19), `violatorName` (20). ITU-T Rec. X.749
 * (08/97) [A.5](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfAttribute OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) attribute(7)}
 * ```
 *
 * @constant
 */
export const mdmpmfAttribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* attribute */ 7],
    joint_iso_itu_t
);

/* eslint-enable */
