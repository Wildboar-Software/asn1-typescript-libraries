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
 * @summary ASN1ModuleContents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1ModuleContents  ::=  TextualRepresentation
 * ```
 */
export type ASN1ModuleContents = TextualRepresentation; // DefinedType


let _cached_decoder_for_ASN1ModuleContents: $.ASN1Decoder<ASN1ModuleContents> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ASN1ModuleContents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASN1ModuleContents} The decoded data structure.
 */
export function _decode_ASN1ModuleContents(el: _Element) {
    if (!_cached_decoder_for_ASN1ModuleContents) {
        _cached_decoder_for_ASN1ModuleContents = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_ASN1ModuleContents(el);
}


let _cached_encoder_for_ASN1ModuleContents: $.ASN1Encoder<ASN1ModuleContents> | null = null;


/**
 * @summary Encodes a(n) ASN1ModuleContents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASN1ModuleContents, encoded as an ASN.1 Element.
 */
export function _encode_ASN1ModuleContents(
    value: ASN1ModuleContents,
    elGetter: $.ASN1Encoder<ASN1ModuleContents>
) {
    if (!_cached_encoder_for_ASN1ModuleContents) {
        _cached_encoder_for_ASN1ModuleContents = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_ASN1ModuleContents(value, elGetter);
}


/* eslint-enable */
