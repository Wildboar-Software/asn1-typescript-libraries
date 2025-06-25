/* eslint-disable */
import {
    BIT_STRING,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary PDV_list_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDV-list-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PDV_list_presentation_data_values =
    | { single_ASN1_type: _Element } /* CHOICE_ALT_ROOT */
    | { octet_aligned: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { arbitrary: BIT_STRING } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PDV_list_presentation_data_values: $.ASN1Decoder<PDV_list_presentation_data_values> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PDV_list_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDV_list_presentation_data_values} The decoded data structure.
 */
export function _decode_PDV_list_presentation_data_values(el: _Element): PDV_list_presentation_data_values {
    if (!_cached_decoder_for_PDV_list_presentation_data_values) {
        _cached_decoder_for_PDV_list_presentation_data_values = $._decode_inextensible_choice<PDV_list_presentation_data_values>(
            {
                'CONTEXT 0': [
                    'single_ASN1_type',
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                'CONTEXT 1': [
                    'octet_aligned',
                    $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    ),
                ],
                'CONTEXT 2': [
                    'arbitrary',
                    $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
                ],
            }
        );
    }
    return _cached_decoder_for_PDV_list_presentation_data_values(el);
}


let _cached_encoder_for_PDV_list_presentation_data_values: $.ASN1Encoder<PDV_list_presentation_data_values> | null = null;


/**
 * @summary Encodes a(n) PDV_list_presentation_data_values into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDV_list_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_PDV_list_presentation_data_values(
    value: PDV_list_presentation_data_values,
    elGetter: $.ASN1Encoder<PDV_list_presentation_data_values>
): _Element {
    if (!_cached_encoder_for_PDV_list_presentation_data_values) {
        _cached_encoder_for_PDV_list_presentation_data_values = $._encode_choice<PDV_list_presentation_data_values>(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
                octet_aligned: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeOctetString,
                    $.BER
                ),
                arbitrary: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeBitString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PDV_list_presentation_data_values(
        value,
        elGetter
    );
}


/* eslint-enable */
