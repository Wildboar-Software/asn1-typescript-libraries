/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta.mjs";
import {
    OriginatorPublicKey,
    _decode_OriginatorPublicKey,
    _encode_OriginatorPublicKey,
} from "../CryptographicMessageSyntax/OriginatorPublicKey.ta.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax/SubjectKeyIdentifier.ta.mjs";

/**
 * @summary OriginatorIdentifierOrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorIdentifierOrKey  ::=  CHOICE {
 *   issuerAndSerialNumber  IssuerAndSerialNumber,
 *   subjectKeyIdentifier   [0]  SubjectKeyIdentifier,
 *   originatorKey          [1]  OriginatorPublicKey
 * }
 * ```
 */
export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { originatorKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_OriginatorIdentifierOrKey: $.ASN1Decoder<OriginatorIdentifierOrKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorIdentifierOrKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorIdentifierOrKey} The decoded data structure.
 */
export function _decode_OriginatorIdentifierOrKey(el: _Element): OriginatorIdentifierOrKey {
    if (!_cached_decoder_for_OriginatorIdentifierOrKey) {
        _cached_decoder_for_OriginatorIdentifierOrKey = $._decode_inextensible_choice<OriginatorIdentifierOrKey>(
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
                "CONTEXT 1": [
                    "originatorKey",
                    $._decode_implicit<OriginatorPublicKey>(
                        () => _decode_OriginatorPublicKey
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OriginatorIdentifierOrKey(el);
}


let _cached_encoder_for_OriginatorIdentifierOrKey: $.ASN1Encoder<OriginatorIdentifierOrKey> | null = null;


/**
 * @summary Encodes a(n) OriginatorIdentifierOrKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorIdentifierOrKey, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorIdentifierOrKey(
    value: OriginatorIdentifierOrKey,
    elGetter: $.ASN1Encoder<OriginatorIdentifierOrKey>
): _Element {
    if (!_cached_encoder_for_OriginatorIdentifierOrKey) {
        _cached_encoder_for_OriginatorIdentifierOrKey = $._encode_choice<OriginatorIdentifierOrKey>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    $.BER
                ),
                originatorKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OriginatorPublicKey,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
}


/* eslint-enable */
