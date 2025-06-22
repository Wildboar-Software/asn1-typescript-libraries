/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax-2010/IssuerAndSerialNumber.ta.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax-2010/SubjectKeyIdentifier.ta.mjs";

/**
 * @summary RecipientIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientIdentifier  ::=  CHOICE {
 * issuerAndSerialNumber     IssuerAndSerialNumber,
 * ...,
 * [[2: subjectKeyIdentifier    [0] SubjectKeyIdentifier ]] }
 * ```
 */
export type RecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | {
          subjectKeyIdentifier: SubjectKeyIdentifier;
      } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 2 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_RecipientIdentifier: $.ASN1Decoder<RecipientIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientIdentifier} The decoded data structure.
 */
export function _decode_RecipientIdentifier(el: _Element) {
    if (!_cached_decoder_for_RecipientIdentifier) {
        _cached_decoder_for_RecipientIdentifier = $._decode_extensible_choice<RecipientIdentifier>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "CONTEXT 0": [
                    "subjectKeyIdentifier",
                    $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RecipientIdentifier(el);
}


let _cached_encoder_for_RecipientIdentifier: $.ASN1Encoder<RecipientIdentifier> | null = null;


/**
 * @summary Encodes a(n) RecipientIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RecipientIdentifier(
    value: RecipientIdentifier,
    elGetter: $.ASN1Encoder<RecipientIdentifier>
) {
    if (!_cached_encoder_for_RecipientIdentifier) {
        _cached_encoder_for_RecipientIdentifier = $._encode_choice<RecipientIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_RecipientIdentifier(value, elGetter);
}


/* eslint-enable */
