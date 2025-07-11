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
    ExpectedAttributeList_Item,
    _decode_ExpectedAttributeList_Item,
    _encode_ExpectedAttributeList_Item,
} from '../ChangeOverASN1Productions/ExpectedAttributeList-Item.ta.mjs';
/**
 * @summary ExpectedAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpectedAttributeList  ::=
 *   SET OF
 *     SEQUENCE {modifyOperator  [0] IMPLICIT ModifyOperator DEFAULT replace,
 *               attributeId     [1]  CMIP-ATTRIBUTE.&id({AttributeSet}),
 *               attributeValue
 *                 [2]  CMIP-ATTRIBUTE.&Value({AttributeSet}{@.attributeId})
 *                   OPTIONAL}
 * ```
 */
export type ExpectedAttributeList = ExpectedAttributeList_Item[]; // SetOfType

let _cached_decoder_for_ExpectedAttributeList: $.ASN1Decoder<ExpectedAttributeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpectedAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpectedAttributeList} The decoded data structure.
 */
export function _decode_ExpectedAttributeList(el: _Element): ExpectedAttributeList {
    if (!_cached_decoder_for_ExpectedAttributeList) {
        _cached_decoder_for_ExpectedAttributeList = $._decodeSetOf<ExpectedAttributeList_Item>(
            () => _decode_ExpectedAttributeList_Item
        );
    }
    return _cached_decoder_for_ExpectedAttributeList(el);
}

let _cached_encoder_for_ExpectedAttributeList: $.ASN1Encoder<ExpectedAttributeList> | null = null;

/**
 * @summary Encodes a(n) ExpectedAttributeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpectedAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_ExpectedAttributeList(
    value: ExpectedAttributeList,
    elGetter: $.ASN1Encoder<ExpectedAttributeList>
): _Element {
    if (!_cached_encoder_for_ExpectedAttributeList) {
        _cached_encoder_for_ExpectedAttributeList = $._encodeSetOf<ExpectedAttributeList_Item>(
            () => _encode_ExpectedAttributeList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ExpectedAttributeList(value, elGetter);
}


/* eslint-enable */
