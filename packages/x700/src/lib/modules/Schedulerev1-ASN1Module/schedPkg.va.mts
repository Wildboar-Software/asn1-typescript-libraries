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
 * @summary schedPkg
 * @description
 *
 * OID arc for X.746 scheduling packages:
 * `{joint-iso-itu-t ms(9) function(2) part15(15) package(4)}`.
 * Registered: `intervalSchedulingPackage` (1),
 * `triggerSchedulingPackage` (2),
 * `TypeOfDayControllerInstancePackage` (3),
 * `periodicSchedulingPackage` (4), `resynchronizeModePackage`
 * (5), `scheduledManagedObjectsPackage` (6),
 * `schedulerObjectPackage` (7), `operationsSchedulingPackage`
 * (8), `operationNotificationPackage` (9),
 * `multipleDailyScheduling` (10), `multipleMonthlyScheduling`
 * (11), `multipleWeeklyScheduling` (12). ITU-T Rec. X.746
 * (02/00)
 * [A.3](https://www.itu.int/rec/T-REC-X.746-200002-I), A.1.11,
 * A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedPkg OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) package(4)}
 * ```
 *
 * @constant
 */
export const schedPkg: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
