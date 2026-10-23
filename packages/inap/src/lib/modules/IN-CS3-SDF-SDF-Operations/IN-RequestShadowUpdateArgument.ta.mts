/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestShadowUpdateArgument, _decode_RequestShadowUpdateArgument, _encode_RequestShadowUpdateArgument } from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta.mjs";
// export { RequestShadowUpdateArgument, _decode_RequestShadowUpdateArgument, _encode_RequestShadowUpdateArgument } from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta.mjs";


/**
 * @summary IN_RequestShadowUpdateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RequestShadowUpdateArgument  ::= 
 *   RequestShadowUpdateArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          requestedStrategy  (standard:incremental |
 *                                              standard:total)
 *                        })
 *      })
 * ```
 */
export
type IN_RequestShadowUpdateArgument = RequestShadowUpdateArgument; // DefinedType

let _cached_decoder_for_IN_RequestShadowUpdateArgument: $.ASN1Decoder<IN_RequestShadowUpdateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RequestShadowUpdateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_RequestShadowUpdateArgument (el: _Element): IN_RequestShadowUpdateArgument {
    if (!_cached_decoder_for_IN_RequestShadowUpdateArgument) { _cached_decoder_for_IN_RequestShadowUpdateArgument = _decode_RequestShadowUpdateArgument; }
    return _cached_decoder_for_IN_RequestShadowUpdateArgument(el);
}

let _cached_encoder_for_IN_RequestShadowUpdateArgument: $.ASN1Encoder<IN_RequestShadowUpdateArgument> | null = null;

/**
 * @summary Encodes a(n) IN_RequestShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RequestShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IN_RequestShadowUpdateArgument (value: IN_RequestShadowUpdateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_RequestShadowUpdateArgument) { _cached_encoder_for_IN_RequestShadowUpdateArgument = _encode_RequestShadowUpdateArgument; }
    return _cached_encoder_for_IN_RequestShadowUpdateArgument(value, elGetter);
}


/* eslint-enable */
