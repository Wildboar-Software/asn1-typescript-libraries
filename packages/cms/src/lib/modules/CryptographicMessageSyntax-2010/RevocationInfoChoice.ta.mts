/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OtherRevocationInfoFormat,
    _decode_OtherRevocationInfoFormat,
    _encode_OtherRevocationInfoFormat,
} from "../CryptographicMessageSyntax-2010/OtherRevocationInfoFormat.ta.mjs";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.mjs";

/**
 * @summary RevocationInfoChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoChoice  ::=  CHOICE {
 * crl CertificateList,
 * ...,
 * [[5: other [1] IMPLICIT OtherRevocationInfoFormat ]] }
 * ```
 */
export type RevocationInfoChoice =
    | { crl: CertificateList } /* CHOICE_ALT_ROOT */
    | {
          other: OtherRevocationInfoFormat;
      } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_RevocationInfoChoice: $.ASN1Decoder<RevocationInfoChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfoChoice} The decoded data structure.
 */
export function _decode_RevocationInfoChoice(el: _Element): RevocationInfoChoice {
    if (!_cached_decoder_for_RevocationInfoChoice) {
        _cached_decoder_for_RevocationInfoChoice = $._decode_extensible_choice<RevocationInfoChoice>(
            {
                "UNIVERSAL 16": ["crl", _decode_CertificateList],
                "CONTEXT 1": [
                    "other",
                    $._decode_implicit<OtherRevocationInfoFormat>(
                        () => _decode_OtherRevocationInfoFormat
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RevocationInfoChoice(el);
}


let _cached_encoder_for_RevocationInfoChoice: $.ASN1Encoder<RevocationInfoChoice> | null = null;


/**
 * @summary Encodes a(n) RevocationInfoChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoChoice, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfoChoice(
    value: RevocationInfoChoice,
    elGetter: $.ASN1Encoder<RevocationInfoChoice>
): _Element {
    if (!_cached_encoder_for_RevocationInfoChoice) {
        _cached_encoder_for_RevocationInfoChoice = $._encode_choice<RevocationInfoChoice>(
            {
                crl: _encode_CertificateList,
                other: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OtherRevocationInfoFormat,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_RevocationInfoChoice(value, elGetter);
}


/* eslint-enable */
