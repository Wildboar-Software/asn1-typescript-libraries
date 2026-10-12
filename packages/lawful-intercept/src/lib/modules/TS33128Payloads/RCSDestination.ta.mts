/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";
// export { RCSIdentity, _decode_RCSIdentity, _encode_RCSIdentity } from "../TS33128Payloads/RCSIdentity.ta.mjs";


/**
 * @summary RCSDestination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSDestination  ::=  SEQUENCE SIZE (1..MAX) OF RCSIdentity
 * ```
 */
export
type RCSDestination = RCSIdentity[]; // SequenceOfType

let _cached_decoder_for_RCSDestination: $.ASN1Decoder<RCSDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSDestination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSDestination (el: _Element): RCSDestination {
    if (!_cached_decoder_for_RCSDestination) { _cached_decoder_for_RCSDestination = $._decodeSequenceOf<RCSIdentity>(() => _decode_RCSIdentity); }
    return _cached_decoder_for_RCSDestination(el);
}

let _cached_encoder_for_RCSDestination: $.ASN1Encoder<RCSDestination> | null = null;

/**
 * @summary Encodes a(n) RCSDestination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSDestination, encoded as an ASN.1 Element.
 */
export
function _encode_RCSDestination (value: RCSDestination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSDestination) { _cached_encoder_for_RCSDestination = $._encodeSequenceOf<RCSIdentity>(() => _encode_RCSIdentity, $.BER); }
    return _cached_encoder_for_RCSDestination(value, elGetter);
}


/* eslint-enable */
