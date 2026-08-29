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
 * @summary serviceDenial
 * @description
 *
 * Service-report cause: notification generated because a
 * request for service has been denied. ITU-T Rec. X.740
 * (09/92)
 * [§8.1.2](https://www.itu.int/rec/T-REC-X.740-199209-I),
 * Table 4, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceDenial ServiceReportCause ::= {serviceReportCause  2}
 * ```
 *
 * @constant
 */
export const serviceDenial: ServiceReportCause = _OID.fromParts(
    [2],
    serviceReportCause
);

/* eslint-enable */
