/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary MessageIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageIdentifier  ::= 
 *   MilitaryString
 * ```
 */
export
type MessageIdentifier = MilitaryString; // DefinedType

let _cached_decoder_for_MessageIdentifier: $.ASN1Decoder<MessageIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageIdentifier (el: _Element): MessageIdentifier {
    if (!_cached_decoder_for_MessageIdentifier) { _cached_decoder_for_MessageIdentifier = _decode_MilitaryString; }
    return _cached_decoder_for_MessageIdentifier(el);
}

let _cached_encoder_for_MessageIdentifier: $.ASN1Encoder<MessageIdentifier> | null = null;

/**
 * @summary Encodes a(n) MessageIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_MessageIdentifier (value: MessageIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageIdentifier) { _cached_encoder_for_MessageIdentifier = _encode_MilitaryString; }
    return _cached_encoder_for_MessageIdentifier(value, elGetter);
}


/* eslint-enable */
