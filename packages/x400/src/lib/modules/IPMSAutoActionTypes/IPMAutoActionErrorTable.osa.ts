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
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';
import { auto_forwarding_loop } from '../IPMSAutoActionTypes/auto-forwarding-loop.oa.js';
export { auto_forwarding_loop } from '../IPMSAutoActionTypes/auto-forwarding-loop.oa.js';
import { duplicate_ipn } from '../IPMSAutoActionTypes/duplicate-ipn.oa.js';
export { duplicate_ipn } from '../IPMSAutoActionTypes/duplicate-ipn.oa.js';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.js';
export { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.js';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.js';
export { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.js';
import { ipm_auto_discard_error } from '../IPMSAutoActionTypes/ipm-auto-discard-error.oa.js';
export { ipm_auto_discard_error } from '../IPMSAutoActionTypes/ipm-auto-discard-error.oa.js';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.js';
export { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.js';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.js';
export { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.js';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.js';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.js';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.js';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.js';
import { security_error } from '../MTSAbstractService/security-error.oa.js';
export { security_error } from '../MTSAbstractService/security-error.oa.js';
import { service_error } from '../MSAbstractService/service-error.oa.js';
export { service_error } from '../MSAbstractService/service-error.oa.js';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.js';
export { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.js';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.js';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.js';

/* START_OF_SYMBOL_DEFINITION IPMAutoActionErrorTable */
/**
 * @summary IPMAutoActionErrorTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoActionErrorTable AUTO-ACTION-ERROR ::= {... -- 1994 extension additions --, auto-forwarding-loop | duplicate-ipn |
 *    element-of-service-not-subscribed | inconsistent-request |
 *    ipm-auto-discard-error | ms-extension-error | originator-invalid |
 *    recipient-improperly-specified | remote-bind-error | security-error |
 *    service-error | submission-control-violated | unsupported-critical-function}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR[]}
 *
 */
export const IPMAutoActionErrorTable: AUTO_ACTION_ERROR[] = [
    /* OBJECT_SET_EXTENSION_MARKER */ auto_forwarding_loop,
    duplicate_ipn,
    element_of_service_not_subscribed,
    inconsistent_request,
    ipm_auto_discard_error,
    ms_extension_error,
    originator_invalid,
    recipient_improperly_specified,
    remote_bind_error,
    security_error,
    service_error,
    submission_control_violated,
    unsupported_critical_function,
];
/* END_OF_SYMBOL_DEFINITION IPMAutoActionErrorTable */

/* eslint-enable */
