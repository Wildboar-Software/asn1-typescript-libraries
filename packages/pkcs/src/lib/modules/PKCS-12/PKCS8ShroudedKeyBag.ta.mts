/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    EncryptedPrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
} from "../AsymmetricKeyPackageModuleV1/EncryptedPrivateKeyInfo.ta.mjs";


/**
 * @summary PKCS8ShroudedKeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS8ShroudedKeyBag  ::=  EncryptedPrivateKeyInfo
 * ```
 */
export type PKCS8ShroudedKeyBag = EncryptedPrivateKeyInfo; // DefinedType


let _cached_decoder_for_PKCS8ShroudedKeyBag: $.ASN1Decoder<PKCS8ShroudedKeyBag> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKCS8ShroudedKeyBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS8ShroudedKeyBag} The decoded data structure.
 */
export function _decode_PKCS8ShroudedKeyBag(el: _Element) {
    if (!_cached_decoder_for_PKCS8ShroudedKeyBag) {
        _cached_decoder_for_PKCS8ShroudedKeyBag = _decode_EncryptedPrivateKeyInfo;
    }
    return _cached_decoder_for_PKCS8ShroudedKeyBag(el);
}


let _cached_encoder_for_PKCS8ShroudedKeyBag: $.ASN1Encoder<PKCS8ShroudedKeyBag> | null = null;


/**
 * @summary Encodes a(n) PKCS8ShroudedKeyBag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS8ShroudedKeyBag, encoded as an ASN.1 Element.
 */
export function _encode_PKCS8ShroudedKeyBag(
    value: PKCS8ShroudedKeyBag,
    elGetter: $.ASN1Encoder<PKCS8ShroudedKeyBag>
) {
    if (!_cached_encoder_for_PKCS8ShroudedKeyBag) {
        _cached_encoder_for_PKCS8ShroudedKeyBag = _encode_EncryptedPrivateKeyInfo;
    }
    return _cached_encoder_for_PKCS8ShroudedKeyBag(value, elGetter);
}


/* eslint-enable */
