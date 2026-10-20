/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CS3SCFCUSFGenericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS3SCFCUSFGenericPDUs  ::= 
 *   TCMessage{{SCFCUSFGeneric-Invokable}, {SCFCUSFGeneric-Returnable}}
 * ```
 */
export
type CS3SCFCUSFGenericPDUs = TCMessage; // DefinedType

let _cached_decoder_for_CS3SCFCUSFGenericPDUs: $.ASN1Decoder<CS3SCFCUSFGenericPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS3SCFCUSFGenericPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS3SCFCUSFGenericPDUs (el: _Element): CS3SCFCUSFGenericPDUs {
    if (!_cached_decoder_for_CS3SCFCUSFGenericPDUs) { _cached_decoder_for_CS3SCFCUSFGenericPDUs = _decode_TCMessage; }
    return _cached_decoder_for_CS3SCFCUSFGenericPDUs(el);
}

let _cached_encoder_for_CS3SCFCUSFGenericPDUs: $.ASN1Encoder<CS3SCFCUSFGenericPDUs> | null = null;

/**
 * @summary Encodes a(n) CS3SCFCUSFGenericPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS3SCFCUSFGenericPDUs, encoded as an ASN.1 Element.
 */
export
function _encode_CS3SCFCUSFGenericPDUs (value: CS3SCFCUSFGenericPDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS3SCFCUSFGenericPDUs) { _cached_encoder_for_CS3SCFCUSFGenericPDUs = _encode_TCMessage; }
    return _cached_encoder_for_CS3SCFCUSFGenericPDUs(value, elGetter);
}


/* eslint-enable */
