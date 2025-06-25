/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DigestInfo,
    _decode_DigestInfo,
    _encode_DigestInfo,
} from "../PKCS7/DigestInfo.ta.mjs";
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../PKCS7/ENCRYPTED.ta.mjs";

/**
 * @summary EncryptedDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedDigest  ::=  ENCRYPTED{DigestInfo}
 * ```
 */
export type EncryptedDigest = ENCRYPTED<DigestInfo>; // DefinedType


let _cached_decoder_for_EncryptedDigest: $.ASN1Decoder<EncryptedDigest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedDigest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedDigest} The decoded data structure.
 */
export function _decode_EncryptedDigest(el: _Element): EncryptedDigest {
    if (!_cached_decoder_for_EncryptedDigest) {
        _cached_decoder_for_EncryptedDigest = _get_decoder_for_ENCRYPTED<DigestInfo>(
            _decode_DigestInfo
        );
    }
    return _cached_decoder_for_EncryptedDigest(el);
}


let _cached_encoder_for_EncryptedDigest: $.ASN1Encoder<EncryptedDigest> | null = null;


/**
 * @summary Encodes a(n) EncryptedDigest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedDigest, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedDigest(
    value: EncryptedDigest,
    elGetter: $.ASN1Encoder<EncryptedDigest>
): _Element {
    if (!_cached_encoder_for_EncryptedDigest) {
        _cached_encoder_for_EncryptedDigest = _get_encoder_for_ENCRYPTED<DigestInfo>(
            _encode_DigestInfo
        );
    }
    return _cached_encoder_for_EncryptedDigest(value, elGetter);
}


/* eslint-enable */
