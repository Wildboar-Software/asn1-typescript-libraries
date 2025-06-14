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
    ActionFilterList_Item,
    _decode_ActionFilterList_Item,
    _encode_ActionFilterList_Item,
} from '../AccessControl-ASN1Module/ActionFilterList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ActionFilterList */
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
/* END_OF_SYMBOL_DEFINITION ActionFilterList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionFilterList */
let _cached_decoder_for_ActionFilterList: $.ASN1Decoder<ActionFilterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionFilterList */

/* START_OF_SYMBOL_DEFINITION _decode_ActionFilterList */
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
/* END_OF_SYMBOL_DEFINITION _decode_ActionFilterList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionFilterList */
let _cached_encoder_for_ActionFilterList: $.ASN1Encoder<ActionFilterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionFilterList */

/* START_OF_SYMBOL_DEFINITION _encode_ActionFilterList */
/**
 * @summary Encodes a(n) ActionFilterList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ActionFilterList */

/* eslint-enable */
