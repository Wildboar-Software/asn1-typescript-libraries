/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>(
            {
                "CONTEXT 0": [
                    "single_ASN1_type",
                    $._decode_implicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}

let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values> | null = null;

/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>
) {
    if (
        !_cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>(
            {
                single_ASN1_type: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}


/* eslint-enable */
