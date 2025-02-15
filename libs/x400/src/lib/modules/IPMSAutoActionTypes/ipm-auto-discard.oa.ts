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
    IPMAutoDiscardRegistrationParameter,
    _decode_IPMAutoDiscardRegistrationParameter,
    _encode_IPMAutoDiscardRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoDiscardRegistrationParameter.ta';
export {
    IPMAutoDiscardRegistrationParameter,
    _decode_IPMAutoDiscardRegistrationParameter,
    _encode_IPMAutoDiscardRegistrationParameter,
} from '../IPMSAutoActionTypes/IPMAutoDiscardRegistrationParameter.ta';
import { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
export { submission_control_violated } from '../MTSAbstractService/submission-control-violated.oa';
import { ipm_auto_discard_error } from '../IPMSAutoActionTypes/ipm-auto-discard-error.oa';
export { ipm_auto_discard_error } from '../IPMSAutoActionTypes/ipm-auto-discard-error.oa';
import { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
export { originator_invalid } from '../MTSAbstractService/originator-invalid.oa';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
import { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
export { inconsistent_request } from '../MTSAbstractService/inconsistent-request.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
export { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa';
import { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
export { element_of_service_not_subscribed } from '../MTSAbstractService/element-of-service-not-subscribed.oa';
import { id_aa_ipm_auto_discard } from '../IPMSObjectIdentifiers/id-aa-ipm-auto-discard.va';
export { id_aa_ipm_auto_discard } from '../IPMSObjectIdentifiers/id-aa-ipm-auto-discard.va';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';

/* START_OF_SYMBOL_DEFINITION ipm_auto_discard */
/**
 * @summary ipm_auto_discard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-discard AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  IPMAutoDiscardRegistrationParameter
 *   ERRORS
 *     {submission-control-violated | ipm-auto-discard-error | originator-invalid
 *       | recipient-improperly-specified | inconsistent-request | security-error
 *       | unsupported-critical-function | remote-bind-error |
 *       element-of-service-not-subscribed}
 *   IDENTIFIED BY              id-aa-ipm-auto-discard
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<IPMAutoDiscardRegistrationParameter>}
 * @implements {AUTO_ACTION<IPMAutoDiscardRegistrationParameter>}
 */
export const ipm_auto_discard: AUTO_ACTION<IPMAutoDiscardRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_IPMAutoDiscardRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_IPMAutoDiscardRegistrationParameter,
    },
    '&Errors': [
        submission_control_violated,
        ipm_auto_discard_error,
        originator_invalid,
        recipient_improperly_specified,
        inconsistent_request,
        security_error,
        unsupported_critical_function,
        remote_bind_error,
        element_of_service_not_subscribed,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_aa_ipm_auto_discard /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_auto_discard */

/* eslint-enable */
