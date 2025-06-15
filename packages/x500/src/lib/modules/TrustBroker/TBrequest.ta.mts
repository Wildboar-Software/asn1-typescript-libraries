/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/PKCertIdentifier.ta.mjs";
/**
 * @summary TBrequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBrequest  ::=  CHOICE {
 *   caCert      [0] PKCertIdentifier,
 *   subjectCert [1] PKCertIdentifier,
 *   ... }
 * ```
 */
export type TBrequest =
    | { caCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TBrequest: $.ASN1Decoder<TBrequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBrequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBrequest} The decoded data structure.
 */
export function _decode_TBrequest(el: _Element) {
    if (!_cached_decoder_for_TBrequest) {
        _cached_decoder_for_TBrequest = $._decode_extensible_choice<TBrequest>({
            "CONTEXT 0": [
                "caCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "CONTEXT 1": [
                "subjectCert",
                $._decode_explicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TBrequest(el);
}

let _cached_encoder_for_TBrequest: $.ASN1Encoder<TBrequest> | null = null;

/**
 * @summary Encodes a(n) TBrequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBrequest, encoded as an ASN.1 Element.
 */
export function _encode_TBrequest(
    value: TBrequest,
    elGetter: $.ASN1Encoder<TBrequest>
) {
    if (!_cached_encoder_for_TBrequest) {
        _cached_encoder_for_TBrequest = $._encode_choice<TBrequest>(
            {
                caCert: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.DER
                ),
                subjectCert: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_PKCertIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TBrequest(value, elGetter);
}


/* eslint-enable */
