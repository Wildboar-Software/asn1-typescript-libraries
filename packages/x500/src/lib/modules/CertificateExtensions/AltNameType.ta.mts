/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AltNameType_builtinNameForm,
    _decode_AltNameType_builtinNameForm,
    _encode_AltNameType_builtinNameForm,
} from "../CertificateExtensions/AltNameType-builtinNameForm.ta.mjs";
/**
 * @summary AltNameType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltNameType  ::=  CHOICE {
 *   builtinNameForm  ENUMERATED {
 *     rfc822Name                (1),
 *     dNSName                   (2),
 *     x400Address               (3),
 *     directoryName             (4),
 *     ediPartyName              (5),
 *     uniformResourceIdentifier (6),
 *     iPAddress                 (7),
 *     registeredId              (8),
 *     ...},
 *   otherNameForm    OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type AltNameType =
    | { builtinNameForm: AltNameType_builtinNameForm } /* CHOICE_ALT_ROOT */
    | { otherNameForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AltNameType: $.ASN1Decoder<AltNameType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltNameType} The decoded data structure.
 */
export function _decode_AltNameType(el: _Element): AltNameType {
    if (!_cached_decoder_for_AltNameType) {
        _cached_decoder_for_AltNameType = $._decode_extensible_choice<AltNameType>(
            {
                "UNIVERSAL 10": [
                    "builtinNameForm",
                    _decode_AltNameType_builtinNameForm,
                ],
                "UNIVERSAL 6": ["otherNameForm", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_AltNameType(el);
}

let _cached_encoder_for_AltNameType: $.ASN1Encoder<AltNameType> | null = null;

/**
 * @summary Encodes a(n) AltNameType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType, encoded as an ASN.1 Element.
 */
export function _encode_AltNameType(
    value: AltNameType,
    elGetter: $.ASN1Encoder<AltNameType>
): _Element {
    if (!_cached_encoder_for_AltNameType) {
        _cached_encoder_for_AltNameType = $._encode_choice<AltNameType>(
            {
                builtinNameForm: _encode_AltNameType_builtinNameForm,
                otherNameForm: $._encodeObjectIdentifier,
            },
            $.DER
        );
    }
    return _cached_encoder_for_AltNameType(value, elGetter);
}


/* eslint-enable */
