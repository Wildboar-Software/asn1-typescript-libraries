/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PlatformConfigUri_v3
 * @description
 *
 * Where a verifier obtains reference integrity measurements. The profile names
 * this production `PlatformConfigUri-v3` and gives `uriTrait` as an example
 * syntax. A delta certificate may use the attribute to assert changes to the
 * base certificate's PCR values.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.20.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformConfigUri-v3  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type PlatformConfigUri_v3 = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) PlatformConfigUri_v3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlatformConfigUri_v3 (el: _Element): PlatformConfigUri_v3 {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("PlatformConfigUri_v3 violates SIZE (1..MAX)");
    }
    return value;
}

let _cached_encoder_for_PlatformConfigUri_v3: $.ASN1Encoder<PlatformConfigUri_v3> | null = null;

/**
 * @summary Encodes a(n) PlatformConfigUri_v3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlatformConfigUri_v3, encoded as an ASN.1 Element.
 */
export
function _encode_PlatformConfigUri_v3 (value: PlatformConfigUri_v3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlatformConfigUri_v3) { _cached_encoder_for_PlatformConfigUri_v3 = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_PlatformConfigUri_v3(value, elGetter);
}


/* eslint-enable */
