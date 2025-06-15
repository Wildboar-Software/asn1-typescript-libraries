/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Operations,
    _decode_Operations,
    _encode_Operations,
} from "../PKCS-15/Operations.ta.mjs";

/**
 * @summary PublicKeyOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyOperations  ::=  Operations
 * ```
 */
export type PublicKeyOperations = Operations; // DefinedType


let _cached_decoder_for_PublicKeyOperations: $.ASN1Decoder<PublicKeyOperations> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyOperations} The decoded data structure.
 */
export function _decode_PublicKeyOperations(el: _Element) {
    if (!_cached_decoder_for_PublicKeyOperations) {
        _cached_decoder_for_PublicKeyOperations = _decode_Operations;
    }
    return _cached_decoder_for_PublicKeyOperations(el);
}


let _cached_encoder_for_PublicKeyOperations: $.ASN1Encoder<PublicKeyOperations> | null = null;


/**
 * @summary Encodes a(n) PublicKeyOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyOperations, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeyOperations(
    value: PublicKeyOperations,
    elGetter: $.ASN1Encoder<PublicKeyOperations>
) {
    if (!_cached_encoder_for_PublicKeyOperations) {
        _cached_encoder_for_PublicKeyOperations = _encode_Operations;
    }
    return _cached_encoder_for_PublicKeyOperations(value, elGetter);
}


/* eslint-enable */
