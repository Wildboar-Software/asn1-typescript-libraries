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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ValidateReply,
    _decode_ValidateReply,
    _encode_ValidateReply,
} from '../SWMF/ValidateReply.ta.mjs';
/**
 * @summary TerminateValidationReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationReply  ::=  CHOICE {
 *   noOutStandingValidation    [0]  NULL,
 *   validationCancelled        [1]  NULL,
 *   resultOfPartialValidation  [2]  ValidateReply
 * }
 * ```
 */
export type TerminateValidationReply =
    | { noOutStandingValidation: NULL } /* CHOICE_ALT_ROOT */
    | { validationCancelled: NULL } /* CHOICE_ALT_ROOT */
    | { resultOfPartialValidation: ValidateReply } /* CHOICE_ALT_ROOT */;


export const _decode_TerminateValidationReply = $._decode_inextensible_choice<TerminateValidationReply>(
        {
            'CONTEXT 0': [
                'noOutStandingValidation',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 1': [
                'validationCancelled',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 2': [
                'resultOfPartialValidation',
                $._decode_explicit<ValidateReply>(
                    () => _decode_ValidateReply
                ),
            ],
        }
    );


export const _encode_TerminateValidationReply = $._encode_choice<TerminateValidationReply>(
        {
            noOutStandingValidation: $._encode_implicit(
                _TagClass.context,
                0,
                () => $._encodeNull,
                $.BER
            ),
            validationCancelled: $._encode_implicit(
                _TagClass.context,
                1,
                () => $._encodeNull,
                $.BER
            ),
            resultOfPartialValidation: $._encode_explicit(
                _TagClass.context,
                2,
                () => _encode_ValidateReply,
                $.BER
            ),
        },
        $.BER
    );


/* eslint-enable */
