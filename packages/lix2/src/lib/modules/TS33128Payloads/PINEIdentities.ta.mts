/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PINEIdentity, _decode_PINEIdentity, _encode_PINEIdentity } from "../TS33128Payloads/PINEIdentity.ta.mjs";
// export { PINEIdentity, _decode_PINEIdentity, _encode_PINEIdentity } from "../TS33128Payloads/PINEIdentity.ta.mjs";


/**
 * @summary PINEIdentities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINEIdentities  ::=  SEQUENCE (SIZE(1..MAX)) OF PINEIdentity
 * ```
 */
export
type PINEIdentities = PINEIdentity[]; // SequenceOfType

let _cached_decoder_for_PINEIdentities: $.ASN1Decoder<PINEIdentities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINEIdentities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINEIdentities (el: _Element): PINEIdentities {
    if (!_cached_decoder_for_PINEIdentities) { _cached_decoder_for_PINEIdentities = $._decodeSequenceOf<PINEIdentity>(() => _decode_PINEIdentity); }
    return _cached_decoder_for_PINEIdentities(el);
}

let _cached_encoder_for_PINEIdentities: $.ASN1Encoder<PINEIdentities> | null = null;

/**
 * @summary Encodes a(n) PINEIdentities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINEIdentities, encoded as an ASN.1 Element.
 */
export
function _encode_PINEIdentities (value: PINEIdentities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINEIdentities) { _cached_encoder_for_PINEIdentities = $._encodeSequenceOf<PINEIdentity>(() => _encode_PINEIdentity, $.BER); }
    return _cached_encoder_for_PINEIdentities(value, elGetter);
}


/* eslint-enable */
