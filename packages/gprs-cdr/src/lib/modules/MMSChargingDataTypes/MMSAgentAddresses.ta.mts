/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";


/**
 * @summary MMSAgentAddresses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAgentAddresses  ::=  SET  OF
 *    MMSAgentAddress
 * ```
 */
export
type MMSAgentAddresses = MMSAgentAddress[]; // SetOfType

let _cached_decoder_for_MMSAgentAddresses: $.ASN1Decoder<MMSAgentAddresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAgentAddresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAgentAddresses (el: _Element): MMSAgentAddresses {
    if (!_cached_decoder_for_MMSAgentAddresses) { _cached_decoder_for_MMSAgentAddresses = $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress); }
    return _cached_decoder_for_MMSAgentAddresses(el);
}

let _cached_encoder_for_MMSAgentAddresses: $.ASN1Encoder<MMSAgentAddresses> | null = null;

/**
 * @summary Encodes a(n) MMSAgentAddresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAgentAddresses, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAgentAddresses (value: MMSAgentAddresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAgentAddresses) { _cached_encoder_for_MMSAgentAddresses = $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER); }
    return _cached_encoder_for_MMSAgentAddresses(value, elGetter);
}


/* eslint-enable */
