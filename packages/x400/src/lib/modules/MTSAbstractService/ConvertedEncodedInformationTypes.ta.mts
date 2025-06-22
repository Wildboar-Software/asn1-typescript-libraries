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
 * @summary ConvertedEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertedEncodedInformationTypes  ::=  EncodedInformationTypes
 * ```
 */
export type ConvertedEncodedInformationTypes = EncodedInformationTypes; // DefinedType

let _cached_decoder_for_ConvertedEncodedInformationTypes: $.ASN1Decoder<ConvertedEncodedInformationTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConvertedEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertedEncodedInformationTypes} The decoded data structure.
 */
export function _decode_ConvertedEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_ConvertedEncodedInformationTypes) {
        _cached_decoder_for_ConvertedEncodedInformationTypes = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_ConvertedEncodedInformationTypes(el);
}

let _cached_encoder_for_ConvertedEncodedInformationTypes: $.ASN1Encoder<ConvertedEncodedInformationTypes> | null = null;

/**
 * @summary Encodes a(n) ConvertedEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertedEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_ConvertedEncodedInformationTypes(
    value: ConvertedEncodedInformationTypes,
    elGetter: $.ASN1Encoder<ConvertedEncodedInformationTypes>
) {
    if (!_cached_encoder_for_ConvertedEncodedInformationTypes) {
        _cached_encoder_for_ConvertedEncodedInformationTypes = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_ConvertedEncodedInformationTypes(
        value,
        elGetter
    );
}


/* eslint-enable */
