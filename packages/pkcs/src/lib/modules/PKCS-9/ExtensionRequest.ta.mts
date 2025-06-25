/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary ExtensionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionRequest  ::=  Extensions
 * ```
 */
export type ExtensionRequest = Extensions; // DefinedType


let _cached_decoder_for_ExtensionRequest: $.ASN1Decoder<ExtensionRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionRequest} The decoded data structure.
 */
export function _decode_ExtensionRequest(el: _Element): ExtensionRequest {
    if (!_cached_decoder_for_ExtensionRequest) {
        _cached_decoder_for_ExtensionRequest = _decode_Extensions;
    }
    return _cached_decoder_for_ExtensionRequest(el);
}


let _cached_encoder_for_ExtensionRequest: $.ASN1Encoder<ExtensionRequest> | null = null;


/**
 * @summary Encodes a(n) ExtensionRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionRequest, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionRequest(
    value: ExtensionRequest,
    elGetter: $.ASN1Encoder<ExtensionRequest>
): _Element {
    if (!_cached_encoder_for_ExtensionRequest) {
        _cached_encoder_for_ExtensionRequest = _encode_Extensions;
    }
    return _cached_encoder_for_ExtensionRequest(value, elGetter);
}


/* eslint-enable */
