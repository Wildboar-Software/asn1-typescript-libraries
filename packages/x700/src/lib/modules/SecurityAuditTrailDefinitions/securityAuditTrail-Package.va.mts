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
 * @summary securityAuditTrail_Package
 * @description
 *
 * Arc for security-audit-trail packages:
 * `serviceReportCausePackage` (1), present if the notification
 * concerns a service report; provides further qualification of
 * the probable cause (`serviceReportCause` GET). ITU-T Rec.
 * X.740 (09/92)
 * [A.2](https://www.itu.int/rec/T-REC-X.740-199209-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityAuditTrail-Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part8(8) package(4)}
 * ```
 *
 * @constant
 */
export const securityAuditTrail_Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part8 */ 8, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
