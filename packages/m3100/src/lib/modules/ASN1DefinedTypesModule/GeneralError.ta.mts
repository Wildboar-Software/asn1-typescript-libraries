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
    GeneralError_Item,
    _decode_GeneralError_Item,
    _encode_GeneralError_Item,
} from '../ASN1DefinedTypesModule/GeneralError-Item.ta.mjs';

/**
 * @summary GeneralError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralError  ::=  SEQUENCE OF SEQUENCE {
 *     cause           GeneralErrorCause,
 *     details         GraphicString OPTIONAL,
 *     relatedObjects  [0]  SET OF ObjectInstance OPTIONAL,
 *     attributeList   [1]  AttributeList OPTIONAL }
 * ```
 */
export type GeneralError = GeneralError_Item[]; // SequenceOfType


let _cached_decoder_for_GeneralError: $.ASN1Decoder<GeneralError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GeneralError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralError} The decoded data structure.
 */
export function _decode_GeneralError(el: _Element) {
    if (!_cached_decoder_for_GeneralError) {
        _cached_decoder_for_GeneralError = $._decodeSequenceOf<GeneralError_Item>(
            () => _decode_GeneralError_Item
        );
    }
    return _cached_decoder_for_GeneralError(el);
}


let _cached_encoder_for_GeneralError: $.ASN1Encoder<GeneralError> | null = null;


/**
 * @summary Encodes a(n) GeneralError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralError, encoded as an ASN.1 Element.
 */
export function _encode_GeneralError(
    value: GeneralError,
    elGetter: $.ASN1Encoder<GeneralError>
) {
    if (!_cached_encoder_for_GeneralError) {
        _cached_encoder_for_GeneralError = $._encodeSequenceOf<GeneralError_Item>(
            () => _encode_GeneralError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_GeneralError(value, elGetter);
}


/* eslint-enable */
