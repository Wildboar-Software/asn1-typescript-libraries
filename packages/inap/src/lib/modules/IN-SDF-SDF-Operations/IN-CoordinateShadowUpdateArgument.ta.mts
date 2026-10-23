/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CoordinateShadowUpdateArgument, _decode_CoordinateShadowUpdateArgument, _encode_CoordinateShadowUpdateArgument } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta.mjs";
// export { CoordinateShadowUpdateArgument, _decode_CoordinateShadowUpdateArgument, _encode_CoordinateShadowUpdateArgument } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta.mjs";


/**
 * @summary IN_CoordinateShadowUpdateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-CoordinateShadowUpdateArgument  ::= 
 *   CoordinateShadowUpdateArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          updateStrategy  (standard:total | standard:incremental)
 *                        })
 *      })
 * ```
 */
export
type IN_CoordinateShadowUpdateArgument = CoordinateShadowUpdateArgument; // DefinedType

let _cached_decoder_for_IN_CoordinateShadowUpdateArgument: $.ASN1Decoder<IN_CoordinateShadowUpdateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_CoordinateShadowUpdateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_CoordinateShadowUpdateArgument (el: _Element): IN_CoordinateShadowUpdateArgument {
    if (!_cached_decoder_for_IN_CoordinateShadowUpdateArgument) { _cached_decoder_for_IN_CoordinateShadowUpdateArgument = _decode_CoordinateShadowUpdateArgument; }
    return _cached_decoder_for_IN_CoordinateShadowUpdateArgument(el);
}

let _cached_encoder_for_IN_CoordinateShadowUpdateArgument: $.ASN1Encoder<IN_CoordinateShadowUpdateArgument> | null = null;

/**
 * @summary Encodes a(n) IN_CoordinateShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_CoordinateShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IN_CoordinateShadowUpdateArgument (value: IN_CoordinateShadowUpdateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_CoordinateShadowUpdateArgument) { _cached_encoder_for_IN_CoordinateShadowUpdateArgument = _encode_CoordinateShadowUpdateArgument; }
    return _cached_encoder_for_IN_CoordinateShadowUpdateArgument(value, elGetter);
}


/* eslint-enable */
