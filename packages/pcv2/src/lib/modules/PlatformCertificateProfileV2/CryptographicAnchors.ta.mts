/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary CryptographicAnchors
 * @description
 *
 * Roots of trust other than the one referenced by an attribute certificate's
 * `holder` or a public-key certificate's `subjectPublicKeyInfo`. The profile
 * gives that primary reference no special meaning over the entries here. Order
 * is not significant.
 *
 * A certificate trait uses the category for that certificate (§4.2.2). A public
 * key uses `tcg-tr-cat-PublicKey`. On a base certificate the anchors are
 * required as the information-model field; this attribute carries the
 * additional references. On a delta certificate the attribute, when present,
 * lists only anchors that earlier certificates do not already list, and it does
 * not change or remove those earlier anchors.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.15 and §2.1.4.9.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
