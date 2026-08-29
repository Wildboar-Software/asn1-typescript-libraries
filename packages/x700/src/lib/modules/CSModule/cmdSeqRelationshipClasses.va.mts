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
 * @summary cmdSeqRelationshipClasses
 * @description
 *
 * OID arc for GRM relationship classes of the command
 * sequencer: `{joint-iso-itu-t ms(9) function(2) part21(21)
 * relationshipClass(11)}`. Annex B children:
 *
 * - `{… 1}` — `commandSequencer-launchPad-RelationshipClass`
 *   (command sequencer to its launch pads).
 * - `{… 2}` — `scriptReferencerRelationshipClass` (script user
 *   to launch script).
 * - `{… 3}` — `spawner-progeny-RelationshipClass` (spawner as
 *   IVMO of contained threads).
 *
 * ITU-T Rec. X.753 (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmdSeqRelationshipClasses OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part21(21) relationshipClass(11)}
 * ```
 *
 * @constant
 */
export const cmdSeqRelationshipClasses: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part21 */ 21, /* relationshipClass */ 11],
    joint_iso_itu_t
);

/* eslint-enable */
