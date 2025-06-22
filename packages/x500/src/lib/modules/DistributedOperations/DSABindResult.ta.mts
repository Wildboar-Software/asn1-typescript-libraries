/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    DSABindArgument,
    _decode_DSABindArgument,
    _encode_DSABindArgument,
} from "../DistributedOperations/DSABindArgument.ta.mjs";
/**
 * @summary DSABindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSABindResult   ::=   DSABindArgument
 * ```
 */
export type DSABindResult = DSABindArgument; // DefinedType

let _cached_decoder_for_DSABindResult: $.ASN1Decoder<DSABindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSABindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSABindResult} The decoded data structure.
 */
export function _decode_DSABindResult(el: _Element) {
    if (!_cached_decoder_for_DSABindResult) {
        _cached_decoder_for_DSABindResult = _decode_DSABindArgument;
    }
    return _cached_decoder_for_DSABindResult(el);
}

let _cached_encoder_for_DSABindResult: $.ASN1Encoder<DSABindResult> | null = null;

/**
 * @summary Encodes a(n) DSABindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSABindResult, encoded as an ASN.1 Element.
 */
export function _encode_DSABindResult(
    value: DSABindResult,
    elGetter: $.ASN1Encoder<DSABindResult>
) {
    if (!_cached_encoder_for_DSABindResult) {
        _cached_encoder_for_DSABindResult = _encode_DSABindArgument;
    }
    return _cached_encoder_for_DSABindResult(value, elGetter);
}


/* eslint-enable */
