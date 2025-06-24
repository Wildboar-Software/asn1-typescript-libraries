/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OsiOperation_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiOperation_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export const _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<OsiOperation_fully_encoded_data_Item_presentation_data_values> = $._decode_inextensible_choice<OsiOperation_fully_encoded_data_Item_presentation_data_values>(
    {
        "CONTEXT 0": [
            "single_ASN1_type",
            $._decode_explicit<_Element>(() => $._decodeAny),
        ],
    }
);

/**
 * @summary Encodes a(n) OsiOperation_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export const _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<OsiOperation_fully_encoded_data_Item_presentation_data_values> = $._encode_choice<OsiOperation_fully_encoded_data_Item_presentation_data_values>(
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
