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
 * @summary serviceReportCause
 * @description
 *
 * Arc for registered service-report-cause values used as the
 * service-report-cause parameter / `serviceReportCause`
 * attribute: `serviceRequest` (1), `serviceDenial` (2),
 * `serviceResponse` (3), `serviceFailure` (4),
 * `serviceRecovery` (5), `otherReason` (6). ITU-T Rec. X.740
 * (09/92)
 * [§8.1.2](https://www.itu.int/rec/T-REC-X.740-199209-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceReportCause OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part8(8) standardSpecificExtension(0) 1}
 * ```
 *
 * @constant
 */
export const serviceReportCause: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part8 */ 8,
        /* standardSpecificExtension */ 0,
        1,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
