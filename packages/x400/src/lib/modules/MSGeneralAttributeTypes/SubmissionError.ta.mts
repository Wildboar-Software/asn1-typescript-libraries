/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ImproperlySpecifiedRecipients,
    _decode_ImproperlySpecifiedRecipients,
    _encode_ImproperlySpecifiedRecipients,
} from '../MTSAbstractService/ImproperlySpecifiedRecipients.ta.mjs';
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from '../MTSAbstractService/SecurityProblem.ta.mjs';
import {
    ServiceErrorParameter,
    _decode_ServiceErrorParameter,
    _encode_ServiceErrorParameter,
} from '../MSAbstractService/ServiceErrorParameter.ta.mjs';
import {
    MessageGroupErrorParameter,
    _decode_MessageGroupErrorParameter,
    _encode_MessageGroupErrorParameter,
} from '../MSAbstractService/MessageGroupErrorParameter.ta.mjs';
import {
    MSExtensionErrorParameter,
    _decode_MSExtensionErrorParameter,
    _encode_MSExtensionErrorParameter,
} from '../MSAbstractService/MSExtensionErrorParameter.ta.mjs';
import {
    EntryClassErrorParameter,
    _decode_EntryClassErrorParameter,
    _encode_EntryClassErrorParameter,
} from '../MSAbstractService/EntryClassErrorParameter.ta.mjs';
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

let _cached_decoder_for_SubmissionError: $.ASN1Decoder<SubmissionError> | null = null;

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

let _cached_encoder_for_SubmissionError: $.ASN1Encoder<SubmissionError> | null = null;

/**
 * @summary Encodes a(n) SubmissionError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
