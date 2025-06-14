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
/* START_OF_SYMBOL_DEFINITION TerminateValidationReply */
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
/* END_OF_SYMBOL_DEFINITION TerminateValidationReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationReply */
let _cached_decoder_for_TerminateValidationReply: $.ASN1Decoder<TerminateValidationReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateValidationReply */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateValidationReply */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateValidationReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateValidationReply} The decoded data structure.
 */
export function _decode_TerminateValidationReply(el: _Element) {
    if (!_cached_decoder_for_TerminateValidationReply) {
        _cached_decoder_for_TerminateValidationReply = $._decode_inextensible_choice<TerminateValidationReply>(
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
    }
    return _cached_decoder_for_TerminateValidationReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateValidationReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationReply */
let _cached_encoder_for_TerminateValidationReply: $.ASN1Encoder<TerminateValidationReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateValidationReply */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateValidationReply */
/**
 * @summary Encodes a(n) TerminateValidationReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateValidationReply, encoded as an ASN.1 Element.
 */
export function _encode_TerminateValidationReply(
    value: TerminateValidationReply,
    elGetter: $.ASN1Encoder<TerminateValidationReply>
) {
    if (!_cached_encoder_for_TerminateValidationReply) {
        _cached_encoder_for_TerminateValidationReply = $._encode_choice<TerminateValidationReply>(
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
    }
    return _cached_encoder_for_TerminateValidationReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateValidationReply */

/* eslint-enable */
