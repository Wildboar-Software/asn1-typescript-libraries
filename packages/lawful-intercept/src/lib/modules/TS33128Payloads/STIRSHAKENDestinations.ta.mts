/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";
// export { STIRSHAKENDestination, _decode_STIRSHAKENDestination, _encode_STIRSHAKENDestination } from "../TS33128Payloads/STIRSHAKENDestination.ta.mjs";


/**
 * @summary STIRSHAKENDestinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENDestinations  ::=  SEQUENCE OF STIRSHAKENDestination
 * ```
 */
export
type STIRSHAKENDestinations = STIRSHAKENDestination[]; // SequenceOfType

let _cached_decoder_for_STIRSHAKENDestinations: $.ASN1Decoder<STIRSHAKENDestinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENDestinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENDestinations (el: _Element): STIRSHAKENDestinations {
    if (!_cached_decoder_for_STIRSHAKENDestinations) { _cached_decoder_for_STIRSHAKENDestinations = $._decodeSequenceOf<STIRSHAKENDestination>(() => _decode_STIRSHAKENDestination); }
    return _cached_decoder_for_STIRSHAKENDestinations(el);
}

let _cached_encoder_for_STIRSHAKENDestinations: $.ASN1Encoder<STIRSHAKENDestinations> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENDestinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENDestinations, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENDestinations (value: STIRSHAKENDestinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENDestinations) { _cached_encoder_for_STIRSHAKENDestinations = $._encodeSequenceOf<STIRSHAKENDestination>(() => _encode_STIRSHAKENDestination, $.BER); }
    return _cached_encoder_for_STIRSHAKENDestinations(value, elGetter);
}


/* eslint-enable */
