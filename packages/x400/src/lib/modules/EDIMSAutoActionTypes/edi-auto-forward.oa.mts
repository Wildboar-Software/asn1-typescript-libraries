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
    EDIAutoForwardRegistrationParameter,
    _decode_EDIAutoForwardRegistrationParameter,
    _encode_EDIAutoForwardRegistrationParameter,
} from '../EDIMSAutoActionTypes/EDIAutoForwardRegistrationParameter.ta.mjs';
import { auto_forwarding_loop } from '../EDIMSAutoActionTypes/auto-forwarding-loop.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { id_act_edi_auto_forward_v2 } from '../EDIMSObjectIdentifiers/id-act-edi-auto-forward-v2.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary edi_auto_forward
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-auto-forward AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  EDIAutoForwardRegistrationParameter
 *   ERRORS
 *     {auto-forwarding-loop | element-of-service-not-subscribed |
 *       inconsistent-request | originator-invalid |
 *       recipient-improperly-specified | remote-bind-error | security-error |
 *       submission-control-violated | unsupported-critical-function}
 *   IDENTIFIED BY              id-act-edi-auto-forward-v2
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<EDIAutoForwardRegistrationParameter>}
 * @implements {AUTO_ACTION<EDIAutoForwardRegistrationParameter>}
 */
export const edi_auto_forward: AUTO_ACTION<EDIAutoForwardRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_EDIAutoForwardRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_EDIAutoForwardRegistrationParameter,
    },
    '&Errors': [
        auto_forwarding_loop,
        element_of_service_not_subscribed,
        inconsistent_request,
        originator_invalid,
        recipient_improperly_specified,
        remote_bind_error,
        security_error,
        submission_control_violated,
        unsupported_critical_function,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_edi_auto_forward_v2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
