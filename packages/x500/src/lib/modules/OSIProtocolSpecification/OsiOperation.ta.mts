/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    OsiOperation_fully_encoded_data_Item,
    _decode_OsiOperation_fully_encoded_data_Item,
    _encode_OsiOperation_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiOperation-fully-encoded-data-Item.ta.mjs";
/**
 * @summary OsiOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation{OPERATION:Operations}  ::=  CHOICE {
 *   fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier    Presentation-context-identifier,
 *     presentation-data-values           CHOICE {
 *       single-ASN1-type              [0]
 *                      ABSTRACT-SYNTAX.&Type(OsiDirectoryOperation {{Operations}})}}}
 * ```
 */
export type OsiOperation = {
    fully_encoded_data: OsiOperation_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OsiOperation: $.ASN1Decoder<OsiOperation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation} The decoded data structure.
 */
export function _decode_OsiOperation(el: _Element) {
    if (!_cached_decoder_for_OsiOperation) {
        _cached_decoder_for_OsiOperation = $._decode_inextensible_choice<OsiOperation>(
            {
                "APPLICATION 1": [
                    "fully_encoded_data",
                    $._decode_implicit<OsiOperation_fully_encoded_data_Item[]>(
                        () =>
                            $._decodeSequenceOf<OsiOperation_fully_encoded_data_Item>(
                                () =>
                                    _decode_OsiOperation_fully_encoded_data_Item
                            )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiOperation(el);
}

let _cached_encoder_for_OsiOperation: $.ASN1Encoder<OsiOperation> | null = null;

/**
 * @summary Encodes a(n) OsiOperation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation(
    value: OsiOperation,
    elGetter: $.ASN1Encoder<OsiOperation>
) {
    if (!_cached_encoder_for_OsiOperation) {
        _cached_encoder_for_OsiOperation = $._encode_choice<OsiOperation>(
            {
                fully_encoded_data: $._encode_implicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiOperation_fully_encoded_data_Item>(
                            () => _encode_OsiOperation_fully_encoded_data_Item,
                            $.DER
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_OsiOperation(value, elGetter);
}


/* eslint-enable */
