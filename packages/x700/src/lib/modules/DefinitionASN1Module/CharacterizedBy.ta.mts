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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/**
 * @summary CharacterizedBy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterizedBy  ::=  TemplateList
 * ```
 */
export type CharacterizedBy = TemplateList; // DefinedType


let _cached_decoder_for_CharacterizedBy: $.ASN1Decoder<CharacterizedBy> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CharacterizedBy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterizedBy} The decoded data structure.
 */
export function _decode_CharacterizedBy(el: _Element): CharacterizedBy {
    if (!_cached_decoder_for_CharacterizedBy) {
        _cached_decoder_for_CharacterizedBy = _decode_TemplateList;
    }
    return _cached_decoder_for_CharacterizedBy(el);
}


let _cached_encoder_for_CharacterizedBy: $.ASN1Encoder<CharacterizedBy> | null = null;


/**
 * @summary Encodes a(n) CharacterizedBy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterizedBy, encoded as an ASN.1 Element.
 */
export function _encode_CharacterizedBy(
    value: CharacterizedBy,
    elGetter: $.ASN1Encoder<CharacterizedBy>
): _Element {
    if (!_cached_encoder_for_CharacterizedBy) {
        _cached_encoder_for_CharacterizedBy = _encode_TemplateList;
    }
    return _cached_encoder_for_CharacterizedBy(value, elGetter);
}


/* eslint-enable */
