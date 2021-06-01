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
    ImproperlySpecifiedRecipients,
    _decode_ImproperlySpecifiedRecipients,
    _encode_ImproperlySpecifiedRecipients,
} from '../MTSAbstractService/ImproperlySpecifiedRecipients.ta';
export {
    ImproperlySpecifiedRecipients,
    _decode_ImproperlySpecifiedRecipients,
    _encode_ImproperlySpecifiedRecipients,
} from '../MTSAbstractService/ImproperlySpecifiedRecipients.ta';
import {
    SecurityProblem,
    SecurityProblem_assemby_instructions_conflict_with_security_services /* IMPORTED_LONG_NAMED_INTEGER */,
    assemby_instructions_conflict_with_security_services /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_authentication_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_confidentiality_association_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    confidentiality_association_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_forbidden_user_security_label_register /* IMPORTED_LONG_NAMED_INTEGER */,
    forbidden_user_security_label_register /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_incompatible_change_with_original_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    incompatible_change_with_original_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_invalid_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_invalid_security_label_update /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label_update /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_mandatory_parameter_absence /* IMPORTED_LONG_NAMED_INTEGER */,
    mandatory_parameter_absence /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_operation_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    operation_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_redirection_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    redirection_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_refused_alternate_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    refused_alternate_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_responder_credentials_checking_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    responder_credentials_checking_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_context_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unable_to_aggregate_security_labels /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_aggregate_security_labels /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_entry_class /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_entry_class /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_originally_intended_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originally_intended_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_security_label_update /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_security_label_update /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_user_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_user_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unknown_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from '../MTSAbstractService/SecurityProblem.ta';
export {
    SecurityProblem,
    SecurityProblem_assemby_instructions_conflict_with_security_services /* IMPORTED_LONG_NAMED_INTEGER */,
    assemby_instructions_conflict_with_security_services /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_authentication_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_authentication_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    authentication_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_confidentiality_association_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    confidentiality_association_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_decryption_key_unobtainable /* IMPORTED_LONG_NAMED_INTEGER */,
    decryption_key_unobtainable /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_failure_of_proof_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    failure_of_proof_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_forbidden_user_security_label_register /* IMPORTED_LONG_NAMED_INTEGER */,
    forbidden_user_security_label_register /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_incompatible_change_with_original_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    incompatible_change_with_original_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_integrity_failure_on_subject_message /* IMPORTED_LONG_NAMED_INTEGER */,
    integrity_failure_on_subject_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_invalid_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_invalid_security_label_update /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_security_label_update /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_key_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    key_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_mandatory_parameter_absence /* IMPORTED_LONG_NAMED_INTEGER */,
    mandatory_parameter_absence /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_operation_security_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    operation_security_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_redirection_prohibited /* IMPORTED_LONG_NAMED_INTEGER */,
    redirection_prohibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_refused_alternate_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    refused_alternate_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_repudiation_failure_of_message /* IMPORTED_LONG_NAMED_INTEGER */,
    repudiation_failure_of_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_responder_credentials_checking_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    responder_credentials_checking_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_context_failure /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_context_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    security_context_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_policy_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    security_policy_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_security_services_refusal /* IMPORTED_LONG_NAMED_INTEGER */,
    security_services_refusal /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_token_decryption_failed /* IMPORTED_LONG_NAMED_INTEGER */,
    token_decryption_failed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_token_error /* IMPORTED_LONG_NAMED_INTEGER */,
    token_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unable_to_aggregate_security_labels /* IMPORTED_LONG_NAMED_INTEGER */,
    unable_to_aggregate_security_labels /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_dl_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_dl_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_entry_class /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_entry_class /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_originally_intended_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originally_intended_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_originator_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_originator_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_recipient_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_recipient_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_security_label_update /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_security_label_update /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unauthorised_user_name /* IMPORTED_LONG_NAMED_INTEGER */,
    unauthorised_user_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unknown_security_label /* IMPORTED_LONG_NAMED_INTEGER */,
    unknown_security_label /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unsupported_algorithm_identifier /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_algorithm_identifier /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityProblem_unsupported_security_policy /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_security_policy /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from '../MTSAbstractService/SecurityProblem.ta';
import {
    ServiceErrorParameter,
    _decode_ServiceErrorParameter,
    _encode_ServiceErrorParameter,
} from '../MSAbstractService/ServiceErrorParameter.ta';
export {
    ServiceErrorParameter,
    _decode_ServiceErrorParameter,
    _encode_ServiceErrorParameter,
} from '../MSAbstractService/ServiceErrorParameter.ta';
import {
    MessageGroupErrorParameter,
    _decode_MessageGroupErrorParameter,
    _encode_MessageGroupErrorParameter,
} from '../MSAbstractService/MessageGroupErrorParameter.ta';
export {
    MessageGroupErrorParameter,
    _decode_MessageGroupErrorParameter,
    _encode_MessageGroupErrorParameter,
} from '../MSAbstractService/MessageGroupErrorParameter.ta';
import {
    MSExtensionErrorParameter,
    _decode_MSExtensionErrorParameter,
    _encode_MSExtensionErrorParameter,
} from '../MSAbstractService/MSExtensionErrorParameter.ta';
export {
    MSExtensionErrorParameter,
    _decode_MSExtensionErrorParameter,
    _encode_MSExtensionErrorParameter,
} from '../MSAbstractService/MSExtensionErrorParameter.ta';
import {
    EntryClassErrorParameter,
    _decode_EntryClassErrorParameter,
    _encode_EntryClassErrorParameter,
} from '../MSAbstractService/EntryClassErrorParameter.ta';
export {
    EntryClassErrorParameter,
    _decode_EntryClassErrorParameter,
    _encode_EntryClassErrorParameter,
} from '../MSAbstractService/EntryClassErrorParameter.ta';

/* START_OF_SYMBOL_DEFINITION SubmissionError */
/**
 * @summary SubmissionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionError  ::=  CHOICE {
 *   submission-control-violated        [1]  NULL,
 *   originator-invalid                 [2]  NULL,
 *   recipient-improperly-specified     [3]  ImproperlySpecifiedRecipients,
 *   element-of-service-not-subscribed  [4]  NULL,
 *   inconsistent-request               [11]  NULL,
 *   security-error                     [12]  SecurityProblem,
 *   unsupported-critical-function      [13]  NULL,
 *   remote-bind-error                  [15]  NULL,
 *   service-error                      [27]  ServiceErrorParameter,
 *   message-group-error                [30]  MessageGroupErrorParameter,
 *   ms-extension-error                 [31]  MSExtensionErrorParameter,
 *   entry-class-error                  [34]  EntryClassErrorParameter
 * }
 * ```
 */
export type SubmissionError =
    | { submission_control_violated: NULL } /* CHOICE_ALT_ROOT */
    | { originator_invalid: NULL } /* CHOICE_ALT_ROOT */
    | {
          recipient_improperly_specified: ImproperlySpecifiedRecipients;
      } /* CHOICE_ALT_ROOT */
    | { element_of_service_not_subscribed: NULL } /* CHOICE_ALT_ROOT */
    | { inconsistent_request: NULL } /* CHOICE_ALT_ROOT */
    | { security_error: SecurityProblem } /* CHOICE_ALT_ROOT */
    | { unsupported_critical_function: NULL } /* CHOICE_ALT_ROOT */
    | { remote_bind_error: NULL } /* CHOICE_ALT_ROOT */
    | { service_error: ServiceErrorParameter } /* CHOICE_ALT_ROOT */
    | { message_group_error: MessageGroupErrorParameter } /* CHOICE_ALT_ROOT */
    | { ms_extension_error: MSExtensionErrorParameter } /* CHOICE_ALT_ROOT */
    | { entry_class_error: EntryClassErrorParameter } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SubmissionError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionError */
let _cached_decoder_for_SubmissionError: $.ASN1Decoder<SubmissionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _decode_SubmissionError */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionError} The decoded data structure.
 */
export function _decode_SubmissionError(el: _Element) {
    if (!_cached_decoder_for_SubmissionError) {
        _cached_decoder_for_SubmissionError = $._decode_inextensible_choice<SubmissionError>(
            {
                'CONTEXT 1': [
                    'submission_control_violated',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 2': [
                    'originator_invalid',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 3': [
                    'recipient_improperly_specified',
                    $._decode_implicit<ImproperlySpecifiedRecipients>(
                        () => _decode_ImproperlySpecifiedRecipients
                    ),
                ],
                'CONTEXT 4': [
                    'element_of_service_not_subscribed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 11': [
                    'inconsistent_request',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 12': [
                    'security_error',
                    $._decode_implicit<SecurityProblem>(
                        () => _decode_SecurityProblem
                    ),
                ],
                'CONTEXT 13': [
                    'unsupported_critical_function',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 15': [
                    'remote_bind_error',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 27': [
                    'service_error',
                    $._decode_implicit<ServiceErrorParameter>(
                        () => _decode_ServiceErrorParameter
                    ),
                ],
                'CONTEXT 30': [
                    'message_group_error',
                    $._decode_implicit<MessageGroupErrorParameter>(
                        () => _decode_MessageGroupErrorParameter
                    ),
                ],
                'CONTEXT 31': [
                    'ms_extension_error',
                    $._decode_explicit<MSExtensionErrorParameter>(
                        () => _decode_MSExtensionErrorParameter
                    ),
                ],
                'CONTEXT 34': [
                    'entry_class_error',
                    $._decode_implicit<EntryClassErrorParameter>(
                        () => _decode_EntryClassErrorParameter
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SubmissionError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionError */
let _cached_encoder_for_SubmissionError: $.ASN1Encoder<SubmissionError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionError */

/* START_OF_SYMBOL_DEFINITION _encode_SubmissionError */
/**
 * @summary Encodes a(n) SubmissionError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionError, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionError(
    value: SubmissionError,
    elGetter: $.ASN1Encoder<SubmissionError>
) {
    if (!_cached_encoder_for_SubmissionError) {
        _cached_encoder_for_SubmissionError = $._encode_choice<SubmissionError>(
            {
                submission_control_violated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                originator_invalid: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
                recipient_improperly_specified: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ImproperlySpecifiedRecipients,
                    $.BER
                ),
                element_of_service_not_subscribed: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeNull,
                    $.BER
                ),
                inconsistent_request: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => $._encodeNull,
                    $.BER
                ),
                security_error: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () => _encode_SecurityProblem,
                    $.BER
                ),
                unsupported_critical_function: $._encode_implicit(
                    _TagClass.context,
                    13,
                    () => $._encodeNull,
                    $.BER
                ),
                remote_bind_error: $._encode_implicit(
                    _TagClass.context,
                    15,
                    () => $._encodeNull,
                    $.BER
                ),
                service_error: $._encode_implicit(
                    _TagClass.context,
                    27,
                    () => _encode_ServiceErrorParameter,
                    $.BER
                ),
                message_group_error: $._encode_implicit(
                    _TagClass.context,
                    30,
                    () => _encode_MessageGroupErrorParameter,
                    $.BER
                ),
                ms_extension_error: $._encode_explicit(
                    _TagClass.context,
                    31,
                    () => _encode_MSExtensionErrorParameter,
                    $.BER
                ),
                entry_class_error: $._encode_implicit(
                    _TagClass.context,
                    34,
                    () => _encode_EntryClassErrorParameter,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubmissionError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmissionError */

/* eslint-enable */
