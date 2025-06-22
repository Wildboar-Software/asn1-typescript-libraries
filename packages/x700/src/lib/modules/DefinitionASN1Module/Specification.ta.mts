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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/**
 * @summary Specification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Specification  ::=  TextualRepresentation
 * ```
 */
export type Specification = TextualRepresentation; // DefinedType


let _cached_decoder_for_Specification: $.ASN1Decoder<Specification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Specification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Specification} The decoded data structure.
 */
export function _decode_Specification(el: _Element) {
    if (!_cached_decoder_for_Specification) {
        _cached_decoder_for_Specification = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_Specification(el);
}


let _cached_encoder_for_Specification: $.ASN1Encoder<Specification> | null = null;


/**
 * @summary Encodes a(n) Specification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Specification, encoded as an ASN.1 Element.
 */
export function _encode_Specification(
    value: Specification,
    elGetter: $.ASN1Encoder<Specification>
) {
    if (!_cached_encoder_for_Specification) {
        _cached_encoder_for_Specification = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_Specification(value, elGetter);
}


/* eslint-enable */
