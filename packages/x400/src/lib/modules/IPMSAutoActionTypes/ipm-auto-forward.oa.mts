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
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import {
    ipm_auto_forward_RegistrationParameter,
    _decode_ipm_auto_forward_RegistrationParameter,
    _encode_ipm_auto_forward_RegistrationParameter,
} from '../IPMSAutoActionTypes/ipm-auto-forward-RegistrationParameter.ta.mjs';
import { auto_forwarding_loop } from '../IPMSAutoActionTypes/auto-forwarding-loop.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { id_act_ipm_auto_forward } from '../MSObjectIdentifiers/id-act-ipm-auto-forward.va.mjs';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary ipm_auto_forward
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-forward AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS
 *     CHOICE {ipm-auto-forward-registration-parameter
 *               IPMAutoForwardRegistrationParameter-- used in 1994 Application Contexts only -- ,
 *             auto-forward-registration-parameter-88
 *               AutoForwardRegistrationParameter88
 *   } -- used in 1988 Application Contexts only
 *   ERRORS
 *     {auto-forwarding-loop | element-of-service-not-subscribed |
 *       inconsistent-request | ms-extension-error | originator-invalid |
 *       recipient-improperly-specified | remote-bind-error | security-error |
 *       service-error | submission-control-violated |
 *       unsupported-critical-function, ...}
 *   IDENTIFIED BY              id-act-ipm-auto-forward
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<ipm_auto_forward_RegistrationParameter>}
 * @implements {AUTO_ACTION<ipm_auto_forward_RegistrationParameter>}
 */
export const ipm_auto_forward: AUTO_ACTION<ipm_auto_forward_RegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_ipm_auto_forward_RegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_ipm_auto_forward_RegistrationParameter,
    },
    '&Errors': [
        auto_forwarding_loop,
        element_of_service_not_subscribed,
        inconsistent_request,
        ms_extension_error,
        originator_invalid,
        recipient_improperly_specified,
        remote_bind_error,
        security_error,
        service_error,
        submission_control_violated,
        unsupported_critical_function,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_ipm_auto_forward /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
