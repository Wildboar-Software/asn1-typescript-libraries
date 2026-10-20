/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MIDExtensions, _decode_MIDExtensions, _encode_MIDExtensions } from "../SS-MID-Operations-asn1-97/MIDExtensions.ta.mjs";
// export { MIDExtensions, _decode_MIDExtensions, _encode_MIDExtensions } from "../SS-MID-Operations-asn1-97/MIDExtensions.ta.mjs";


/**
 * @summary MIDDummyRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIDDummyRes  ::=  MIDExtensions
 * ```
 */
export
type MIDDummyRes = MIDExtensions; // DefinedType

let _cached_decoder_for_MIDDummyRes: $.ASN1Decoder<MIDDummyRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIDDummyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIDDummyRes (el: _Element): MIDDummyRes {
    if (!_cached_decoder_for_MIDDummyRes) { _cached_decoder_for_MIDDummyRes = _decode_MIDExtensions; }
    return _cached_decoder_for_MIDDummyRes(el);
}

let _cached_encoder_for_MIDDummyRes: $.ASN1Encoder<MIDDummyRes> | null = null;

/**
 * @summary Encodes a(n) MIDDummyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIDDummyRes, encoded as an ASN.1 Element.
 */
export
function _encode_MIDDummyRes (value: MIDDummyRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIDDummyRes) { _cached_encoder_for_MIDDummyRes = _encode_MIDExtensions; }
    return _cached_encoder_for_MIDDummyRes(value, elGetter);
}


/* eslint-enable */
