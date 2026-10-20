/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary DestinationRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationRoutingAddress  ::=  SEQUENCE SIZE (1..3) OF CalledPartyNumber
 * ```
 */
export
type DestinationRoutingAddress = CalledPartyNumber[]; // SequenceOfType

let _cached_decoder_for_DestinationRoutingAddress: $.ASN1Decoder<DestinationRoutingAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationRoutingAddress (el: _Element): DestinationRoutingAddress {
    if (!_cached_decoder_for_DestinationRoutingAddress) { _cached_decoder_for_DestinationRoutingAddress = $._decodeSequenceOf<CalledPartyNumber>(() => _decode_CalledPartyNumber); }
    return _cached_decoder_for_DestinationRoutingAddress(el);
}

let _cached_encoder_for_DestinationRoutingAddress: $.ASN1Encoder<DestinationRoutingAddress> | null = null;

/**
 * @summary Encodes a(n) DestinationRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationRoutingAddress, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationRoutingAddress (value: DestinationRoutingAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationRoutingAddress) { _cached_encoder_for_DestinationRoutingAddress = $._encodeSequenceOf<CalledPartyNumber>(() => _encode_CalledPartyNumber, $.BER); }
    return _cached_encoder_for_DestinationRoutingAddress(value, elGetter);
}


/* eslint-enable */
