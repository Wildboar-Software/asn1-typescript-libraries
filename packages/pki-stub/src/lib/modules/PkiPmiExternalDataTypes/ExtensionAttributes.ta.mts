/* eslint-disable */
import { ASN1Element as _Element } from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import {
    ExtensionAttribute,
    _decode_ExtensionAttribute,
    _encode_ExtensionAttribute,
} from "../PkiPmiExternalDataTypes/ExtensionAttribute.ta.mjs";

/**
 * @summary ExtensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttributes  ::=
 *   SET SIZE (1..ub-extension-attributes) OF ExtensionAttribute
 * ```
 */
export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType

let _cached_decoder_for_ExtensionAttributes: $.ASN1Decoder<ExtensionAttributes> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttributes} The decoded data structure.
 */
export function _decode_ExtensionAttributes(el: _Element): ExtensionAttributes {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes =
            $._decodeSetOf<ExtensionAttribute>(
                () => _decode_ExtensionAttribute
            );
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}

let _cached_encoder_for_ExtensionAttributes: $.ASN1Encoder<ExtensionAttributes> | null =
    null;

/**
 * @summary Encodes a(n) ExtensionAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttributes(value: ExtensionAttributes, elGetter: $.ASN1Encoder<ExtensionAttributes>): _Element) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes =
            $._encodeSetOf<ExtensionAttribute>(
                () => _encode_ExtensionAttribute,
                $.BER
            );
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}


/* eslint-enable */
