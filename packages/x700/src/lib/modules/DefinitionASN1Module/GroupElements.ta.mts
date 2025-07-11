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
 * @summary GroupElements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GroupElements  ::=  TemplateList
 * ```
 */
export type GroupElements = TemplateList; // DefinedType


let _cached_decoder_for_GroupElements: $.ASN1Decoder<GroupElements> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GroupElements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GroupElements} The decoded data structure.
 */
export function _decode_GroupElements(el: _Element): GroupElements {
    if (!_cached_decoder_for_GroupElements) {
        _cached_decoder_for_GroupElements = _decode_TemplateList;
    }
    return _cached_decoder_for_GroupElements(el);
}


let _cached_encoder_for_GroupElements: $.ASN1Encoder<GroupElements> | null = null;


/**
 * @summary Encodes a(n) GroupElements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupElements, encoded as an ASN.1 Element.
 */
export function _encode_GroupElements(
    value: GroupElements,
    elGetter: $.ASN1Encoder<GroupElements>
): _Element {
    if (!_cached_encoder_for_GroupElements) {
        _cached_encoder_for_GroupElements = _encode_TemplateList;
    }
    return _cached_encoder_for_GroupElements(value, elGetter);
}


/* eslint-enable */
