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
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
/**
 * @summary UniversalLocalPostalAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalLocalPostalAttributes  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalLocalPostalAttributes = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalLocalPostalAttributes: $.ASN1Decoder<UniversalLocalPostalAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalLocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalLocalPostalAttributes} The decoded data structure.
 */
export function _decode_UniversalLocalPostalAttributes(el: _Element) {
    if (!_cached_decoder_for_UniversalLocalPostalAttributes) {
        _cached_decoder_for_UniversalLocalPostalAttributes = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalLocalPostalAttributes(el);
}

let _cached_encoder_for_UniversalLocalPostalAttributes: $.ASN1Encoder<UniversalLocalPostalAttributes> | null = null;

/**
 * @summary Encodes a(n) UniversalLocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalLocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalLocalPostalAttributes(
    value: UniversalLocalPostalAttributes,
    elGetter: $.ASN1Encoder<UniversalLocalPostalAttributes>
) {
    if (!_cached_encoder_for_UniversalLocalPostalAttributes) {
        _cached_encoder_for_UniversalLocalPostalAttributes = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalLocalPostalAttributes(value, elGetter);
}


/* eslint-enable */
