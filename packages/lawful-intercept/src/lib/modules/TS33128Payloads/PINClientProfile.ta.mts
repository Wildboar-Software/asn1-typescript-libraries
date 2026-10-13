/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary PINClientProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientProfile  ::= XMLType
 * ```
 */
export
type PINClientProfile = XMLType; // DefinedType

let _cached_decoder_for_PINClientProfile: $.ASN1Decoder<PINClientProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINClientProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINClientProfile (el: _Element): PINClientProfile {
    if (!_cached_decoder_for_PINClientProfile) { _cached_decoder_for_PINClientProfile = _decode_XMLType; }
    return _cached_decoder_for_PINClientProfile(el);
}

let _cached_encoder_for_PINClientProfile: $.ASN1Encoder<PINClientProfile> | null = null;

/**
 * @summary Encodes a(n) PINClientProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINClientProfile, encoded as an ASN.1 Element.
 */
export
function _encode_PINClientProfile (value: PINClientProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINClientProfile) { _cached_encoder_for_PINClientProfile = _encode_XMLType; }
    return _cached_encoder_for_PINClientProfile(value, elGetter);
}


/* eslint-enable */
