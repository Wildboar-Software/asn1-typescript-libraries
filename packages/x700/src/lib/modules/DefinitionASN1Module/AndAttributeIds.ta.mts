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
    AndAttributeIds_Item,
    _decode_AndAttributeIds_Item,
    _encode_AndAttributeIds_Item,
} from '../DefinitionASN1Module/AndAttributeIds-Item.ta.mjs';

/**
 * @summary AndAttributeIds
 * @description
 *
 * GDMO notification `AND ATTRIBUTE IDS` construct: assignment of
 * attributes to named fields of the notification information syntax.
 * Syntax of the `andAttributeIds` attribute of a notification-template
 * managed object. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.9](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722 (01/92)
 * [§8.11.3.3](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AndAttributeIds  ::=
 *   SET OF SEQUENCE {fieldName  Identifier,
 *                    attribute  TemplateLabel}
 * ```
 */
export type AndAttributeIds = AndAttributeIds_Item[]; // SetOfType


let _cached_decoder_for_AndAttributeIds: $.ASN1Decoder<AndAttributeIds> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AndAttributeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AndAttributeIds} The decoded data structure.
 */
export function _decode_AndAttributeIds(el: _Element): AndAttributeIds {
    if (!_cached_decoder_for_AndAttributeIds) {
        _cached_decoder_for_AndAttributeIds = $._decodeSetOf<AndAttributeIds_Item>(
            () => _decode_AndAttributeIds_Item
        );
    }
    return _cached_decoder_for_AndAttributeIds(el);
}


let _cached_encoder_for_AndAttributeIds: $.ASN1Encoder<AndAttributeIds> | null = null;


/**
 * @summary Encodes a(n) AndAttributeIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AndAttributeIds, encoded as an ASN.1 Element.
 */
export function _encode_AndAttributeIds(
    value: AndAttributeIds,
    elGetter: $.ASN1Encoder<AndAttributeIds>
): _Element {
    if (!_cached_encoder_for_AndAttributeIds) {
        _cached_encoder_for_AndAttributeIds = $._encodeSetOf<AndAttributeIds_Item>(
            () => _encode_AndAttributeIds_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AndAttributeIds(value, elGetter);
}


/* eslint-enable */
