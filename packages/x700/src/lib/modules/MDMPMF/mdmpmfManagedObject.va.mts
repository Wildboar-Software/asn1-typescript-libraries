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
 * @summary mdmpmfManagedObject
 * @description
 *
 * Arc for MDMPMF managed object classes: `policy` (1),
 * `scheduledPolicy` (2), `jurisdiction` (3),
 * `enhancedJurisdiction` (4), `domain` (5),
 * `administrativeAspect` (6), `policyViolationLogRecord` (7),
 * `valueAssertionPolicy` (8). ITU-T Rec. X.749 (08/97)
 * [A.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mdmpmfManagedObject OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) managedObject(3)}
 * ```
 *
 * @constant
 */
export const mdmpmfManagedObject: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part19 */ 19, /* managedObject */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
