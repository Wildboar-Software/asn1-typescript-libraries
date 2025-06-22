/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OsiUnbindResult_fully_encoded_data_Item,
    _decode_OsiUnbindResult_fully_encoded_data_Item,
    _encode_OsiUnbindResult_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiUnbindResult-fully-encoded-data-Item.ta.mjs";
/**
 * @summary OsiUnbindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbindResult  ::=  CHOICE {
 *   fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier     Presentation-context-identifier,
 *     presentation-data-values            CHOICE {
 *       single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbindRes)}}}
 * ```
 */
export type OsiUnbindResult = {
    fully_encoded_data: OsiUnbindResult_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OsiUnbindResult: $.ASN1Decoder<OsiUnbindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbindResult} The decoded data structure.
 */
export function _decode_OsiUnbindResult(el: _Element) {
    if (!_cached_decoder_for_OsiUnbindResult) {
        _cached_decoder_for_OsiUnbindResult = $._decode_inextensible_choice<OsiUnbindResult>(
            {
                "APPLICATION 1": [
                    "fully_encoded_data",
                    $._decode_implicit<
                        OsiUnbindResult_fully_encoded_data_Item[]
                    >(() =>
                        $._decodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(
                            () =>
                                _decode_OsiUnbindResult_fully_encoded_data_Item
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiUnbindResult(el);
}

let _cached_encoder_for_OsiUnbindResult: $.ASN1Encoder<OsiUnbindResult> | null = null;

/**
 * @summary Encodes a(n) OsiUnbindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbindResult, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbindResult(
    value: OsiUnbindResult,
    elGetter: $.ASN1Encoder<OsiUnbindResult>
) {
    if (!_cached_encoder_for_OsiUnbindResult) {
        _cached_encoder_for_OsiUnbindResult = $._encode_choice<OsiUnbindResult>(
            {
                fully_encoded_data: $._encode_implicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(
                            () =>
                                _encode_OsiUnbindResult_fully_encoded_data_Item,
                            $.DER
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_OsiUnbindResult(value, elGetter);
}


/* eslint-enable */
