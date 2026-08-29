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
 * @summary cmdSeqRelationshipMappings
 * @description
 *
 * OID arc for GRM relationship mappings of the command
 * sequencer: `{joint-iso-itu-t ms(9) function(2) part21(21)
 * relationshipMapping(12)}`. Annex B children:
 *
 * - `{… 1}` — `commandSequencer-launchPad-RelationshipMapping`
 *   (containment: CS names launch pads; spawn may use CS
 *   services).
 * - `{… 2}` — `launchPad-LaunchScriptMapping` (launch pad
 *   references scripts via `scriptList`).
 * - `{… 3}` — `thread-launchScriptMapping` (thread references a
 *   script via `scriptId`).
 *
 * ITU-T Rec. X.753 (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmdSeqRelationshipMappings OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part21(21) relationshipMapping(12)}
 * ```
 *
 * @constant
 */
export const cmdSeqRelationshipMappings: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part21 */ 21,
        /* relationshipMapping */ 12,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
