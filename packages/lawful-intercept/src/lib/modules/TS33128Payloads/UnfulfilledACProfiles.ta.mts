/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UnfulfilledACProfile, _decode_UnfulfilledACProfile, _encode_UnfulfilledACProfile } from "../TS33128Payloads/UnfulfilledACProfile.ta.mjs";
// export { UnfulfilledACProfile, _decode_UnfulfilledACProfile, _encode_UnfulfilledACProfile } from "../TS33128Payloads/UnfulfilledACProfile.ta.mjs";


/**
 * @summary UnfulfilledACProfiles
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnfulfilledACProfiles  ::=  SET OF UnfulfilledACProfile
 * ```
 */
export
type UnfulfilledACProfiles = UnfulfilledACProfile[]; // SetOfType

let _cached_decoder_for_UnfulfilledACProfiles: $.ASN1Decoder<UnfulfilledACProfiles> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnfulfilledACProfiles
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnfulfilledACProfiles (el: _Element): UnfulfilledACProfiles {
    if (!_cached_decoder_for_UnfulfilledACProfiles) { _cached_decoder_for_UnfulfilledACProfiles = $._decodeSetOf<UnfulfilledACProfile>(() => _decode_UnfulfilledACProfile); }
    return _cached_decoder_for_UnfulfilledACProfiles(el);
}

let _cached_encoder_for_UnfulfilledACProfiles: $.ASN1Encoder<UnfulfilledACProfiles> | null = null;

/**
 * @summary Encodes a(n) UnfulfilledACProfiles into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnfulfilledACProfiles, encoded as an ASN.1 Element.
 */
export
function _encode_UnfulfilledACProfiles (value: UnfulfilledACProfiles, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnfulfilledACProfiles) { _cached_encoder_for_UnfulfilledACProfiles = $._encodeSetOf<UnfulfilledACProfile>(() => _encode_UnfulfilledACProfile, $.BER); }
    return _cached_encoder_for_UnfulfilledACProfiles(value, elGetter);
}


/* eslint-enable */
