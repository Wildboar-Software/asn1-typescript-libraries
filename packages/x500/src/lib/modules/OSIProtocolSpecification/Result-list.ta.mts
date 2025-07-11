/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Result_list_Item,
    _decode_Result_list_Item,
    _encode_Result_list_Item,
} from "../OSIProtocolSpecification/Result-list-Item.ta.mjs";
/**
 * @summary Result_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list  ::=
 *   SEQUENCE SIZE (2) OF SEQUENCE {
 *     result                [0] IMPLICIT Result,
 *     transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name   OPTIONAL,
 *     provider-reason       [2] IMPLICIT INTEGER {
 *       reason-not-specified                     (0),
 *       abstract-syntax-not-supported            (1),
 *       proposed-transfer-syntaxes-not-supported (2)} OPTIONAL}
 * ```
 */
export type Result_list = Result_list_Item[]; // SequenceOfType

let _cached_decoder_for_Result_list: $.ASN1Decoder<Result_list> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Result_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list} The decoded data structure.
 */
export function _decode_Result_list(el: _Element): Result_list {
    if (!_cached_decoder_for_Result_list) {
        _cached_decoder_for_Result_list = $._decodeSequenceOf<Result_list_Item>(
            () => _decode_Result_list_Item
        );
    }
    return _cached_decoder_for_Result_list(el);
}

let _cached_encoder_for_Result_list: $.ASN1Encoder<Result_list> | null = null;

/**
 * @summary Encodes a(n) Result_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list, encoded as an ASN.1 Element.
 */
export function _encode_Result_list(
    value: Result_list,
    elGetter: $.ASN1Encoder<Result_list>
): _Element {
    if (!_cached_encoder_for_Result_list) {
        _cached_encoder_for_Result_list = $._encodeSequenceOf<Result_list_Item>(
            () => _encode_Result_list_Item,
            $.DER
        );
    }
    return _cached_encoder_for_Result_list(value, elGetter);
}


/* eslint-enable */
