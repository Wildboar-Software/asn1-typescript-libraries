/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary PlatformIdentifier
 * @description
 *
 * Identity of the platform. `subjectAltName` contains an `OtherName` with
 * type-id `tcg-at-platformIdentifier` and this sequence as the value. The
 * extension is not critical.
 *
 * The sequence includes manufacturer (`tcg-tr-cat-platformManufacturer`), model
 * (`tcg-tr-cat-platformModel`), and version (`tcg-tr-cat-platformVersion`). It
 * should include the customer-visible serial number
 * (`tcg-tr-cat-platformSerial`). It may include the manufacturer's IANA Private
 * Enterprise Number (`tcg-tr-cat-platformManufacturerIdentifier`).
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformIdentifier  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type PlatformIdentifier = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) PlatformIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlatformIdentifier (el: _Element): PlatformIdentifier {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("PlatformIdentifier violates SIZE (1..MAX)");
    }
    return value;
}

let _cached_encoder_for_PlatformIdentifier: $.ASN1Encoder<PlatformIdentifier> | null = null;

/**
 * @summary Encodes a(n) PlatformIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlatformIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_PlatformIdentifier (value: PlatformIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlatformIdentifier) { _cached_encoder_for_PlatformIdentifier = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_PlatformIdentifier(value, elGetter);
}


/* eslint-enable */
