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
} from 'asn1-ts';
import {
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import {
    IPMAutoAdviseRegistrationParameter,
    _decode_IPMAutoAdviseRegistrationParameter,
    _encode_IPMAutoAdviseRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoAdviseRegistrationParameter.ta.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { id_aa_ipm_auto_advise } from '../IPMSObjectIdentifiers/id-aa-ipm-auto-advise.va.mjs';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary ipm_auto_advise
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-advise AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  IPMAutoAdviseRegistrationParameter
 *   ERRORS
 *     {inconsistent-request | element-of-service-not-subscribed |
 *       originator-invalid | recipient-improperly-specified | remote-bind-error |
 *       security-error | submission-control-violated |
 *       unsupported-critical-function}
 *   IDENTIFIED BY              id-aa-ipm-auto-advise
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<IPMAutoAdviseRegistrationParameter>}
 * @implements {AUTO_ACTION<IPMAutoAdviseRegistrationParameter>}
 */
export const ipm_auto_advise: AUTO_ACTION<IPMAutoAdviseRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_IPMAutoAdviseRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_IPMAutoAdviseRegistrationParameter,
    },
    '&Errors': [
        inconsistent_request,
        element_of_service_not_subscribed,
        originator_invalid,
        recipient_improperly_specified,
        remote_bind_error,
        security_error,
        submission_control_violated,
        unsupported_critical_function,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_aa_ipm_auto_advise /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
