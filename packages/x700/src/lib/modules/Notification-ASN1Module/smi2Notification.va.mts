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
 * @summary smi2Notification
 * @description
 *
 * Registration arc for DMI (X.721) notification types:
 * `{joint-iso-itu-t ms(9) smi(3) part2(2) notification(10)}`.
 * Assigned values (X.721 §13): 1 `attributeValueChange`,
 * 2 `communicationsAlarm`, 3 `environmentalAlarm`,
 * 4 `equipmentAlarm`, 5 `integrityViolation`,
 * 6 `objectCreation`, 7 `objectDeletion`,
 * 8 `operationalViolation`, 9 `physicalViolation`,
 * 10 `processingErrorAlarm`, 11 `qualityofServiceAlarm`,
 * 12 `relationshipChange`,
 * 13 `securityServiceOrMechanismViolation`, 14 `stateChange`,
 * 15 `timeDomainViolation`. ITU-T Rec. X.721 (02/92)
 * [§13](https://www.itu.int/rec/T-REC-X.721-199202-I), §14.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smi2Notification OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) notification(10)}
 * ```
 *
 * @constant
 */
export const smi2Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part2 */ 2, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
