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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { originator_and_DL_expansion_history } from '../MTSAbstractService/originator-and-DL-expansion-history.oa.mjs';
import { reporting_DL_name } from '../MTSAbstractService/reporting-DL-name.oa.mjs';
import { reporting_MTA_certificate } from '../MTSAbstractService/reporting-MTA-certificate.oa.mjs';
import { report_origin_authentication_check } from '../MTSAbstractService/report-origin-authentication-check.oa.mjs';
import { trace_information } from '../MTAAbstractService/trace-information.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { reporting_MTA_name } from '../MTSAbstractService/reporting-MTA-name.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary ReportDeliveryExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    message-security-label | content-correlator | redirection-history |
 *    originator-and-DL-expansion-history | reporting-DL-name |
 *    reporting-MTA-certificate | report-origin-authentication-check |
 *    trace-information | internal-trace-information | reporting-MTA-name |
 *    PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ReportDeliveryExtensions: EXTENSION[] = [
    message_security_label,
    content_correlator,
    redirection_history,
    originator_and_DL_expansion_history,
    reporting_DL_name,
    reporting_MTA_certificate,
    report_origin_authentication_check,
    trace_information,
    internal_trace_information,
    reporting_MTA_name,
    ...PrivateExtensions,
];

/* eslint-enable */
