/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta.mjs";
import {
    HashedAttributes,
    _decode_HashedAttributes,
    _encode_HashedAttributes,
} from "../EnhancedSecurity/HashedAttributes.ta.mjs";
/**
 * @summary AttribsHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttribsHash  ::=  HASH{HashedAttributes}
 * ```
 */
export type AttribsHash = HASH<HashedAttributes>; // DefinedType

let _cached_decoder_for_AttribsHash: $.ASN1Decoder<AttribsHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttribsHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttribsHash} The decoded data structure.
 */
export function _decode_AttribsHash(el: _Element) {
    if (!_cached_decoder_for_AttribsHash) {
        _cached_decoder_for_AttribsHash = _get_decoder_for_HASH<HashedAttributes>(
            _decode_HashedAttributes
        );
    }
    return _cached_decoder_for_AttribsHash(el);
}

let _cached_encoder_for_AttribsHash: $.ASN1Encoder<AttribsHash> | null = null;

/**
 * @summary Encodes a(n) AttribsHash into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttribsHash, encoded as an ASN.1 Element.
 */
export function _encode_AttribsHash(
    value: AttribsHash,
    elGetter: $.ASN1Encoder<AttribsHash>
) {
    if (!_cached_encoder_for_AttribsHash) {
        _cached_encoder_for_AttribsHash = _get_encoder_for_HASH<HashedAttributes>(
            _encode_HashedAttributes
        );
    }
    return _cached_encoder_for_AttribsHash(value, elGetter);
}


/* eslint-enable */
