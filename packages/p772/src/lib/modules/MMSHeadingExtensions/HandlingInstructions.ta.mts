/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary HandlingInstructions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInstructions  ::=  SEQUENCE OF MilitaryString
 * ```
 */
export
type HandlingInstructions = MilitaryString[]; // SequenceOfType

let _cached_decoder_for_HandlingInstructions: $.ASN1Decoder<HandlingInstructions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInstructions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInstructions (el: _Element): HandlingInstructions {
    if (!_cached_decoder_for_HandlingInstructions) { _cached_decoder_for_HandlingInstructions = $._decodeSequenceOf<MilitaryString>(() => _decode_MilitaryString); }
    return _cached_decoder_for_HandlingInstructions(el);
}

let _cached_encoder_for_HandlingInstructions: $.ASN1Encoder<HandlingInstructions> | null = null;

/**
 * @summary Encodes a(n) HandlingInstructions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInstructions, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInstructions (value: HandlingInstructions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInstructions) { _cached_encoder_for_HandlingInstructions = $._encodeSequenceOf<MilitaryString>(() => _encode_MilitaryString, $.BER); }
    return _cached_encoder_for_HandlingInstructions(value, elGetter);
}


/* eslint-enable */
