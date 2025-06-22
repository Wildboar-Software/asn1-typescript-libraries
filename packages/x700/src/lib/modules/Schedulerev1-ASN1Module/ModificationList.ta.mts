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
    ModificationList_Item,
    _decode_ModificationList_Item,
    _encode_ModificationList_Item,
} from '../Schedulerev1-ASN1Module/ModificationList-Item.ta.mjs';
/**
 * @summary ModificationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationList  ::=
 *   SET OF
 *     SEQUENCE {modifyOperator  [2] IMPLICIT ModifyOperator DEFAULT replace,
 *               attributeId     CMIP-ATTRIBUTE.&id({AttributeSet}),
 *               attributeValue
 *                 CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId})
 *                   OPTIONAL}
 * ```
 */
export type ModificationList = ModificationList_Item[]; // SetOfType

let _cached_decoder_for_ModificationList: $.ASN1Decoder<ModificationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModificationList} The decoded data structure.
 */
export function _decode_ModificationList(el: _Element) {
    if (!_cached_decoder_for_ModificationList) {
        _cached_decoder_for_ModificationList = $._decodeSetOf<ModificationList_Item>(
            () => _decode_ModificationList_Item
        );
    }
    return _cached_decoder_for_ModificationList(el);
}

let _cached_encoder_for_ModificationList: $.ASN1Encoder<ModificationList> | null = null;

/**
 * @summary Encodes a(n) ModificationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationList, encoded as an ASN.1 Element.
 */
export function _encode_ModificationList(
    value: ModificationList,
    elGetter: $.ASN1Encoder<ModificationList>
) {
    if (!_cached_encoder_for_ModificationList) {
        _cached_encoder_for_ModificationList = $._encodeSetOf<ModificationList_Item>(
            () => _encode_ModificationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ModificationList(value, elGetter);
}


/* eslint-enable */
