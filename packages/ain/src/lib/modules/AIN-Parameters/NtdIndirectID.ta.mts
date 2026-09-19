/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
// export { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";


/**
 * @summary NtdIndirectID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NtdIndirectID  ::=  SSPUserResourceID
 * ```
 */
export
type NtdIndirectID = SSPUserResourceID; // DefinedType

let _cached_decoder_for_NtdIndirectID: $.ASN1Decoder<NtdIndirectID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NtdIndirectID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NtdIndirectID (el: _Element): NtdIndirectID {
    if (!_cached_decoder_for_NtdIndirectID) { _cached_decoder_for_NtdIndirectID = _decode_SSPUserResourceID; }
    return _cached_decoder_for_NtdIndirectID(el);
}

let _cached_encoder_for_NtdIndirectID: $.ASN1Encoder<NtdIndirectID> | null = null;

/**
 * @summary Encodes a(n) NtdIndirectID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NtdIndirectID, encoded as an ASN.1 Element.
 */
export
function _encode_NtdIndirectID (value: NtdIndirectID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NtdIndirectID) { _cached_encoder_for_NtdIndirectID = _encode_SSPUserResourceID; }
    return _cached_encoder_for_NtdIndirectID(value, elGetter);
}


/* eslint-enable */
