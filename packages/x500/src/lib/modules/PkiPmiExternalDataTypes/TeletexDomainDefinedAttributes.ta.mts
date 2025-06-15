/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    TeletexDomainDefinedAttribute,
    _decode_TeletexDomainDefinedAttribute,
    _encode_TeletexDomainDefinedAttribute,
} from "../PkiPmiExternalDataTypes/TeletexDomainDefinedAttribute.ta.mjs";
/**
 * @summary TeletexDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     TeletexDomainDefinedAttribute
 * ```
 */
export type TeletexDomainDefinedAttributes = TeletexDomainDefinedAttribute[]; // SequenceOfType

let _cached_decoder_for_TeletexDomainDefinedAttributes: $.ASN1Decoder<TeletexDomainDefinedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttributes) {
        _cached_decoder_for_TeletexDomainDefinedAttributes = $._decodeSequenceOf<TeletexDomainDefinedAttribute>(
            () => _decode_TeletexDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_TeletexDomainDefinedAttributes(el);
}

let _cached_encoder_for_TeletexDomainDefinedAttributes: $.ASN1Encoder<TeletexDomainDefinedAttributes> | null = null;

/**
 * @summary Encodes a(n) TeletexDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttributes(
    value: TeletexDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttributes) {
        _cached_encoder_for_TeletexDomainDefinedAttributes = $._encodeSequenceOf<TeletexDomainDefinedAttribute>(
            () => _encode_TeletexDomainDefinedAttribute,
            $.DER
        );
    }
    return _cached_encoder_for_TeletexDomainDefinedAttributes(value, elGetter);
}


/* eslint-enable */
