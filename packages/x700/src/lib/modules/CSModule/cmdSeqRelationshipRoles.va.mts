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
 * @summary cmdSeqRelationshipRoles
 * @description
 *
 * OID arc for GRM relationship roles of the command sequencer:
 * `{joint-iso-itu-t ms(9) function(2) part21(21)
 * relationshipRole(13)}`. Annex B children:
 *
 * - `{… 1}` — `commandSequencerRole` (exactly one CS;
 *   cardinality `RangeFromOneToOne`).
 * - `{… 2}` — `launchPadRole` (zero or more launch pads;
 *   `RangeFromZeroToMax`; BIND/UNBIND).
 * - `{… 3}` — `scriptUserRole` (`scriptReferencer`: launch pad
 *   or thread).
 * - `{… 4}` — `scriptRole` (`launchScript`).
 *
 * Annex B also writes `{CSModule.cmdSeqRoles 5}`
 * (`spawnerRole`) and `{CSModule.cmdSeqRoles 6}`
 * (`progenyRole`). That `cmdSeqRoles` name is not assigned in
 * CSModule; this arc is the defined role prefix. ITU-T Rec.
 * X.753 (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmdSeqRelationshipRoles OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part21(21) relationshipRole(13)}
 * ```
 *
 * @constant
 */
export const cmdSeqRelationshipRoles: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part21 */ 21, /* relationshipRole */ 13],
    joint_iso_itu_t
);

/* eslint-enable */
