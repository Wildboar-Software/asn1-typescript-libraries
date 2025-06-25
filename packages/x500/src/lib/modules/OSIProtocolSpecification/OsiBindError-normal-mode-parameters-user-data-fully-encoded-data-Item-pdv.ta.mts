/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv: $.ASN1Decoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
    el: _Element
): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv = $._decode_inextensible_choice<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv>(
            {
                "CONTEXT 0": [
                    "single_ASN1_type",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
        el
    );
}

let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv> | null = null;

/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv>
): _Element {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv = $._encode_choice<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv>(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv(
        value,
        elGetter
    );
}


/* eslint-enable */
