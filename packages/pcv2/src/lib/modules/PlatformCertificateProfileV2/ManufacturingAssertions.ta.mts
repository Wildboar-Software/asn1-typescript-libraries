/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";
// export { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary ManufacturingAssertions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManufacturingAssertions  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type ManufacturingAssertions = Trait[]; // SequenceOfType

let _cached_decoder_for_ManufacturingAssertions: $.ASN1Decoder<ManufacturingAssertions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManufacturingAssertions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManufacturingAssertions (el: _Element): ManufacturingAssertions {
    if (!_cached_decoder_for_ManufacturingAssertions) { _cached_decoder_for_ManufacturingAssertions = $._decodeSequenceOf<Trait>(() => _decode_Trait); }
    return _cached_decoder_for_ManufacturingAssertions(el);
}

let _cached_encoder_for_ManufacturingAssertions: $.ASN1Encoder<ManufacturingAssertions> | null = null;

/**
 * @summary Encodes a(n) ManufacturingAssertions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManufacturingAssertions, encoded as an ASN.1 Element.
 */
export
function _encode_ManufacturingAssertions (value: ManufacturingAssertions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManufacturingAssertions) { _cached_encoder_for_ManufacturingAssertions = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_ManufacturingAssertions(value, elGetter);
}


/* eslint-enable */
