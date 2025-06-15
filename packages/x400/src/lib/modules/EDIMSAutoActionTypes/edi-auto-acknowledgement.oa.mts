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
    EDIAutoAcknowledgementRegistrationParameter,
    _decode_EDIAutoAcknowledgementRegistrationParameter,
    _encode_EDIAutoAcknowledgementRegistrationParameter,
} from '../EDIMSAutoActionTypes/EDIAutoAcknowledgementRegistrationParameter.ta.mjs';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa.mjs';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa.mjs';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { duplicate_edin } from '../EDIMSAutoActionTypes/duplicate-edin.oa.mjs';
import { id_act_edi_auto_acknowledgement } from '../EDIMSObjectIdentifiers/id-act-edi-auto-acknowledgement.va.mjs';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary edi_auto_acknowledgement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-auto-acknowledgement AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  EDIAutoAcknowledgementRegistrationParameter
 *   ERRORS
 *     {submission-control-violated | recipient-improperly-specified |
 *       element-of-service-not-subscribed | originator-invalid |
 *       inconsistent-request | security-error | remote-bind-error |
 *       unsupported-critical-function | duplicate-edin}
 *   IDENTIFIED BY              id-act-edi-auto-acknowledgement
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<EDIAutoAcknowledgementRegistrationParameter>}
 * @implements {AUTO_ACTION<EDIAutoAcknowledgementRegistrationParameter>}
 */
export const edi_auto_acknowledgement: AUTO_ACTION<EDIAutoAcknowledgementRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_EDIAutoAcknowledgementRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_EDIAutoAcknowledgementRegistrationParameter,
    },
    '&Errors': [
        submission_control_violated,
        recipient_improperly_specified,
        element_of_service_not_subscribed,
        originator_invalid,
        inconsistent_request,
        security_error,
        remote_bind_error,
        unsupported_critical_function,
        duplicate_edin,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_edi_auto_acknowledgement /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
