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
 * @summary softwareManagement
 * @description
 *
 * Root OID for the Software management function (ISO/IEC 10164-18).
 * Sub-arcs register SWMF packages (`package(4)`), parameters
 * (`parameter(5)`), name bindings (`nameBinding(6)`), attributes
 * (`attribute(7)`), actions (`action(9)`), and notifications
 * (`notification(10)`). ASN.1 modules hang off
 * `{… part18(18) asn1Module(2)}` (`0` = SWMF, `1` =
 * BackupRestoreASN1Module). ITU-T Rec. X.744 (10/96)
 * [A.8](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.1–A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * softwareManagement OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part18(18)}
 * ```
 *
 * @constant
 */
export const softwareManagement: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part18 */ 18],
    joint_iso_itu_t
);

/* eslint-enable */
