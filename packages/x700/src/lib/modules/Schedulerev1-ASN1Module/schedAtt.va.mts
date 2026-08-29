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
 * @summary schedAtt
 * @description
 *
 * OID arc for X.746 scheduling attributes:
 * `{joint-iso-itu-t ms(9) function(2) part15(15) attribute(7)}`.
 * Registered (A.4): `externalSchedulerName` (1), `onDuty` (2),
 * `resynchronizeMode` (3), `scheduledManagedObjects` (4),
 * `schedulerID` (5), `sequenceOfDays` (6), `sequenceOfMonths`
 * (7), `sequenceOfWeeks` (8), `timePeriod` (9),
 * `operationSpecifications` (10), `operationResult` (11),
 * `currentTypeOfDay` (12), `dateTranslationList` (13),
 * `defaultIndex` (14), `schedulingData` (15),
 * `typeOfDayControllerInstance` (16), `typeOfDayControllerId`
 * (17), `weekDayTranslationList` (18). ITU-T Rec. X.746 (02/00)
 * [A.4](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedAtt OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) attribute(7)}
 * ```
 *
 * @constant
 */
export const schedAtt: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* attribute */ 7],
    joint_iso_itu_t
);

/* eslint-enable */
