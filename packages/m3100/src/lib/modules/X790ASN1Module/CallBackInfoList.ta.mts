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
    CallBackInfoList_Item,
    _decode_CallBackInfoList_Item,
    _encode_CallBackInfoList_Item,
} from '../X790ASN1Module/CallBackInfoList-Item.ta.mjs';

/**
 * @summary CallBackInfoList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallBackInfoList  ::=
 *   SET OF
 *     CHOICE {escalation      [0]  PersonReach,
 *             beforeAutoTest  [1]  PersonReach,
 *             afterCleared    [2]  PersonReach,
 *             ...}
 * ```
 */
export type CallBackInfoList = CallBackInfoList_Item[]; // SetOfType


let _cached_decoder_for_CallBackInfoList: $.ASN1Decoder<CallBackInfoList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CallBackInfoList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CallBackInfoList} The decoded data structure.
 */
export function _decode_CallBackInfoList(el: _Element) {
    if (!_cached_decoder_for_CallBackInfoList) {
        _cached_decoder_for_CallBackInfoList = $._decodeSetOf<CallBackInfoList_Item>(
            () => _decode_CallBackInfoList_Item
        );
    }
    return _cached_decoder_for_CallBackInfoList(el);
}


let _cached_encoder_for_CallBackInfoList: $.ASN1Encoder<CallBackInfoList> | null = null;


/**
 * @summary Encodes a(n) CallBackInfoList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackInfoList, encoded as an ASN.1 Element.
 */
export function _encode_CallBackInfoList(
    value: CallBackInfoList,
    elGetter: $.ASN1Encoder<CallBackInfoList>
) {
    if (!_cached_encoder_for_CallBackInfoList) {
        _cached_encoder_for_CallBackInfoList = $._encodeSetOf<CallBackInfoList_Item>(
            () => _encode_CallBackInfoList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_CallBackInfoList(value, elGetter);
}


/* eslint-enable */
