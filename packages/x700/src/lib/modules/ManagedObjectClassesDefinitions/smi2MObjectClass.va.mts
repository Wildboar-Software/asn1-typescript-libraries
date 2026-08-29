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
 * @summary smi2MObjectClass
 * @description
 *
 * Registration arc for DMI (X.721) managed object classes:
 * `{joint-iso-itu-t ms(9) smi(3) part2(2)
 * managedObjectClass(3)}`. Assigned values (X.721 §6):
 * 1 `alarmRecord`, 2 `attributeValueChangeRecord`,
 * 3 `discriminator`, 4 `eventForwardingDiscriminator`,
 * 5 `eventLogRecord`, 6 `log`, 7 `logRecord`,
 * 8 `objectCreationRecord`, 9 `objectDeletionRecord`,
 * 10 `relationshipChangeRecord`,
 * 11 `securityAlarmReportRecord`, 12 `stateChangeRecord`,
 * 13 `system`, 14 `top`. ITU-T Rec. X.721 (02/92)
 * [§6](https://www.itu.int/rec/T-REC-X.721-199202-I), §14.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smi2MObjectClass OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) smi(3) part2(2) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const smi2MObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part2 */ 2, /* managedObjectClass */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
