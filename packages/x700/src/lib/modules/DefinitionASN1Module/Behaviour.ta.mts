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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/**
 * @summary Behaviour
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Behaviour  ::=  TemplateList
 * ```
 */
export type Behaviour = TemplateList; // DefinedType


let _cached_decoder_for_Behaviour: $.ASN1Decoder<Behaviour> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Behaviour
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Behaviour} The decoded data structure.
 */
export function _decode_Behaviour(el: _Element) {
    if (!_cached_decoder_for_Behaviour) {
        _cached_decoder_for_Behaviour = _decode_TemplateList;
    }
    return _cached_decoder_for_Behaviour(el);
}


let _cached_encoder_for_Behaviour: $.ASN1Encoder<Behaviour> | null = null;


/**
 * @summary Encodes a(n) Behaviour into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Behaviour, encoded as an ASN.1 Element.
 */
export function _encode_Behaviour(
    value: Behaviour,
    elGetter: $.ASN1Encoder<Behaviour>
) {
    if (!_cached_encoder_for_Behaviour) {
        _cached_encoder_for_Behaviour = _encode_TemplateList;
    }
    return _cached_encoder_for_Behaviour(value, elGetter);
}


/* eslint-enable */
