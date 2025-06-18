/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    MLData,
    _decode_MLData,
    _encode_MLData,
} from "../ExtendedSecurityServices-2006/MLData.ta.mjs";

/**
 * @summary MLExpansionHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MLExpansionHistory  ::=  SEQUENCE SIZE (1..ub-ml-expansion-history) OF MLData
 * ```
 */
export type MLExpansionHistory = MLData[]; // SequenceOfType


let _cached_decoder_for_MLExpansionHistory: $.ASN1Decoder<MLExpansionHistory> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MLExpansionHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MLExpansionHistory} The decoded data structure.
 */
export function _decode_MLExpansionHistory(el: _Element) {
    if (!_cached_decoder_for_MLExpansionHistory) {
        _cached_decoder_for_MLExpansionHistory = $._decodeSequenceOf<MLData>(
            () => _decode_MLData
        );
    }
    return _cached_decoder_for_MLExpansionHistory(el);
}


let _cached_encoder_for_MLExpansionHistory: $.ASN1Encoder<MLExpansionHistory> | null = null;


/**
 * @summary Encodes a(n) MLExpansionHistory into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MLExpansionHistory, encoded as an ASN.1 Element.
 */
export function _encode_MLExpansionHistory(
    value: MLExpansionHistory,
    elGetter: $.ASN1Encoder<MLExpansionHistory>
) {
    if (!_cached_encoder_for_MLExpansionHistory) {
        _cached_encoder_for_MLExpansionHistory = $._encodeSequenceOf<MLData>(
            () => _encode_MLData,
            $.DER
        );
    }
    return _cached_encoder_for_MLExpansionHistory(value, elGetter);
}


/* eslint-enable */
