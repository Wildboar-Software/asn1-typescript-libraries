/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalDomainDefinedAttribute,
    _decode_UniversalDomainDefinedAttribute,
    _encode_UniversalDomainDefinedAttribute,
} from "../PkiPmiExternalDataTypes/UniversalDomainDefinedAttribute.ta.mjs";
/**
 * @summary UniversalDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     UniversalDomainDefinedAttribute
 * ```
 */
export type UniversalDomainDefinedAttributes = UniversalDomainDefinedAttribute[]; // SequenceOfType

let _cached_decoder_for_UniversalDomainDefinedAttributes: $.ASN1Decoder<UniversalDomainDefinedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_UniversalDomainDefinedAttributes(el: _Element): UniversalDomainDefinedAttributes {
    if (!_cached_decoder_for_UniversalDomainDefinedAttributes) {
        _cached_decoder_for_UniversalDomainDefinedAttributes = $._decodeSequenceOf<UniversalDomainDefinedAttribute>(
            () => _decode_UniversalDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_UniversalDomainDefinedAttributes(el);
}

let _cached_encoder_for_UniversalDomainDefinedAttributes: $.ASN1Encoder<UniversalDomainDefinedAttributes> | null = null;

/**
 * @summary Encodes a(n) UniversalDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalDomainDefinedAttributes(
    value: UniversalDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<UniversalDomainDefinedAttributes>
): _Element {
    if (!_cached_encoder_for_UniversalDomainDefinedAttributes) {
        _cached_encoder_for_UniversalDomainDefinedAttributes = $._encodeSequenceOf<UniversalDomainDefinedAttribute>(
            () => _encode_UniversalDomainDefinedAttribute,
            $.DER
        );
    }
    return _cached_encoder_for_UniversalDomainDefinedAttributes(
        value,
        elGetter
    );
}


/* eslint-enable */
