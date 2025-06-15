/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";

/**
 * @summary Opaque
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Opaque  ::=  ObjectValue {PKCS15-OPAQUE.&Type}
 * ```
 */
export type Opaque = ObjectValue<_Element>; // DefinedType


let _cached_decoder_for_Opaque: $.ASN1Decoder<Opaque> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Opaque
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Opaque} The decoded data structure.
 */
export function _decode_Opaque(el: _Element) {
    if (!_cached_decoder_for_Opaque) {
        _cached_decoder_for_Opaque = _get_decoder_for_ObjectValue<_Element>(
            $._decodeAny
        );
    }
    return _cached_decoder_for_Opaque(el);
}


let _cached_encoder_for_Opaque: $.ASN1Encoder<Opaque> | null = null;


/**
 * @summary Encodes a(n) Opaque into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Opaque, encoded as an ASN.1 Element.
 */
export function _encode_Opaque(value: Opaque, elGetter: $.ASN1Encoder<Opaque>) {
    if (!_cached_encoder_for_Opaque) {
        _cached_encoder_for_Opaque = _get_encoder_for_ObjectValue<_Element>(
            $._encodeAny
        );
    }
    return _cached_encoder_for_Opaque(value, elGetter);
}


/* eslint-enable */
