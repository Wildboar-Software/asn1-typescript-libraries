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
    FNUAMSReasonCodeField,
    _decode_FNUAMSReasonCodeField,
    _encode_FNUAMSReasonCodeField,
} from '../EDIMSInformationObjects/FNUAMSReasonCodeField.ta.mjs';
import {
    FNUserReasonCodeField,
    _decode_FNUserReasonCodeField,
    _encode_FNUserReasonCodeField,
} from '../EDIMSInformationObjects/FNUserReasonCodeField.ta.mjs';
import {
    FNPDAUReasonCodeField,
    _decode_FNPDAUReasonCodeField,
    _encode_FNPDAUReasonCodeField,
} from '../EDIMSInformationObjects/FNPDAUReasonCodeField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FNReasonCodeField */
/**
 * @summary FNReasonCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNReasonCodeField  ::=  CHOICE {
 *   fn-ua-ms-reason-code  [0]  FNUAMSReasonCodeField,
 *   fn-user-reason-code   [1]  FNUserReasonCodeField,
 *   fn-pdau-reason-code   [2]  FNPDAUReasonCodeField
 * }
 * ```
 */
export type FNReasonCodeField =
    | { fn_ua_ms_reason_code: FNUAMSReasonCodeField } /* CHOICE_ALT_ROOT */
    | { fn_user_reason_code: FNUserReasonCodeField } /* CHOICE_ALT_ROOT */
    | { fn_pdau_reason_code: FNPDAUReasonCodeField } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNReasonCodeField */
let _cached_decoder_for_FNReasonCodeField: $.ASN1Decoder<FNReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNReasonCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNReasonCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNReasonCodeField} The decoded data structure.
 */
export function _decode_FNReasonCodeField(el: _Element) {
    if (!_cached_decoder_for_FNReasonCodeField) {
        _cached_decoder_for_FNReasonCodeField = $._decode_inextensible_choice<FNReasonCodeField>(
            {
                'CONTEXT 0': [
                    'fn_ua_ms_reason_code',
                    $._decode_implicit<FNUAMSReasonCodeField>(
                        () => _decode_FNUAMSReasonCodeField
                    ),
                ],
                'CONTEXT 1': [
                    'fn_user_reason_code',
                    $._decode_implicit<FNUserReasonCodeField>(
                        () => _decode_FNUserReasonCodeField
                    ),
                ],
                'CONTEXT 2': [
                    'fn_pdau_reason_code',
                    $._decode_implicit<FNPDAUReasonCodeField>(
                        () => _decode_FNPDAUReasonCodeField
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FNReasonCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNReasonCodeField */
let _cached_encoder_for_FNReasonCodeField: $.ASN1Encoder<FNReasonCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNReasonCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNReasonCodeField */
/**
 * @summary Encodes a(n) FNReasonCodeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNReasonCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNReasonCodeField(
    value: FNReasonCodeField,
    elGetter: $.ASN1Encoder<FNReasonCodeField>
) {
    if (!_cached_encoder_for_FNReasonCodeField) {
        _cached_encoder_for_FNReasonCodeField = $._encode_choice<FNReasonCodeField>(
            {
                fn_ua_ms_reason_code: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_FNUAMSReasonCodeField,
                    $.BER
                ),
                fn_user_reason_code: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_FNUserReasonCodeField,
                    $.BER
                ),
                fn_pdau_reason_code: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_FNPDAUReasonCodeField,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FNReasonCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNReasonCodeField */

/* eslint-enable */
