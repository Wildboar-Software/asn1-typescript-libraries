/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PreviousPlatformCertificates
 * @description
 *
 * Platform certificates already issued for this platform, in issuance order.
 * Included only when the certificate type says this certificate references
 * another one. A delta certificate's reference reaches the base or rebase
 * certificate directly or through another delta.
 *
 * Category `tcg-tr-cat-PlatformCertificate` marks a base certificate,
 * `tcg-tr-cat-DeltaPlatformCertificate` a delta certificate, and
 * `tcg-tr-cat-RebasePlatformCertificate` a certificate that itself references
 * an earlier one. `certificateIdentifierTrait` is the syntax the profile
 * recommends.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.11 and §2.1.4.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreviousPlatformCertificates  ::=  SEQUENCE (SIZE (1..MAX)) OF Trait
 * ```
 */
export
type PreviousPlatformCertificates = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) PreviousPlatformCertificates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreviousPlatformCertificates (el: _Element): PreviousPlatformCertificates {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("PreviousPlatformCertificates violates SIZE (1..MAX)");
    }
    return value;
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
