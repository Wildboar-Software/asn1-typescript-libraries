/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralSubtree,
    _decode_GeneralSubtree,
    _encode_GeneralSubtree,
} from "../AttributeCertificateDefinitions/GeneralSubtree.ta.mjs";
/**
 * @summary GeneralSubtrees
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralSubtrees  ::=  SEQUENCE SIZE (1..MAX) OF GeneralSubtree
 * ```
 */
export type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType

let _cached_decoder_for_GeneralSubtrees: $.ASN1Decoder<GeneralSubtrees> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtrees
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtrees} The decoded data structure.
 */
export function _decode_GeneralSubtrees(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtrees) {
        _cached_decoder_for_GeneralSubtrees = $._decodeSequenceOf<GeneralSubtree>(
            () => _decode_GeneralSubtree
        );
    }
    return _cached_decoder_for_GeneralSubtrees(el);
}

let _cached_encoder_for_GeneralSubtrees: $.ASN1Encoder<GeneralSubtrees> | null = null;

/**
 * @summary Encodes a(n) GeneralSubtrees into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtrees, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtrees(
    value: GeneralSubtrees,
    elGetter: $.ASN1Encoder<GeneralSubtrees>
) {
    if (!_cached_encoder_for_GeneralSubtrees) {
        _cached_encoder_for_GeneralSubtrees = $._encodeSequenceOf<GeneralSubtree>(
            () => _encode_GeneralSubtree,
            $.DER
        );
    }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}


/* eslint-enable */
