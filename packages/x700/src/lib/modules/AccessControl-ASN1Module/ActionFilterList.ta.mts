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
    ActionFilterList_Item,
    _decode_ActionFilterList_Item,
    _encode_ActionFilterList_Item,
} from '../AccessControl-ASN1Module/ActionFilterList-Item.ta.mjs';
/**
 * @summary ActionFilterList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionFilterList  ::=
 *   SET OF
 *     SEQUENCE {actionTypeId         ActionTypeId,
 *               attributeFilterList  FilterList OPTIONAL}
 * ```
 */
export type ActionFilterList = ActionFilterList_Item[]; // SetOfType

let _cached_decoder_for_ActionFilterList: $.ASN1Decoder<ActionFilterList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionFilterList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionFilterList} The decoded data structure.
 */
export function _decode_ActionFilterList(el: _Element) {
    if (!_cached_decoder_for_ActionFilterList) {
        _cached_decoder_for_ActionFilterList = $._decodeSetOf<ActionFilterList_Item>(
            () => _decode_ActionFilterList_Item
        );
    }
    return _cached_decoder_for_ActionFilterList(el);
}

let _cached_encoder_for_ActionFilterList: $.ASN1Encoder<ActionFilterList> | null = null;

/**
 * @summary Encodes a(n) ActionFilterList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionFilterList, encoded as an ASN.1 Element.
 */
export function _encode_ActionFilterList(
    value: ActionFilterList,
    elGetter: $.ASN1Encoder<ActionFilterList>
) {
    if (!_cached_encoder_for_ActionFilterList) {
        _cached_encoder_for_ActionFilterList = $._encodeSetOf<ActionFilterList_Item>(
            () => _encode_ActionFilterList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ActionFilterList(value, elGetter);
}


/* eslint-enable */
