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
    Contents_Type_Attribute,
    _decode_Contents_Type_Attribute,
    _encode_Contents_Type_Attribute,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute.ta.mjs';
/**
 * @summary ContentsTypeParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentsTypeParameter  ::=  Contents-Type-Attribute
 * ```
 */
export type ContentsTypeParameter = Contents_Type_Attribute; // DefinedType

let _cached_decoder_for_ContentsTypeParameter: $.ASN1Decoder<ContentsTypeParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentsTypeParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentsTypeParameter} The decoded data structure.
 */
export function _decode_ContentsTypeParameter(el: _Element) {
    if (!_cached_decoder_for_ContentsTypeParameter) {
        _cached_decoder_for_ContentsTypeParameter = _decode_Contents_Type_Attribute;
    }
    return _cached_decoder_for_ContentsTypeParameter(el);
}

let _cached_encoder_for_ContentsTypeParameter: $.ASN1Encoder<ContentsTypeParameter> | null = null;

/**
 * @summary Encodes a(n) ContentsTypeParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentsTypeParameter, encoded as an ASN.1 Element.
 */
export function _encode_ContentsTypeParameter(
    value: ContentsTypeParameter,
    elGetter: $.ASN1Encoder<ContentsTypeParameter>
) {
    if (!_cached_encoder_for_ContentsTypeParameter) {
        _cached_encoder_for_ContentsTypeParameter = _encode_Contents_Type_Attribute;
    }
    return _cached_encoder_for_ContentsTypeParameter(value, elGetter);
}


/* eslint-enable */
