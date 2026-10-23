/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary GapOnResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapOnResource  ::= 
 *   Code
 * ```
 */
export
type GapOnResource = Code; // DefinedType

let _cached_decoder_for_GapOnResource: $.ASN1Decoder<GapOnResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapOnResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapOnResource (el: _Element): GapOnResource {
    if (!_cached_decoder_for_GapOnResource) { _cached_decoder_for_GapOnResource = _decode_Code; }
    return _cached_decoder_for_GapOnResource(el);
}

let _cached_encoder_for_GapOnResource: $.ASN1Encoder<GapOnResource> | null = null;

/**
 * @summary Encodes a(n) GapOnResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapOnResource, encoded as an ASN.1 Element.
 */
export
function _encode_GapOnResource (value: GapOnResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapOnResource) { _cached_encoder_for_GapOnResource = _encode_Code; }
    return _cached_encoder_for_GapOnResource(value, elGetter);
}


/* eslint-enable */
