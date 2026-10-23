/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CUSFSCFDPSpecificPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUSFSCFDPSpecificPDUs  ::= 
 *   TCMessage{{CUSFSCFDPSpecific-Invokable}, {CUSFSCFDPSpecific-Returnable}}
 * ```
 */
export
type CUSFSCFDPSpecificPDUs = TCMessage; // DefinedType

let _cached_decoder_for_CUSFSCFDPSpecificPDUs: $.ASN1Decoder<CUSFSCFDPSpecificPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUSFSCFDPSpecificPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUSFSCFDPSpecificPDUs (el: _Element): CUSFSCFDPSpecificPDUs {
    if (!_cached_decoder_for_CUSFSCFDPSpecificPDUs) { _cached_decoder_for_CUSFSCFDPSpecificPDUs = _decode_TCMessage; }
    return _cached_decoder_for_CUSFSCFDPSpecificPDUs(el);
}

let _cached_encoder_for_CUSFSCFDPSpecificPDUs: $.ASN1Encoder<CUSFSCFDPSpecificPDUs> | null = null;

/**
 * @summary Encodes a(n) CUSFSCFDPSpecificPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUSFSCFDPSpecificPDUs, encoded as an ASN.1 Element.
 */
export
function _encode_CUSFSCFDPSpecificPDUs (value: CUSFSCFDPSpecificPDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUSFSCFDPSpecificPDUs) { _cached_encoder_for_CUSFSCFDPSpecificPDUs = _encode_TCMessage; }
    return _cached_encoder_for_CUSFSCFDPSpecificPDUs(value, elGetter);
}


/* eslint-enable */
