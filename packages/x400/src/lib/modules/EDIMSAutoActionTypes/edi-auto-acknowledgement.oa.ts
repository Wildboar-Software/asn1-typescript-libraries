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
    EDIAutoAcknowledgementRegistrationParameter,
    _decode_EDIAutoAcknowledgementRegistrationParameter,
    _encode_EDIAutoAcknowledgementRegistrationParameter,
} from '../EDIMSAutoActionTypes/EDIAutoAcknowledgementRegistrationParameter.ta';
export {
    EDIAutoAcknowledgementRegistrationParameter,
    _decode_EDIAutoAcknowledgementRegistrationParameter,
    _encode_EDIAutoAcknowledgementRegistrationParameter,
} from '../EDIMSAutoActionTypes/EDIAutoAcknowledgementRegistrationParameter.ta';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
export { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
export { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
export { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
export { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
import { duplicate_edin } from '../EDIMSAutoActionTypes/duplicate-edin.oa';
export { duplicate_edin } from '../EDIMSAutoActionTypes/duplicate-edin.oa';
import { id_act_edi_auto_acknowledgement } from '../EDIMSObjectIdentifiers/id-act-edi-auto-acknowledgement.va';
export { id_act_edi_auto_acknowledgement } from '../EDIMSObjectIdentifiers/id-act-edi-auto-acknowledgement.va';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';

/* START_OF_SYMBOL_DEFINITION edi_auto_acknowledgement */
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
/* END_OF_SYMBOL_DEFINITION edi_auto_acknowledgement */

/* eslint-enable */
