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
    AttributeGroups_Item,
    _decode_AttributeGroups_Item,
    _encode_AttributeGroups_Item,
} from '../DefinitionASN1Module/AttributeGroups-Item.ta.mjs';
/**
 * @summary AttributeGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeGroups  ::=
 *   SET OF SEQUENCE {group       TemplateLabel,
 *                    attributes  TemplateList OPTIONAL}
 * ```
 */
export type AttributeGroups = AttributeGroups_Item[]; // SetOfType

let _cached_decoder_for_AttributeGroups: $.ASN1Decoder<AttributeGroups> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeGroups
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeGroups} The decoded data structure.
 */
export function _decode_AttributeGroups(el: _Element): AttributeGroups {
    if (!_cached_decoder_for_AttributeGroups) {
        _cached_decoder_for_AttributeGroups = $._decodeSetOf<AttributeGroups_Item>(
            () => _decode_AttributeGroups_Item
        );
    }
    return _cached_decoder_for_AttributeGroups(el);
}

let _cached_encoder_for_AttributeGroups: $.ASN1Encoder<AttributeGroups> | null = null;

/**
 * @summary Encodes a(n) AttributeGroups into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeGroups, encoded as an ASN.1 Element.
 */
export function _encode_AttributeGroups(
    value: AttributeGroups,
    elGetter: $.ASN1Encoder<AttributeGroups>
): _Element {
    if (!_cached_encoder_for_AttributeGroups) {
        _cached_encoder_for_AttributeGroups = $._encodeSetOf<AttributeGroups_Item>(
            () => _encode_AttributeGroups_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeGroups(value, elGetter);
}


/* eslint-enable */
