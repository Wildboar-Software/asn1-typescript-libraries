/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../CryptographicMessageSyntax-2010/ExtendedCertificate.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs";

/**
 * @summary ExtendedCertificateOrCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificateOrCertificate  ::=  CHOICE {
 * certificate         Certificate,
 * extendedCertificate     [0] IMPLICIT ExtendedCertificate }
 * ```
 */
export type ExtendedCertificateOrCertificate =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ExtendedCertificateOrCertificate: $.ASN1Decoder<ExtendedCertificateOrCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificateOrCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificateOrCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificateOrCertificate(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificateOrCertificate) {
        _cached_decoder_for_ExtendedCertificateOrCertificate = $._decode_inextensible_choice<ExtendedCertificateOrCertificate>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtendedCertificateOrCertificate(el);
}


let _cached_encoder_for_ExtendedCertificateOrCertificate: $.ASN1Encoder<ExtendedCertificateOrCertificate> | null = null;


/**
 * @summary Encodes a(n) ExtendedCertificateOrCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificateOrCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificateOrCertificate(
    value: ExtendedCertificateOrCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificateOrCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificateOrCertificate) {
        _cached_encoder_for_ExtendedCertificateOrCertificate = $._encode_choice<ExtendedCertificateOrCertificate>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ExtendedCertificateOrCertificate(
        value,
        elGetter
    );
}


/* eslint-enable */
