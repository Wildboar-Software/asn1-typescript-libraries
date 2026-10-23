/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary TBBSecurityAssertions_v3
 * @description
 *
 * Security assertions about the platform's roots of trust or trusted building
 * blocks. The profile names this production `TBBSecurityAssertions-v3`.
 * Optional. The traits from this profile that may appear are
 * `commonCriteriaTrait`, `fipsLevelTrait`, `iso9000Trait`,
 * `platformFirmwareCapabilitiesTrait`,
 * `platformFirmwareSignatureVerificationTrait`,
 * `platformFirmwareUpdateComplianceTrait`, `platformHardwareCapabilitiesTrait`,
 * `rtmTrait`, and `uriTrait`. Any other trait defined in this profile is
 * excluded. A platform profile may define additional traits and may require
 * some of these. A delta certificate's changes do not invalidate the TBB
 * security claims of the base certificate (§2.2.3).
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.18 and §2.1.4.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBBSecurityAssertions-v3  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type TBBSecurityAssertions_v3 = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) TBBSecurityAssertions_v3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBBSecurityAssertions_v3 (el: _Element): TBBSecurityAssertions_v3 {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("TBBSecurityAssertions_v3 violates SIZE (1..MAX)");
    }
    return value;
}

let _cached_encoder_for_TBBSecurityAssertions_v3: $.ASN1Encoder<TBBSecurityAssertions_v3> | null = null;

/**
 * @summary Encodes a(n) TBBSecurityAssertions_v3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBBSecurityAssertions_v3, encoded as an ASN.1 Element.
 */
export
function _encode_TBBSecurityAssertions_v3 (value: TBBSecurityAssertions_v3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBBSecurityAssertions_v3) { _cached_encoder_for_TBBSecurityAssertions_v3 = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_TBBSecurityAssertions_v3(value, elGetter);
}


/* eslint-enable */
