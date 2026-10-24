/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PlatformOwnership
 * @description
 *
 * Owner or user of the platform at the time this certificate was issued. The
 * sequence includes a trait of category `tcg-tr-cat-platformOwnership` that
 * identifies that party. Optional. The profile leaves privacy handling of this
 * field to platform-specific binding specifications.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.21 and §2.1.4.17.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformOwnership  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type PlatformOwnership = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) PlatformOwnership
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlatformOwnership (el: _Element): PlatformOwnership {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("PlatformOwnership violates SIZE (1..MAX)");
    }
    return value;
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
