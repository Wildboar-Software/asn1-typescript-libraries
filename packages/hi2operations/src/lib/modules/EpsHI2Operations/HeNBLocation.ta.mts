/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary HeNBLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeNBLocation  ::=  EPSLocation
 * ```
 */
export
type HeNBLocation = EPSLocation; // DefinedType

let _cached_decoder_for_HeNBLocation: $.ASN1Decoder<HeNBLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeNBLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HeNBLocation (el: _Element): HeNBLocation {
    if (!_cached_decoder_for_HeNBLocation) { _cached_decoder_for_HeNBLocation = _decode_EPSLocation; }
    return _cached_decoder_for_HeNBLocation(el);
}

let _cached_encoder_for_HeNBLocation: $.ASN1Encoder<HeNBLocation> | null = null;

/**
 * @summary Encodes a(n) HeNBLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeNBLocation, encoded as an ASN.1 Element.
 */
export
function _encode_HeNBLocation (value: HeNBLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HeNBLocation) { _cached_encoder_for_HeNBLocation = _encode_EPSLocation; }
    return _cached_encoder_for_HeNBLocation(value, elGetter);
}


/* eslint-enable */
