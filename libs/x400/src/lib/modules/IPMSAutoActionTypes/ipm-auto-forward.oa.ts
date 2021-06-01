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
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta';
export {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';
import {
    ipm_auto_forward_RegistrationParameter,
    _decode_ipm_auto_forward_RegistrationParameter,
    _encode_ipm_auto_forward_RegistrationParameter,
} from '../IPMSAutoActionTypes/ipm-auto-forward-RegistrationParameter.ta';
export {
    ipm_auto_forward_RegistrationParameter,
    _decode_ipm_auto_forward_RegistrationParameter,
    _encode_ipm_auto_forward_RegistrationParameter,
} from '../IPMSAutoActionTypes/ipm-auto-forward-RegistrationParameter.ta';
import { auto_forwarding_loop } from '../IPMSAutoActionTypes/auto-forwarding-loop.oa';
export { auto_forwarding_loop } from '../IPMSAutoActionTypes/auto-forwarding-loop.oa';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
export { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
export { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
import { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
export { ms_extension_error } from '../MSAbstractService/ms-extension-error.oa';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
export { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { service_error } from '../MSAbstractService/service-error.oa';
export { service_error } from '../MSAbstractService/service-error.oa';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
export { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
import { id_act_ipm_auto_forward } from '../MSObjectIdentifiers/id-act-ipm-auto-forward.va';
export { id_act_ipm_auto_forward } from '../MSObjectIdentifiers/id-act-ipm-auto-forward.va';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';

/* START_OF_SYMBOL_DEFINITION ipm_auto_forward */
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
/* END_OF_SYMBOL_DEFINITION ipm_auto_forward */

/* eslint-enable */
