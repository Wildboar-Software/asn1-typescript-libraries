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
 * @summary part17MObjectClass
 * @description
 *
 * Arc for change-over managed object classes:
 * `primary-backedUpObject` (1), `secondary-backUpObject` (2),
 * `changeOverControlObject` (3). ITU-T Rec. X.751 (11/95)
 * [A.2](https://www.itu.int/rec/T-REC-X.751-199511-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part17MObjectClass OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part17(17) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const part17MObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part17 */ 17, /* managedObjectClass */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
