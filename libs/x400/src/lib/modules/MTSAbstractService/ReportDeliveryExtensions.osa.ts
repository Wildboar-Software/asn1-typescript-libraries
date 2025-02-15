/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa';
export { content_correlator } from '../MTSAbstractService/content-correlator.oa';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa';
import { originator_and_DL_expansion_history } from '../MTSAbstractService/originator-and-DL-expansion-history.oa';
export { originator_and_DL_expansion_history } from '../MTSAbstractService/originator-and-DL-expansion-history.oa';
import { reporting_DL_name } from '../MTSAbstractService/reporting-DL-name.oa';
export { reporting_DL_name } from '../MTSAbstractService/reporting-DL-name.oa';
import { reporting_MTA_certificate } from '../MTSAbstractService/reporting-MTA-certificate.oa';
export { reporting_MTA_certificate } from '../MTSAbstractService/reporting-MTA-certificate.oa';
import { report_origin_authentication_check } from '../MTSAbstractService/report-origin-authentication-check.oa';
export { report_origin_authentication_check } from '../MTSAbstractService/report-origin-authentication-check.oa';
import { trace_information } from '../MTAAbstractService/trace-information.oa';
export { trace_information } from '../MTAAbstractService/trace-information.oa';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
import { reporting_MTA_name } from '../MTSAbstractService/reporting-MTA-name.oa';
export { reporting_MTA_name } from '../MTSAbstractService/reporting-MTA-name.oa';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';

/* START_OF_SYMBOL_DEFINITION ReportDeliveryExtensions */
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
/* END_OF_SYMBOL_DEFINITION ReportDeliveryExtensions */

/* eslint-enable */
