/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary SCFCUSFDPSpecificPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFCUSFDPSpecificPDUs  ::= 
 *   TCMessage{{SCFCUSFDPSpecific-Invokable}, {SCFCUSFDPSpecific-Returnable}}
 * ```
 */
export
type SCFCUSFDPSpecificPDUs = TCMessage; // DefinedType

let _cached_decoder_for_SCFCUSFDPSpecificPDUs: $.ASN1Decoder<SCFCUSFDPSpecificPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFCUSFDPSpecificPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFCUSFDPSpecificPDUs (el: _Element): SCFCUSFDPSpecificPDUs {
    if (!_cached_decoder_for_SCFCUSFDPSpecificPDUs) { _cached_decoder_for_SCFCUSFDPSpecificPDUs = _decode_TCMessage; }
    return _cached_decoder_for_SCFCUSFDPSpecificPDUs(el);
}

let _cached_encoder_for_SCFCUSFDPSpecificPDUs: $.ASN1Encoder<SCFCUSFDPSpecificPDUs> | null = null;

/**
 * @summary Encodes a(n) SCFCUSFDPSpecificPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFCUSFDPSpecificPDUs, encoded as an ASN.1 Element.
 */
export
function _encode_SCFCUSFDPSpecificPDUs (value: SCFCUSFDPSpecificPDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFCUSFDPSpecificPDUs) { _cached_encoder_for_SCFCUSFDPSpecificPDUs = _encode_TCMessage; }
    return _cached_encoder_for_SCFCUSFDPSpecificPDUs(value, elGetter);
}


/* eslint-enable */
