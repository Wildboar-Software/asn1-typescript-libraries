/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSDestination, _decode_RCSDestination, _encode_RCSDestination } from "../TS33128Payloads/RCSDestination.ta.mjs";
// export { RCSDestination, _decode_RCSDestination, _encode_RCSDestination } from "../TS33128Payloads/RCSDestination.ta.mjs";


/**
 * @summary RCSDestinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSDestinations  ::=  SEQUENCE SIZE (1..MAX) OF RCSDestination
 * ```
 */
export
type RCSDestinations = RCSDestination[]; // SequenceOfType

let _cached_decoder_for_RCSDestinations: $.ASN1Decoder<RCSDestinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSDestinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSDestinations (el: _Element): RCSDestinations {
    if (!_cached_decoder_for_RCSDestinations) { _cached_decoder_for_RCSDestinations = $._decodeSequenceOf<RCSDestination>(() => _decode_RCSDestination); }
    return _cached_decoder_for_RCSDestinations(el);
}

let _cached_encoder_for_RCSDestinations: $.ASN1Encoder<RCSDestinations> | null = null;

/**
 * @summary Encodes a(n) RCSDestinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSDestinations, encoded as an ASN.1 Element.
 */
export
function _encode_RCSDestinations (value: RCSDestinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSDestinations) { _cached_encoder_for_RCSDestinations = $._encodeSequenceOf<RCSDestination>(() => _encode_RCSDestination, $.BER); }
    return _cached_encoder_for_RCSDestinations(value, elGetter);
}


/* eslint-enable */
