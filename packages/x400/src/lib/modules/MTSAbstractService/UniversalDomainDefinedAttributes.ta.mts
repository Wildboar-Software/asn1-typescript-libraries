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
    UniversalDomainDefinedAttribute,
    _decode_UniversalDomainDefinedAttribute,
    _encode_UniversalDomainDefinedAttribute,
} from '../MTSAbstractService/UniversalDomainDefinedAttribute.ta.mjs';
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
export function _decode_UniversalDomainDefinedAttributes(el: _Element) {
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
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttributes) {
        _cached_encoder_for_UniversalDomainDefinedAttributes = $._encodeSequenceOf<UniversalDomainDefinedAttribute>(
            () => _encode_UniversalDomainDefinedAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_UniversalDomainDefinedAttributes(
        value,
        elGetter
    );
}


/* eslint-enable */
