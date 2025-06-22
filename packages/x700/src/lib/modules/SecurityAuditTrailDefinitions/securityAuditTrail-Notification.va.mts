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
