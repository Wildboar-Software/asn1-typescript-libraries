/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";
// export { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PlatformOwnership
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformOwnership  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type PlatformOwnership = Trait[]; // SequenceOfType

let _cached_decoder_for_PlatformOwnership: $.ASN1Decoder<PlatformOwnership> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlatformOwnership
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlatformOwnership (el: _Element): PlatformOwnership {
    if (!_cached_decoder_for_PlatformOwnership) { _cached_decoder_for_PlatformOwnership = $._decodeSequenceOf<Trait>(() => _decode_Trait); }
    return _cached_decoder_for_PlatformOwnership(el);
}

let _cached_encoder_for_PlatformOwnership: $.ASN1Encoder<PlatformOwnership> | null = null;

/**
 * @summary Encodes a(n) PlatformOwnership into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlatformOwnership, encoded as an ASN.1 Element.
 */
export
function _encode_PlatformOwnership (value: PlatformOwnership, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlatformOwnership) { _cached_encoder_for_PlatformOwnership = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_PlatformOwnership(value, elGetter);
}


/* eslint-enable */
