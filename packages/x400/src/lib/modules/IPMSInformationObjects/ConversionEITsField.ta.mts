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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
/**
 * @summary ConversionEITsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionEITsField  ::=  EncodedInformationTypes
 * ```
 */
export type ConversionEITsField = EncodedInformationTypes; // DefinedType

let _cached_decoder_for_ConversionEITsField: $.ASN1Decoder<ConversionEITsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConversionEITsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionEITsField} The decoded data structure.
 */
export function _decode_ConversionEITsField(el: _Element) {
    if (!_cached_decoder_for_ConversionEITsField) {
        _cached_decoder_for_ConversionEITsField = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_ConversionEITsField(el);
}

let _cached_encoder_for_ConversionEITsField: $.ASN1Encoder<ConversionEITsField> | null = null;

/**
 * @summary Encodes a(n) ConversionEITsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionEITsField, encoded as an ASN.1 Element.
 */
export function _encode_ConversionEITsField(
    value: ConversionEITsField,
    elGetter: $.ASN1Encoder<ConversionEITsField>
) {
    if (!_cached_encoder_for_ConversionEITsField) {
        _cached_encoder_for_ConversionEITsField = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_ConversionEITsField(value, elGetter);
}


/* eslint-enable */
