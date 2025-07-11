/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta.mjs";


/**
 * @summary AuthenticatedSafe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedSafe  ::=  SEQUENCE OF ContentInfo
 * ```
 */
export type AuthenticatedSafe = ContentInfo[]; // SequenceOfType


let _cached_decoder_for_AuthenticatedSafe: $.ASN1Decoder<AuthenticatedSafe> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedSafe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedSafe} The decoded data structure.
 */
export function _decode_AuthenticatedSafe(el: _Element): AuthenticatedSafe {
    if (!_cached_decoder_for_AuthenticatedSafe) {
        _cached_decoder_for_AuthenticatedSafe = $._decodeSequenceOf<ContentInfo>(
            () => _decode_ContentInfo
        );
    }
    return _cached_decoder_for_AuthenticatedSafe(el);
}


let _cached_encoder_for_AuthenticatedSafe: $.ASN1Encoder<AuthenticatedSafe> | null = null;


/**
 * @summary Encodes a(n) AuthenticatedSafe into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedSafe, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedSafe(
    value: AuthenticatedSafe,
    elGetter: $.ASN1Encoder<AuthenticatedSafe>
): _Element {
    if (!_cached_encoder_for_AuthenticatedSafe) {
        _cached_encoder_for_AuthenticatedSafe = $._encodeSequenceOf<ContentInfo>(
            () => _encode_ContentInfo,
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticatedSafe(value, elGetter);
}


/* eslint-enable */
