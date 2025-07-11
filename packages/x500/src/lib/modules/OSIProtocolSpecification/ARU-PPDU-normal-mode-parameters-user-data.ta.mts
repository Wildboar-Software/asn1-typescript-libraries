/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item.ta.mjs";
/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ARU_PPDU_normal_mode_parameters_user_data = {
    fully_encoded_data: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data: $.ASN1Decoder<ARU_PPDU_normal_mode_parameters_user_data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters_user_data(
    el: _Element
): ARU_PPDU_normal_mode_parameters_user_data {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data = $._decode_inextensible_choice<ARU_PPDU_normal_mode_parameters_user_data>(
            {
                "APPLICATION 1": [
                    "fully_encoded_data",
                    $._decode_implicit<
                        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                    >(() =>
                        $._decodeSequenceOf<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item>(
                            () =>
                                _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data(el);
}

let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data> | null = null;

/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters_user_data(
    value: ARU_PPDU_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data>
): _Element {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data = $._encode_choice<ARU_PPDU_normal_mode_parameters_user_data>(
            {
                fully_encoded_data: $._encode_implicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item>(
                            () =>
                                _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.DER
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}


/* eslint-enable */
