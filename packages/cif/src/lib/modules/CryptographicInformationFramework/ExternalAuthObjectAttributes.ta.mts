/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthKeyAttributes, _decode_AuthKeyAttributes, _encode_AuthKeyAttributes } from "../CryptographicInformationFramework/AuthKeyAttributes.ta.mjs";
import { CertBasedAuthenticationAttributes, _decode_CertBasedAuthenticationAttributes, _encode_CertBasedAuthenticationAttributes } from "../CryptographicInformationFramework/CertBasedAuthenticationAttributes.ta.mjs";


/**
 * @summary ExternalAuthObjectAttributes
 * @description
 * 
 * Use `authKeyAttributes` for symmetric role authentication and
 * `certBasedAttributes` for asymmetric role authentication. Covers
 * authenticating to the card and internal/mutual authentication implied by
 * external authentication. ISO/IEC 7816-15:2016 §8.9.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalAuthObjectAttributes  ::=  CHOICE {
 *     authKeyAttributes   AuthKeyAttributes,
 *     certBasedAttributes [0] CertBasedAuthenticationAttributes,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type ExternalAuthObjectAttributes =
    { authKeyAttributes: AuthKeyAttributes } /* CHOICE_ALT_ROOT */
    | { certBasedAttributes: CertBasedAuthenticationAttributes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ExternalAuthObjectAttributes: $.ASN1Decoder<ExternalAuthObjectAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalAuthObjectAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalAuthObjectAttributes (el: _Element): ExternalAuthObjectAttributes {
    if (!_cached_decoder_for_ExternalAuthObjectAttributes) { _cached_decoder_for_ExternalAuthObjectAttributes = $._decode_extensible_choice<ExternalAuthObjectAttributes>({
    "UNIVERSAL 16": [ "authKeyAttributes", _decode_AuthKeyAttributes ],
    "CONTEXT 0": [ "certBasedAttributes", $._decode_implicit<CertBasedAuthenticationAttributes>(() => _decode_CertBasedAuthenticationAttributes) ]
}); }
    return _cached_decoder_for_ExternalAuthObjectAttributes(el);
}

let _cached_encoder_for_ExternalAuthObjectAttributes: $.ASN1Encoder<ExternalAuthObjectAttributes> | null = null;

/**
 * @summary Encodes a(n) ExternalAuthObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalAuthObjectAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalAuthObjectAttributes (value: ExternalAuthObjectAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalAuthObjectAttributes) { _cached_encoder_for_ExternalAuthObjectAttributes = $._encode_choice<ExternalAuthObjectAttributes>({
    "authKeyAttributes": _encode_AuthKeyAttributes,
    "certBasedAttributes": $._encode_implicit(_TagClass.context, 0, () => _encode_CertBasedAuthenticationAttributes, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExternalAuthObjectAttributes(value, elGetter);
}


/* eslint-enable */
