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
 * @summary schedMo
 * @description
 *
 * OID arc for X.746 scheduler managed object classes:
 * `{joint-iso-itu-t ms(9) function(2) part15(15)
 * managedObjectClass(3)}`. Registered classes (A.1):
 * `scheduler` (1), `dailyScheduler` (2), `weeklyScheduler` (3),
 * `monthlyScheduler` (4), `periodicScheduler` (5),
 * `dailyOperationScheduler` (6), `weeklyOperationScheduler` (7),
 * `monthlyOperationScheduler` (8),
 * `periodicOperationScheduler` (9), `operationResultRecord`
 * (10). Both `multiScheduler` (A.1.11) and
 * `typeOfDayController` (A.1.12) are registered as
 * `{schedMo 11}` in the rec. ITU-T Rec. X.746 (02/00)
 * [A.1](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedMo OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const schedMo: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* managedObjectClass */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
