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
 * @summary part17Parameter
 * @description
 *
 * Arc for change-over specific-error parameters: `alreadyBackedUp`
 * (1), `backup-backedup-Mismatch` (2), `changeOverCapabilityAbsent`
 * (3), `expectedResultUnsatisfied` (4), `noSuchParticipant` (5),
 * `noSuchRelationships` (6), `notBackedUp` (7),
 * `postconditionsNotMet` (8), `preconditionsNotMet` (9),
 * `secondaryInstanceUnavailable` (10). ITU-T Rec. X.751 (11/95)
 * [A.6](https://www.itu.int/rec/T-REC-X.751-199511-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17Parameter OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) parameter(5)}
 * ```
 *
 * @constant
 */
export const part17Parameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* parameter */ 5],
    joint_iso_itu_t
);

/* eslint-enable */
