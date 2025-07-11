/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    POPOPrivKey,
    _decode_POPOPrivKey,
    _encode_POPOPrivKey,
} from "../PKIXCRMF-2009/POPOPrivKey.ta.mjs";
import {
    POPOSigningKey,
    _decode_POPOSigningKey,
    _encode_POPOSigningKey,
} from "../PKIXCRMF-2009/POPOSigningKey.ta.mjs";

/**
 * @summary ProofOfPossession
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfPossession  ::=  CHOICE {
 *     raVerified        [0] NULL,
 *     -- used if the RA has already verified that the requester is in
 *     -- possession of the private key
 *     signature         [1] POPOSigningKey,
 *     keyEncipherment   [2] POPOPrivKey,
 *     keyAgreement      [3] POPOPrivKey }
 * ```
 */
export type ProofOfPossession =
    | { raVerified: NULL } /* CHOICE_ALT_ROOT */
    | { signature: POPOSigningKey } /* CHOICE_ALT_ROOT */
    | { keyEncipherment: POPOPrivKey } /* CHOICE_ALT_ROOT */
    | { keyAgreement: POPOPrivKey } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ProofOfPossession: $.ASN1Decoder<ProofOfPossession> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProofOfPossession
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProofOfPossession} The decoded data structure.
 */
export function _decode_ProofOfPossession(el: _Element): ProofOfPossession {
    if (!_cached_decoder_for_ProofOfPossession) {
        _cached_decoder_for_ProofOfPossession = $._decode_inextensible_choice<ProofOfPossession>(
            {
                "CONTEXT 0": [
                    "raVerified",
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "signature",
                    $._decode_implicit<POPOSigningKey>(
                        () => _decode_POPOSigningKey
                    ),
                ],
                "CONTEXT 2": [
                    "keyEncipherment",
                    $._decode_explicit<POPOPrivKey>(() => _decode_POPOPrivKey),
                ],
                "CONTEXT 3": [
                    "keyAgreement",
                    $._decode_explicit<POPOPrivKey>(() => _decode_POPOPrivKey),
                ],
            }
        );
    }
    return _cached_decoder_for_ProofOfPossession(el);
}


let _cached_encoder_for_ProofOfPossession: $.ASN1Encoder<ProofOfPossession> | null = null;


/**
 * @summary Encodes a(n) ProofOfPossession into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProofOfPossession, encoded as an ASN.1 Element.
 */
export function _encode_ProofOfPossession(
    value: ProofOfPossession,
    elGetter: $.ASN1Encoder<ProofOfPossession>
): _Element {
    if (!_cached_encoder_for_ProofOfPossession) {
        _cached_encoder_for_ProofOfPossession = $._encode_choice<ProofOfPossession>(
            {
                raVerified: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.DER
                ),
                signature: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_POPOSigningKey,
                    $.DER
                ),
                keyEncipherment: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_POPOPrivKey,
                    $.DER
                ),
                keyAgreement: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_POPOPrivKey,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ProofOfPossession(value, elGetter);
}


/* eslint-enable */
