/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OneAsymmetricKey,
    _decode_OneAsymmetricKey,
    _encode_OneAsymmetricKey,
} from "../AsymmetricKeyPackageModuleV1/OneAsymmetricKey.ta.mjs";

/**
 * @summary PrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyInfo  ::=  OneAsymmetricKey
 * ```
 */
export type PrivateKeyInfo = OneAsymmetricKey; // DefinedType


let _cached_decoder_for_PrivateKeyInfo: $.ASN1Decoder<PrivateKeyInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyInfo} The decoded data structure.
 */
export function _decode_PrivateKeyInfo(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyInfo) {
        _cached_decoder_for_PrivateKeyInfo = _decode_OneAsymmetricKey;
    }
    return _cached_decoder_for_PrivateKeyInfo(el);
}


let _cached_encoder_for_PrivateKeyInfo: $.ASN1Encoder<PrivateKeyInfo> | null = null;


/**
 * @summary Encodes a(n) PrivateKeyInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyInfo(
    value: PrivateKeyInfo,
    elGetter: $.ASN1Encoder<PrivateKeyInfo>
) {
    if (!_cached_encoder_for_PrivateKeyInfo) {
        _cached_encoder_for_PrivateKeyInfo = _encode_OneAsymmetricKey;
    }
    return _cached_encoder_for_PrivateKeyInfo(value, elGetter);
}


/* eslint-enable */
