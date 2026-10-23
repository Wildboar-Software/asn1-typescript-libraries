/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary SCFCUSFGenericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFCUSFGenericPDUs  ::= 
 *   TCMessage{{SCFCUSFGeneric-Invokable}, {SCFCUSFGeneric-Returnable}}
 * ```
 */
export
type SCFCUSFGenericPDUs = TCMessage; // DefinedType

let _cached_decoder_for_SCFCUSFGenericPDUs: $.ASN1Decoder<SCFCUSFGenericPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFCUSFGenericPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFCUSFGenericPDUs (el: _Element): SCFCUSFGenericPDUs {
    if (!_cached_decoder_for_SCFCUSFGenericPDUs) { _cached_decoder_for_SCFCUSFGenericPDUs = _decode_TCMessage; }
    return _cached_decoder_for_SCFCUSFGenericPDUs(el);
}

let _cached_encoder_for_SCFCUSFGenericPDUs: $.ASN1Encoder<SCFCUSFGenericPDUs> | null = null;

/**
 * @summary Encodes a(n) SCFCUSFGenericPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFCUSFGenericPDUs, encoded as an ASN.1 Element.
 */
export
function _encode_SCFCUSFGenericPDUs (value: SCFCUSFGenericPDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFCUSFGenericPDUs) { _cached_encoder_for_SCFCUSFGenericPDUs = _encode_TCMessage; }
    return _cached_encoder_for_SCFCUSFGenericPDUs(value, elGetter);
}


/* eslint-enable */
