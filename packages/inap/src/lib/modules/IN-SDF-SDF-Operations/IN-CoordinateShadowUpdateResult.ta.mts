/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CoordinateShadowUpdateResult, _decode_CoordinateShadowUpdateResult, _encode_CoordinateShadowUpdateResult } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta.mjs";
// export { CoordinateShadowUpdateResult, _decode_CoordinateShadowUpdateResult, _encode_CoordinateShadowUpdateResult } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta.mjs";


/**
 * @summary IN_CoordinateShadowUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-CoordinateShadowUpdateResult  ::= 
 *   CoordinateShadowUpdateResult(WITH COMPONENTS {
 *                                  ...,
 *                                  null  PRESENT
 *                                })
 * ```
 */
export
type IN_CoordinateShadowUpdateResult = CoordinateShadowUpdateResult; // DefinedType

let _cached_decoder_for_IN_CoordinateShadowUpdateResult: $.ASN1Decoder<IN_CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_CoordinateShadowUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_CoordinateShadowUpdateResult (el: _Element): IN_CoordinateShadowUpdateResult {
    if (!_cached_decoder_for_IN_CoordinateShadowUpdateResult) { _cached_decoder_for_IN_CoordinateShadowUpdateResult = _decode_CoordinateShadowUpdateResult; }
    return _cached_decoder_for_IN_CoordinateShadowUpdateResult(el);
}

let _cached_encoder_for_IN_CoordinateShadowUpdateResult: $.ASN1Encoder<IN_CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Encodes a(n) IN_CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export
function _encode_IN_CoordinateShadowUpdateResult (value: IN_CoordinateShadowUpdateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_CoordinateShadowUpdateResult) { _cached_encoder_for_IN_CoordinateShadowUpdateResult = _encode_CoordinateShadowUpdateResult; }
    return _cached_encoder_for_IN_CoordinateShadowUpdateResult(value, elGetter);
}


/* eslint-enable */
