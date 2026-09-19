/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary PINProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINProfile  ::=  XMLType
 * ```
 */
export
type PINProfile = XMLType; // DefinedType

let _cached_decoder_for_PINProfile: $.ASN1Decoder<PINProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINProfile (el: _Element): PINProfile {
    if (!_cached_decoder_for_PINProfile) { _cached_decoder_for_PINProfile = _decode_XMLType; }
    return _cached_decoder_for_PINProfile(el);
}

let _cached_encoder_for_PINProfile: $.ASN1Encoder<PINProfile> | null = null;

/**
 * @summary Encodes a(n) PINProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINProfile, encoded as an ASN.1 Element.
 */
export
function _encode_PINProfile (value: PINProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINProfile) { _cached_encoder_for_PINProfile = _encode_XMLType; }
    return _cached_encoder_for_PINProfile(value, elGetter);
}


/* eslint-enable */
