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
    Contents_Type_Attribute,
    _decode_Contents_Type_Attribute,
    _encode_Contents_Type_Attribute,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ContentsTypeParameter */
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
/* END_OF_SYMBOL_DEFINITION ContentsTypeParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentsTypeParameter */
let _cached_decoder_for_ContentsTypeParameter: $.ASN1Decoder<ContentsTypeParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentsTypeParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ContentsTypeParameter */
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
/* END_OF_SYMBOL_DEFINITION _decode_ContentsTypeParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentsTypeParameter */
let _cached_encoder_for_ContentsTypeParameter: $.ASN1Encoder<ContentsTypeParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentsTypeParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ContentsTypeParameter */
/**
 * @summary Encodes a(n) ContentsTypeParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ContentsTypeParameter */

/* eslint-enable */
