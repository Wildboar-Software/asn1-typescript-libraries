/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BuiltInDomainDefinedAttribute,
    _decode_BuiltInDomainDefinedAttribute,
    _encode_BuiltInDomainDefinedAttribute,
} from '../MTSAbstractService/BuiltInDomainDefinedAttribute.ta.mjs';
/**
 * @summary BuiltInDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     BuiltInDomainDefinedAttribute
 * ```
 */
export type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[]; // SequenceOfType

let _cached_decoder_for_BuiltInDomainDefinedAttributes: $.ASN1Decoder<BuiltInDomainDefinedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttributes) {
        _cached_decoder_for_BuiltInDomainDefinedAttributes = $._decodeSequenceOf<BuiltInDomainDefinedAttribute>(
            () => _decode_BuiltInDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttributes(el);
}

let _cached_encoder_for_BuiltInDomainDefinedAttributes: $.ASN1Encoder<BuiltInDomainDefinedAttributes> | null = null;

/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttributes(
    value: BuiltInDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttributes) {
        _cached_encoder_for_BuiltInDomainDefinedAttributes = $._encodeSequenceOf<BuiltInDomainDefinedAttribute>(
            () => _encode_BuiltInDomainDefinedAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttributes(value, elGetter);
}


/* eslint-enable */
