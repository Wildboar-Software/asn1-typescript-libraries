/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta.mjs";
/**
 * @summary LocalPostalAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalPostalAttributes  ::=  PDSParameter
 * ```
 */
export type LocalPostalAttributes = PDSParameter; // DefinedType

let _cached_decoder_for_LocalPostalAttributes: $.ASN1Decoder<LocalPostalAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalPostalAttributes} The decoded data structure.
 */
export function _decode_LocalPostalAttributes(el: _Element): LocalPostalAttributes {
    if (!_cached_decoder_for_LocalPostalAttributes) {
        _cached_decoder_for_LocalPostalAttributes = _decode_PDSParameter;
    }
    return _cached_decoder_for_LocalPostalAttributes(el);
}

let _cached_encoder_for_LocalPostalAttributes: $.ASN1Encoder<LocalPostalAttributes> | null = null;

/**
 * @summary Encodes a(n) LocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_LocalPostalAttributes(
    value: LocalPostalAttributes,
    elGetter: $.ASN1Encoder<LocalPostalAttributes>
): _Element {
    if (!_cached_encoder_for_LocalPostalAttributes) {
        _cached_encoder_for_LocalPostalAttributes = _encode_PDSParameter;
    }
    return _cached_encoder_for_LocalPostalAttributes(value, elGetter);
}


/* eslint-enable */
