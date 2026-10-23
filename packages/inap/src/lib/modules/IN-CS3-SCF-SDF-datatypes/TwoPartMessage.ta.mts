/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
// export { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";


/**
 * @summary TwoPartMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TwoPartMessage  ::=  NPartsMessage
 * ```
 */
export
type TwoPartMessage = NPartsMessage; // DefinedType

let _cached_decoder_for_TwoPartMessage: $.ASN1Decoder<TwoPartMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TwoPartMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TwoPartMessage (el: _Element): TwoPartMessage {
    if (!_cached_decoder_for_TwoPartMessage) { _cached_decoder_for_TwoPartMessage = _decode_NPartsMessage; }
    return _cached_decoder_for_TwoPartMessage(el);
}

let _cached_encoder_for_TwoPartMessage: $.ASN1Encoder<TwoPartMessage> | null = null;

/**
 * @summary Encodes a(n) TwoPartMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TwoPartMessage, encoded as an ASN.1 Element.
 */
export
function _encode_TwoPartMessage (value: TwoPartMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TwoPartMessage) { _cached_encoder_for_TwoPartMessage = _encode_NPartsMessage; }
    return _cached_encoder_for_TwoPartMessage(value, elGetter);
}


/* eslint-enable */
