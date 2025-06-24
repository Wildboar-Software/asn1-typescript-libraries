/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;

/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv} The decoded data structure.
 */
export const _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv: $.ASN1Decoder<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv> = $._decode_inextensible_choice<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv>(
    {
        "CONTEXT 0": [
            "single_ASN1_type",
            $._decode_explicit<_Element>(() => $._decodeAny),
        ],
    }
);

/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv, encoded as an ASN.1 Element.
 */
export const _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv> = $._encode_choice<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_pdv>(
    {
        single_ASN1_type: $._encode_explicit(
            _TagClass.context,
            0,
            () => $._encodeAny,
            $.BER
        ),
    },
    $.BER
);


/* eslint-enable */
