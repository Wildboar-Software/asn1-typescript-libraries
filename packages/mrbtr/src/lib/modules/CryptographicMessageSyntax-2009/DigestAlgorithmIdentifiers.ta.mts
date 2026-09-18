import * as $ from "@wildboar/asn1/functional";
import {
    type DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "@wildboar/cms";

/**
 * @summary DigestAlgorithmIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmIdentifiers ::= SET OF DigestAlgorithmIdentifier
 * ```
 */
export type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[];

export const _decode_DigestAlgorithmIdentifiers: $.ASN1Decoder<DigestAlgorithmIdentifiers> =
    $._decodeSetOf<DigestAlgorithmIdentifier>(() => _decode_DigestAlgorithmIdentifier);

export const _encode_DigestAlgorithmIdentifiers: $.ASN1Encoder<DigestAlgorithmIdentifiers> =
    $._encodeSetOf<DigestAlgorithmIdentifier>(() => _encode_DigestAlgorithmIdentifier, $.BER);
