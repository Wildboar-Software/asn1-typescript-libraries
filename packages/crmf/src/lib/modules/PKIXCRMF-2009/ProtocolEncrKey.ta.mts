/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary ProtocolEncrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolEncrKey  ::=  SubjectPublicKeyInfo
 * ```
 */
export type ProtocolEncrKey = SubjectPublicKeyInfo; // DefinedType


let _cached_decoder_for_ProtocolEncrKey: $.ASN1Decoder<ProtocolEncrKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolEncrKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolEncrKey} The decoded data structure.
 */
export function _decode_ProtocolEncrKey(el: _Element) {
    if (!_cached_decoder_for_ProtocolEncrKey) {
        _cached_decoder_for_ProtocolEncrKey = _decode_SubjectPublicKeyInfo;
    }
    return _cached_decoder_for_ProtocolEncrKey(el);
}


let _cached_encoder_for_ProtocolEncrKey: $.ASN1Encoder<ProtocolEncrKey> | null = null;


/**
 * @summary Encodes a(n) ProtocolEncrKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolEncrKey, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolEncrKey(
    value: ProtocolEncrKey,
    elGetter: $.ASN1Encoder<ProtocolEncrKey>
) {
    if (!_cached_encoder_for_ProtocolEncrKey) {
        _cached_encoder_for_ProtocolEncrKey = _encode_SubjectPublicKeyInfo;
    }
    return _cached_encoder_for_ProtocolEncrKey(value, elGetter);
}


/* eslint-enable */
