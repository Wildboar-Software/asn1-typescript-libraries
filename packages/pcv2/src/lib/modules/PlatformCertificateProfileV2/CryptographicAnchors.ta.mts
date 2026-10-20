/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";
// export { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary CryptographicAnchors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CryptographicAnchors  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type CryptographicAnchors = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) CryptographicAnchors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CryptographicAnchors (el: _Element): CryptographicAnchors {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("CryptographicAnchors violates SIZE (1..MAX)");
    }
    return value;
}

let _cached_encoder_for_CryptographicAnchors: $.ASN1Encoder<CryptographicAnchors> | null = null;

/**
 * @summary Encodes a(n) CryptographicAnchors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptographicAnchors, encoded as an ASN.1 Element.
 */
export
function _encode_CryptographicAnchors (value: CryptographicAnchors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CryptographicAnchors) { _cached_encoder_for_CryptographicAnchors = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_CryptographicAnchors(value, elGetter);
}


/* eslint-enable */
