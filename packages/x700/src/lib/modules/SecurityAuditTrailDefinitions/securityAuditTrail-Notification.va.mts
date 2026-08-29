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
 * @summary securityAuditTrail_Notification
 * @description
 *
 * Arc for security-audit-trail notifications: `serviceReport`
 * (1) for provision, denial or recovery of a service (and
 * related security-admin information); `usageReport` (2) for
 * statistical information relevant to the security
 * administrator. Both use `SecurityAuditInfo`. ITU-T Rec.
 * X.740 (09/92)
 * [§8.1.1](https://www.itu.int/rec/T-REC-X.740-199209-I), A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityAuditTrail-Notification OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part8(8) notification(10)}
 * ```
 *
 * @constant
 */
export const securityAuditTrail_Notification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part8 */ 8, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
