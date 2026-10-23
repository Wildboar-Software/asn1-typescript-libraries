/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trait, _decode_Trait, _encode_Trait } from "../PlatformCertificateProfileV2/Trait.ta.mjs";


/**
 * @summary ComponentIdentifier
 * @description
 *
 * One platform component. The profile calls this production
 * `ComponentIdentifier-v2`.
 *
 * Either the sequence is a single `componentIdentifierV11Trait` and nothing
 * else, or it is a list of traits and does not contain
 * `componentIdentifierV11Trait`.
 *
 * The list form includes a component class (`tcg-tr-cat-componentClass`),
 * manufacturer (`tcg-tr-cat-componentManufacturer`), and model
 * (`tcg-tr-cat-componentModel`). It should include a serial number
 * (`tcg-tr-cat-componentSerial`) and whether the component is field replaceable
 * (`tcg-tr-cat-componentFieldReplaceable`). It may include a revision
 * (`tcg-tr-cat-componentRevision`) and further traits. In a delta certificate
 * the list includes `tcg-tr-cat-componentStatus`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentIdentifier  ::=  SEQUENCE (SIZE(1..MAX)) OF Trait
 * ```
 */
export
type ComponentIdentifier = Trait[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComponentIdentifier (el: _Element): ComponentIdentifier {
    const value = $._decodeSequenceOf<Trait>(() => _decode_Trait)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("ComponentIdentifier violates SIZE (1..MAX)");
    }
    return value;
}

let _cached_encoder_for_ComponentIdentifier: $.ASN1Encoder<ComponentIdentifier> | null = null;

/**
 * @summary Encodes a(n) ComponentIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentIdentifier (value: ComponentIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComponentIdentifier) { _cached_encoder_for_ComponentIdentifier = $._encodeSequenceOf<Trait>(() => _encode_Trait, $.BER); }
    return _cached_encoder_for_ComponentIdentifier(value, elGetter);
}


/* eslint-enable */
