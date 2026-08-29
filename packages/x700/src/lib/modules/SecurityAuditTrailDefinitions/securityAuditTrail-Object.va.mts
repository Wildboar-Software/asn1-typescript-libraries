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
 * @summary securityAuditTrail_Object
 * @description
 *
 * Arc for security-audit-trail managed object classes:
 * `securityAuditTrailRecord` (1), a subclass of X.721
 * `eventLogRecord` for information stored in a log from
 * security-audit-trail notifications or event reports. ITU-T
 * Rec. X.740 (09/92)
 * [§8.2](https://www.itu.int/rec/T-REC-X.740-199209-I), A.1,
 * A.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityAuditTrail-Object OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part8(8) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const securityAuditTrail_Object: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part8 */ 8, /* managedObjectClass */ 3],
    joint_iso_itu_t
);

/* eslint-enable */
