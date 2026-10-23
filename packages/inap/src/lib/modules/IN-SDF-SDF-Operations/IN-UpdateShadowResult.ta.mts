/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UpdateShadowResult, _decode_UpdateShadowResult, _encode_UpdateShadowResult } from "../DirectoryShadowAbstractService/UpdateShadowResult.ta.mjs";
// export { UpdateShadowResult, _decode_UpdateShadowResult, _encode_UpdateShadowResult } from "../DirectoryShadowAbstractService/UpdateShadowResult.ta.mjs";


/**
 * @summary IN_UpdateShadowResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-UpdateShadowResult  ::= 
 *   UpdateShadowResult(WITH COMPONENTS {
 *                        ...,
 *                        null  PRESENT
 *                      })
 * ```
 */
export
type IN_UpdateShadowResult = UpdateShadowResult; // DefinedType

let _cached_decoder_for_IN_UpdateShadowResult: $.ASN1Decoder<IN_UpdateShadowResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_UpdateShadowResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_UpdateShadowResult (el: _Element): IN_UpdateShadowResult {
    if (!_cached_decoder_for_IN_UpdateShadowResult) { _cached_decoder_for_IN_UpdateShadowResult = _decode_UpdateShadowResult; }
    return _cached_decoder_for_IN_UpdateShadowResult(el);
}

let _cached_encoder_for_IN_UpdateShadowResult: $.ASN1Encoder<IN_UpdateShadowResult> | null = null;

/**
 * @summary Encodes a(n) IN_UpdateShadowResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_UpdateShadowResult, encoded as an ASN.1 Element.
 */
export
function _encode_IN_UpdateShadowResult (value: IN_UpdateShadowResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_UpdateShadowResult) { _cached_encoder_for_IN_UpdateShadowResult = _encode_UpdateShadowResult; }
    return _cached_encoder_for_IN_UpdateShadowResult(value, elGetter);
}


/* eslint-enable */
