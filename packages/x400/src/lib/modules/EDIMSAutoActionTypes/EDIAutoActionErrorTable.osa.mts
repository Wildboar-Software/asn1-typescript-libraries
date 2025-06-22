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
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
import { auto_forwarding_loop } from '../EDIMSAutoActionTypes/auto-forwarding-loop.oa.mjs';
import { duplicate_edin } from '../EDIMSAutoActionTypes/duplicate-edin.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
/**
 * @summary EDIAutoActionErrorTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIAutoActionErrorTable AUTO-ACTION-ERROR ::= {auto-forwarding-loop | duplicate-edin | element-of-service-not-subscribed |
 *    inconsistent-request | originator-invalid | recipient-improperly-specified |
 *    remote-bind-error | security-error | submission-control-violated |
 *    unsupported-critical-function}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR[]}
 *
 */
export const EDIAutoActionErrorTable: AUTO_ACTION_ERROR[] = [
    auto_forwarding_loop,
    duplicate_edin,
    element_of_service_not_subscribed,
    inconsistent_request,
    originator_invalid,
    recipient_improperly_specified,
    remote_bind_error,
    security_error,
    submission_control_violated,
    unsupported_critical_function,
];

/* eslint-enable */
