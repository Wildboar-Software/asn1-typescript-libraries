/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";
// export { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PreviousPlatformCertificates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreviousPlatformCertificates  ::=  SEQUENCE (SIZE (1..MAX)) OF Trait
 * ```
 */
export
type PreviousPlatformCertificates = Trait[]; // SequenceOfType

let _cached_decoder_for_PreviousPlatformCertificates: $.ASN1Decoder<PreviousPlatformCertificates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreviousPlatformCertificates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreviousPlatformCertificates (el: _Element): PreviousPlatformCertificates {
    if (!_cached_decoder_for_PreviousPlatformCertificates) { _cached_decoder_for_PreviousPlatformCertificates = $._decodeSequenceOf<Trait>(() => _decode_Trait); }
    return _cached_decoder_for_PreviousPlatformCertificates(el);
}

let _cached_encoder_for_PreviousPlatformCertificates: $.ASN1Encoder<PreviousPlatformCertificates> | null = null;

/**
 * @summary Encodes a(n) PreviousPlatformCertificates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreviousPlatformCertificates, encoded as an ASN.1 Element.
 */
export
function _encode_PreviousPlatformCertificates (value: PreviousPlatformCertificates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PreviousPlatformCertificates) { _cached_encoder_for_PreviousPlatformCertificates = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_PreviousPlatformCertificates(value, elGetter);
}


/* eslint-enable */
