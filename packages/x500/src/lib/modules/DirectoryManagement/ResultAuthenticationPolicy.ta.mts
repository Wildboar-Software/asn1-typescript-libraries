/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RequestAuthenticationPolicy,
    _decode_RequestAuthenticationPolicy,
    _encode_RequestAuthenticationPolicy,
} from "../DirectoryManagement/RequestAuthenticationPolicy.ta.mjs";
/**
 * @summary ResultAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAuthenticationPolicy  ::=  RequestAuthenticationPolicy
 * ```
 */
export type ResultAuthenticationPolicy = RequestAuthenticationPolicy; // DefinedType

let _cached_decoder_for_ResultAuthenticationPolicy: $.ASN1Decoder<ResultAuthenticationPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAuthenticationPolicy} The decoded data structure.
 */
export function _decode_ResultAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_ResultAuthenticationPolicy) {
        _cached_decoder_for_ResultAuthenticationPolicy = _decode_RequestAuthenticationPolicy;
    }
    return _cached_decoder_for_ResultAuthenticationPolicy(el);
}

let _cached_encoder_for_ResultAuthenticationPolicy: $.ASN1Encoder<ResultAuthenticationPolicy> | null = null;

/**
 * @summary Encodes a(n) ResultAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_ResultAuthenticationPolicy(
    value: ResultAuthenticationPolicy,
    elGetter: $.ASN1Encoder<ResultAuthenticationPolicy>
) {
    if (!_cached_encoder_for_ResultAuthenticationPolicy) {
        _cached_encoder_for_ResultAuthenticationPolicy = _encode_RequestAuthenticationPolicy;
    }
    return _cached_encoder_for_ResultAuthenticationPolicy(value, elGetter);
}


/* eslint-enable */
