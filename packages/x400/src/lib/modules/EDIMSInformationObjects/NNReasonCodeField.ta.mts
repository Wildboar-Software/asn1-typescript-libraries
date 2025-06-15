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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    NNUAMSReasonCodeField,
    _decode_NNUAMSReasonCodeField,
    _encode_NNUAMSReasonCodeField,
} from '../EDIMSInformationObjects/NNUAMSReasonCodeField.ta.mjs';
import {
    NNUserReasonCodeField,
    _decode_NNUserReasonCodeField,
    _encode_NNUserReasonCodeField,
} from '../EDIMSInformationObjects/NNUserReasonCodeField.ta.mjs';
import {
    NNPDAUReasonCodeField,
    _decode_NNPDAUReasonCodeField,
    _encode_NNPDAUReasonCodeField,
} from '../EDIMSInformationObjects/NNPDAUReasonCodeField.ta.mjs';
/**
 * @summary NNReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNReasonCodeField  ::=  CHOICE {
 *   nn-ua-ms-reason-code  [0]  NNUAMSReasonCodeField,
 *   nn-user-reason-code   [1]  NNUserReasonCodeField,
 *   nn-pdau-reason-code   [2]  NNPDAUReasonCodeField
 * }
 * ```
 */
export type NNReasonCodeField =
    | { nn_ua_ms_reason_code: NNUAMSReasonCodeField } /* CHOICE_ALT_ROOT */
    | { nn_user_reason_code: NNUserReasonCodeField } /* CHOICE_ALT_ROOT */
    | { nn_pdau_reason_code: NNPDAUReasonCodeField } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NNReasonCodeField: $.ASN1Decoder<NNReasonCodeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNReasonCodeField} The decoded data structure.
 */
export function _decode_NNReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_NNReasonCodeField) {
        _cached_decoder_for_NNReasonCodeField = $._decode_inextensible_choice<NNReasonCodeField>(
            {
                'CONTEXT 0': [
                    'nn_ua_ms_reason_code',
                    $._decode_implicit<NNUAMSReasonCodeField>(
                        () => _decode_NNUAMSReasonCodeField
                    ),
                ],
                'CONTEXT 1': [
                    'nn_user_reason_code',
                    $._decode_implicit<NNUserReasonCodeField>(
                        () => _decode_NNUserReasonCodeField
                    ),
                ],
                'CONTEXT 2': [
                    'nn_pdau_reason_code',
                    $._decode_implicit<NNPDAUReasonCodeField>(
                        () => _decode_NNPDAUReasonCodeField
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_NNReasonCodeField(el);
}

let _cached_encoder_for_NNReasonCodeField: $.ASN1Encoder<NNReasonCodeField> | null = null;

/**
 * @summary Encodes a(n) NNReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNReasonCodeField(
    value: NNReasonCodeField,
    elGetter: $.ASN1Encoder<NNReasonCodeField>
) {
    if (!_cached_encoder_for_NNReasonCodeField) {
        _cached_encoder_for_NNReasonCodeField = $._encode_choice<NNReasonCodeField>(
            {
                nn_ua_ms_reason_code: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_NNUAMSReasonCodeField,
                    $.BER
                ),
                nn_user_reason_code: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NNUserReasonCodeField,
                    $.BER
                ),
                nn_pdau_reason_code: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_NNPDAUReasonCodeField,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_NNReasonCodeField(value, elGetter);
}


/* eslint-enable */
