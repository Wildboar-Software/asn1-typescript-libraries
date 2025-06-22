/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IncrementalStepRefresh,
    _decode_IncrementalStepRefresh,
    _encode_IncrementalStepRefresh,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh.ta.mjs";
/**
 * @summary IncrementalRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalRefresh  ::=  SEQUENCE OF IncrementalStepRefresh
 * ```
 */
export type IncrementalRefresh = IncrementalStepRefresh[]; // SequenceOfType

let _cached_decoder_for_IncrementalRefresh: $.ASN1Decoder<IncrementalRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalRefresh} The decoded data structure.
 */
export function _decode_IncrementalRefresh(el: _Element) {
    if (!_cached_decoder_for_IncrementalRefresh) {
        _cached_decoder_for_IncrementalRefresh = $._decodeSequenceOf<IncrementalStepRefresh>(
            () => _decode_IncrementalStepRefresh
        );
    }
    return _cached_decoder_for_IncrementalRefresh(el);
}

let _cached_encoder_for_IncrementalRefresh: $.ASN1Encoder<IncrementalRefresh> | null = null;

/**
 * @summary Encodes a(n) IncrementalRefresh into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalRefresh(
    value: IncrementalRefresh,
    elGetter: $.ASN1Encoder<IncrementalRefresh>
) {
    if (!_cached_encoder_for_IncrementalRefresh) {
        _cached_encoder_for_IncrementalRefresh = $._encodeSequenceOf<IncrementalStepRefresh>(
            () => _encode_IncrementalStepRefresh,
            $.DER
        );
    }
    return _cached_encoder_for_IncrementalRefresh(value, elGetter);
}


/* eslint-enable */
