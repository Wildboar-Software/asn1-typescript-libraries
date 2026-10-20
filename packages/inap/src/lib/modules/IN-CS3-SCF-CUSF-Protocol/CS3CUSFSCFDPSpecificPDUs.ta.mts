/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CS3CUSFSCFDPSpecificPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS3CUSFSCFDPSpecificPDUs  ::= 
 *   TCMessage{{CUSFSCFDPSpecific-Invokable}, {CUSFSCFDPSpecific-Returnable}}
 * ```
 */
export
type CS3CUSFSCFDPSpecificPDUs = TCMessage; // DefinedType

let _cached_decoder_for_CS3CUSFSCFDPSpecificPDUs: $.ASN1Decoder<CS3CUSFSCFDPSpecificPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS3CUSFSCFDPSpecificPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS3CUSFSCFDPSpecificPDUs (el: _Element): CS3CUSFSCFDPSpecificPDUs {
    if (!_cached_decoder_for_CS3CUSFSCFDPSpecificPDUs) { _cached_decoder_for_CS3CUSFSCFDPSpecificPDUs = _decode_TCMessage; }
    return _cached_decoder_for_CS3CUSFSCFDPSpecificPDUs(el);
}

let _cached_encoder_for_CS3CUSFSCFDPSpecificPDUs: $.ASN1Encoder<CS3CUSFSCFDPSpecificPDUs> | null = null;

/**
 * @summary Encodes a(n) CS3CUSFSCFDPSpecificPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS3CUSFSCFDPSpecificPDUs, encoded as an ASN.1 Element.
 */
export
function _encode_CS3CUSFSCFDPSpecificPDUs (value: CS3CUSFSCFDPSpecificPDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS3CUSFSCFDPSpecificPDUs) { _cached_encoder_for_CS3CUSFSCFDPSpecificPDUs = _encode_TCMessage; }
    return _cached_encoder_for_CS3CUSFSCFDPSpecificPDUs(value, elGetter);
}


/* eslint-enable */
