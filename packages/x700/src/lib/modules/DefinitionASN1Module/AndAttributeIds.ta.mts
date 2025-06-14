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
    AndAttributeIds_Item,
    _decode_AndAttributeIds_Item,
    _encode_AndAttributeIds_Item,
} from '../DefinitionASN1Module/AndAttributeIds-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AndAttributeIds */
/**
 * @summary AndAttributeIds
 * @description
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
/* END_OF_SYMBOL_DEFINITION AndAttributeIds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AndAttributeIds */
let _cached_decoder_for_AndAttributeIds: $.ASN1Decoder<AndAttributeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AndAttributeIds */

/* START_OF_SYMBOL_DEFINITION _decode_AndAttributeIds */
/**
 * @summary Decodes an ASN.1 element into a(n) AndAttributeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AndAttributeIds} The decoded data structure.
 */
export function _decode_AndAttributeIds(el: _Element) {
    if (!_cached_decoder_for_AndAttributeIds) {
        _cached_decoder_for_AndAttributeIds = $._decodeSetOf<AndAttributeIds_Item>(
            () => _decode_AndAttributeIds_Item
        );
    }
    return _cached_decoder_for_AndAttributeIds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AndAttributeIds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AndAttributeIds */
let _cached_encoder_for_AndAttributeIds: $.ASN1Encoder<AndAttributeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AndAttributeIds */

/* START_OF_SYMBOL_DEFINITION _encode_AndAttributeIds */
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
) {
    if (!_cached_encoder_for_AndAttributeIds) {
        _cached_encoder_for_AndAttributeIds = $._encodeSetOf<AndAttributeIds_Item>(
            () => _encode_AndAttributeIds_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AndAttributeIds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AndAttributeIds */

/* eslint-enable */
