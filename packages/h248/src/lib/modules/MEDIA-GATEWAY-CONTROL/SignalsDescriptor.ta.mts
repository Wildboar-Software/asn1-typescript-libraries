/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SignalRequest, _decode_SignalRequest, _encode_SignalRequest } from "../MEDIA-GATEWAY-CONTROL/SignalRequest.ta.mjs";


/**
 * @summary SignalsDescriptor
 * @description
 * 
 * Signals and sequential signal lists to apply to a termination (ITU-T Rec.
 * H.248.1 (03/2013) clause 7.1.11).
 *
 * An empty descriptor stops signals that are already playing, except a signal
 * that reappears with KeepActive and has not finished. Signals and lists in one
 * descriptor are played at the same time. Support of sequential lists is
 * optional. A new descriptor replaces the previous one. A list whose identifier
 * matches a list already playing keeps playing; the type and signal sequence in
 * the replacement are ignored.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalsDescriptor  ::=  SEQUENCE OF SignalRequest
 * ```
 */
export
type SignalsDescriptor = SignalRequest[]; // SequenceOfType

let _cached_decoder_for_SignalsDescriptor: $.ASN1Decoder<SignalsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalsDescriptor (el: _Element): SignalsDescriptor {
    if (!_cached_decoder_for_SignalsDescriptor) { _cached_decoder_for_SignalsDescriptor = $._decodeSequenceOf<SignalRequest>(() => _decode_SignalRequest); }
    return _cached_decoder_for_SignalsDescriptor(el);
}

let _cached_encoder_for_SignalsDescriptor: $.ASN1Encoder<SignalsDescriptor> | null = null;

/**
 * @summary Encodes a(n) SignalsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_SignalsDescriptor (value: SignalsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalsDescriptor) { _cached_encoder_for_SignalsDescriptor = $._encodeSequenceOf<SignalRequest>(() => _encode_SignalRequest, $.BER); }
    return _cached_encoder_for_SignalsDescriptor(value, elGetter);
}


/* eslint-enable */
