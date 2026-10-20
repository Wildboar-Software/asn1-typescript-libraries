/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";
// export { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";


/**
 * @summary IN_RequestShadowUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RequestShadowUpdateResult  ::= 
 *   RequestShadowUpdateResult(WITH COMPONENTS {
 *                               ...,
 *                               null  PRESENT
 *                             })
 * ```
 */
export
type IN_RequestShadowUpdateResult = RequestShadowUpdateResult; // DefinedType

let _cached_decoder_for_IN_RequestShadowUpdateResult: $.ASN1Decoder<IN_RequestShadowUpdateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RequestShadowUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_RequestShadowUpdateResult (el: _Element): IN_RequestShadowUpdateResult {
    if (!_cached_decoder_for_IN_RequestShadowUpdateResult) { _cached_decoder_for_IN_RequestShadowUpdateResult = _decode_RequestShadowUpdateResult; }
    return _cached_decoder_for_IN_RequestShadowUpdateResult(el);
}

let _cached_encoder_for_IN_RequestShadowUpdateResult: $.ASN1Encoder<IN_RequestShadowUpdateResult> | null = null;

/**
 * @summary Encodes a(n) IN_RequestShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RequestShadowUpdateResult, encoded as an ASN.1 Element.
 */
export
function _encode_IN_RequestShadowUpdateResult (value: IN_RequestShadowUpdateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_RequestShadowUpdateResult) { _cached_encoder_for_IN_RequestShadowUpdateResult = _encode_RequestShadowUpdateResult; }
    return _cached_encoder_for_IN_RequestShadowUpdateResult(value, elGetter);
}


/* eslint-enable */
