/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary MessageInstructions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageInstructions  ::=  SEQUENCE OF MilitaryString
 * ```
 */
export
type MessageInstructions = MilitaryString[]; // SequenceOfType

let _cached_decoder_for_MessageInstructions: $.ASN1Decoder<MessageInstructions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageInstructions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageInstructions (el: _Element): MessageInstructions {
    if (!_cached_decoder_for_MessageInstructions) { _cached_decoder_for_MessageInstructions = $._decodeSequenceOf<MilitaryString>(() => _decode_MilitaryString); }
    return _cached_decoder_for_MessageInstructions(el);
}

let _cached_encoder_for_MessageInstructions: $.ASN1Encoder<MessageInstructions> | null = null;

/**
 * @summary Encodes a(n) MessageInstructions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageInstructions, encoded as an ASN.1 Element.
 */
export
function _encode_MessageInstructions (value: MessageInstructions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageInstructions) { _cached_encoder_for_MessageInstructions = $._encodeSequenceOf<MilitaryString>(() => _encode_MilitaryString, $.BER); }
    return _cached_encoder_for_MessageInstructions(value, elGetter);
}


/* eslint-enable */
