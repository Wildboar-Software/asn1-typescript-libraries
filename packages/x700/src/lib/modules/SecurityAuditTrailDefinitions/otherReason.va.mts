/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    ServiceReportCause,
    _decode_ServiceReportCause,
    _encode_ServiceReportCause,
} from '../SecurityAuditTrail-ASN1Module/ServiceReportCause.ta.mjs';
import { serviceReportCause } from '../SecurityAuditTrailDefinitions/serviceReportCause.va.mjs';
/**
 * @summary otherReason
 * @description
 *
 * Service-report cause: notification generated for reasons
 * other than request, denial, response, failure, or recovery.
 * The actual cause and other relevant information is specified
 * in the other parameters of the report. ITU-T Rec. X.740
 * (09/92)
 * [§8.1.2](https://www.itu.int/rec/T-REC-X.740-199209-I),
 * Table 4, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * otherReason ServiceReportCause ::= {serviceReportCause  6}
 * ```
 *
 * @constant
 */
export const otherReason: ServiceReportCause = _OID.fromParts(
    [6],
    serviceReportCause
);

/* eslint-enable */
