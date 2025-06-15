/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta.mjs";
import {
    PrivateKeyType,
    _decode_PrivateKeyType,
    _encode_PrivateKeyType,
} from "../PKCS-15/PrivateKeyType.ta.mjs";

/**
 * @summary PrivateKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeys   ::=  PathOrObjects {PrivateKeyType}
 * ```
 */
export type PrivateKeys = PathOrObjects<PrivateKeyType>; // DefinedType


let _cached_decoder_for_PrivateKeys: $.ASN1Decoder<PrivateKeys> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeys} The decoded data structure.
 */
export function _decode_PrivateKeys(el: _Element) {
    if (!_cached_decoder_for_PrivateKeys) {
        _cached_decoder_for_PrivateKeys = _get_decoder_for_PathOrObjects<PrivateKeyType>(
            _decode_PrivateKeyType
        );
    }
    return _cached_decoder_for_PrivateKeys(el);
}


let _cached_encoder_for_PrivateKeys: $.ASN1Encoder<PrivateKeys> | null = null;


/**
 * @summary Encodes a(n) PrivateKeys into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeys, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeys(
    value: PrivateKeys,
    elGetter: $.ASN1Encoder<PrivateKeys>
) {
    if (!_cached_encoder_for_PrivateKeys) {
        _cached_encoder_for_PrivateKeys = _get_encoder_for_PathOrObjects<PrivateKeyType>(
            _encode_PrivateKeyType
        );
    }
    return _cached_encoder_for_PrivateKeys(value, elGetter);
}


/* eslint-enable */
