/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMDummyRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMDummyRes  ::=  MCMExtensions
 * ```
 */
export
type MCMDummyRes = MCMExtensions; // DefinedType

let _cached_decoder_for_MCMDummyRes: $.ASN1Decoder<MCMDummyRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMDummyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMDummyRes (el: _Element): MCMDummyRes {
    if (!_cached_decoder_for_MCMDummyRes) { _cached_decoder_for_MCMDummyRes = _decode_MCMExtensions; }
    return _cached_decoder_for_MCMDummyRes(el);
}

let _cached_encoder_for_MCMDummyRes: $.ASN1Encoder<MCMDummyRes> | null = null;

/**
 * @summary Encodes a(n) MCMDummyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMDummyRes, encoded as an ASN.1 Element.
 */
export
function _encode_MCMDummyRes (value: MCMDummyRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMDummyRes) { _cached_encoder_for_MCMDummyRes = _encode_MCMExtensions; }
    return _cached_encoder_for_MCMDummyRes(value, elGetter);
}

/* eslint-enable */
