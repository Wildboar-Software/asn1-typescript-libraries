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
    RepairActivityList_Item,
    _decode_RepairActivityList_Item,
    _encode_RepairActivityList_Item,
} from '../X790ASN1Module/RepairActivityList-Item.ta.mjs';

/**
 * @summary RepairActivityList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepairActivityList  ::=
 *   SET OF
 *     SEQUENCE {entryTime       GeneralizedTime,
 *               activityInfo    GraphicString,
 *               activityPerson  PersonReach OPTIONAL,
 *               activityCode    ActivityCode OPTIONAL,
 *               ...}
 * ```
 */
export type RepairActivityList = RepairActivityList_Item[]; // SetOfType


let _cached_decoder_for_RepairActivityList: $.ASN1Decoder<RepairActivityList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RepairActivityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepairActivityList} The decoded data structure.
 */
export function _decode_RepairActivityList(el: _Element) {
    if (!_cached_decoder_for_RepairActivityList) {
        _cached_decoder_for_RepairActivityList = $._decodeSetOf<RepairActivityList_Item>(
            () => _decode_RepairActivityList_Item
        );
    }
    return _cached_decoder_for_RepairActivityList(el);
}


let _cached_encoder_for_RepairActivityList: $.ASN1Encoder<RepairActivityList> | null = null;


/**
 * @summary Encodes a(n) RepairActivityList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepairActivityList, encoded as an ASN.1 Element.
 */
export function _encode_RepairActivityList(
    value: RepairActivityList,
    elGetter: $.ASN1Encoder<RepairActivityList>
) {
    if (!_cached_encoder_for_RepairActivityList) {
        _cached_encoder_for_RepairActivityList = $._encodeSetOf<RepairActivityList_Item>(
            () => _encode_RepairActivityList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RepairActivityList(value, elGetter);
}


/* eslint-enable */
