/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EpcFormat_fields_Item_charField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-charField ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EpcFormat_fields_Item_charField =
    | { characters: INTEGER } /* CHOICE_ALT_ROOT */
    | { maxValue: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EpcFormat_fields_Item_charField: $.ASN1Decoder<EpcFormat_fields_Item_charField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_charField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item_charField} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item_charField(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item_charField) {
        _cached_decoder_for_EpcFormat_fields_Item_charField = $._decode_inextensible_choice<EpcFormat_fields_Item_charField>(
            {
                "CONTEXT 0": [
                    "characters",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
                "CONTEXT 1": [
                    "maxValue",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_EpcFormat_fields_Item_charField(el);
}

let _cached_encoder_for_EpcFormat_fields_Item_charField: $.ASN1Encoder<EpcFormat_fields_Item_charField> | null = null;

/**
 * @summary Encodes a(n) EpcFormat_fields_Item_charField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_charField, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item_charField(
    value: EpcFormat_fields_Item_charField,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item_charField>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item_charField) {
        _cached_encoder_for_EpcFormat_fields_Item_charField = $._encode_choice<EpcFormat_fields_Item_charField>(
            {
                characters: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.DER
                ),
                maxValue: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_EpcFormat_fields_Item_charField(value, elGetter);
}


/* eslint-enable */
