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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { originator_and_DL_expansion_history } from '../MTSAbstractService/originator-and-DL-expansion-history.oa.mjs';
export { originator_and_DL_expansion_history } from '../MTSAbstractService/originator-and-DL-expansion-history.oa.mjs';
import { reporting_DL_name } from '../MTSAbstractService/reporting-DL-name.oa.mjs';
export { reporting_DL_name } from '../MTSAbstractService/reporting-DL-name.oa.mjs';
import { reporting_MTA_certificate } from '../MTSAbstractService/reporting-MTA-certificate.oa.mjs';
export { reporting_MTA_certificate } from '../MTSAbstractService/reporting-MTA-certificate.oa.mjs';
import { report_origin_authentication_check } from '../MTSAbstractService/report-origin-authentication-check.oa.mjs';
export { report_origin_authentication_check } from '../MTSAbstractService/report-origin-authentication-check.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { reporting_MTA_name } from '../MTSAbstractService/reporting-MTA-name.oa.mjs';
export { reporting_MTA_name } from '../MTSAbstractService/reporting-MTA-name.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';

/* START_OF_SYMBOL_DEFINITION ReportTransferEnvelopeExtensions */
/**
 * @summary ReportTransferEnvelopeExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTransferEnvelopeExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    message-security-label | redirection-history |
 *    originator-and-DL-expansion-history | reporting-DL-name |
 *    reporting-MTA-certificate | report-origin-authentication-check |
 *    internal-trace-information | reporting-MTA-name | PrivateExtensions,
 *    ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ReportTransferEnvelopeExtensions: EXTENSION[] = [
    message_security_label,
    redirection_history,
    originator_and_DL_expansion_history,
    reporting_DL_name,
    reporting_MTA_certificate,
    report_origin_authentication_check,
    internal_trace_information,
    reporting_MTA_name,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION ReportTransferEnvelopeExtensions */

/* eslint-enable */
