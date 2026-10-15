/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACProfile, _decode_ACProfile, _encode_ACProfile } from "../TS33128Payloads/ACProfile.ta.mjs";
// export { ACProfile, _decode_ACProfile, _encode_ACProfile } from "../TS33128Payloads/ACProfile.ta.mjs";


/**
 * @summary ACProfiles
 * @description
 * 
 * Profiles of application clients (ACs) for which the EEC provides edge
 * enabling services, if available. See table 7.14.2.2-2.
 *
 * 3GPP TS 33.128, clause 7.14.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACProfiles  ::=  SET OF ACProfile
 * ```
 */
export
type ACProfiles = ACProfile[]; // SetOfType

let _cached_decoder_for_ACProfiles: $.ASN1Decoder<ACProfiles> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACProfiles
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACProfiles (el: _Element): ACProfiles {
    if (!_cached_decoder_for_ACProfiles) { _cached_decoder_for_ACProfiles = $._decodeSetOf<ACProfile>(() => _decode_ACProfile); }
    return _cached_decoder_for_ACProfiles(el);
}

let _cached_encoder_for_ACProfiles: $.ASN1Encoder<ACProfiles> | null = null;

/**
 * @summary Encodes a(n) ACProfiles into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACProfiles, encoded as an ASN.1 Element.
 */
export
function _encode_ACProfiles (value: ACProfiles, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACProfiles) { _cached_encoder_for_ACProfiles = $._encodeSetOf<ACProfile>(() => _encode_ACProfile, $.BER); }
    return _cached_encoder_for_ACProfiles(value, elGetter);
}


/* eslint-enable */
