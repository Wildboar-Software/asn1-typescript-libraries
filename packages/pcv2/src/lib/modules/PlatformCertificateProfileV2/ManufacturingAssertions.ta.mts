/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary ManufacturingAssertions
 * @description
 *
 * Manufacturer-specific assertions about manufacturing and supply chain
 * properties, encoded as traits. Optional. On a delta certificate they describe
 * processes after the base certificate was issued (§2.2.4.16).
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.22 and §2.1.4.18.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManufacturingAssertions  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type ManufacturingAssertions = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) ManufacturingAssertions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManufacturingAssertions (el: _Element): ManufacturingAssertions {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("ManufacturingAssertions violates SIZE (1..MAX)");
    }
    return value;
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
