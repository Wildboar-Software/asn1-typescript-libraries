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
 * @summary serviceRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceRequest ServiceReportCause ::= {serviceReportCause  1}
 * ```
 *
 * @constant
 */
export const serviceRequest: ServiceReportCause = _OID.fromParts(
    [1],
    serviceReportCause
);

/* eslint-enable */
