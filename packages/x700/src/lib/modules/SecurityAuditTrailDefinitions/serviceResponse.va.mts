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
 * @summary serviceResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceResponse ServiceReportCause ::= {serviceReportCause  3}
 * ```
 *
 * @constant
 */
export const serviceResponse: ServiceReportCause = _OID.fromParts(
    [3],
    serviceReportCause
);

/* eslint-enable */
