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
    ObjectClassList_Item,
    _decode_ObjectClassList_Item,
    _encode_ObjectClassList_Item,
} from '../AccessControl-ASN1Module/ObjectClassList-Item.ta.mjs';
/**
 * @summary ObjectClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassList  ::=
 *   SET OF
 *     SEQUENCE {objectClass  [0]  ObjectClass,
 *               nameBinding  [1]  OBJECT IDENTIFIER OPTIONAL}
 * ```
 */
export type ObjectClassList = ObjectClassList_Item[]; // SetOfType

let _cached_decoder_for_ObjectClassList: $.ASN1Decoder<ObjectClassList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassList} The decoded data structure.
 */
export function _decode_ObjectClassList(el: _Element) {
    if (!_cached_decoder_for_ObjectClassList) {
        _cached_decoder_for_ObjectClassList = $._decodeSetOf<ObjectClassList_Item>(
            () => _decode_ObjectClassList_Item
        );
    }
    return _cached_decoder_for_ObjectClassList(el);
}

let _cached_encoder_for_ObjectClassList: $.ASN1Encoder<ObjectClassList> | null = null;

/**
 * @summary Encodes a(n) ObjectClassList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassList, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassList(
    value: ObjectClassList,
    elGetter: $.ASN1Encoder<ObjectClassList>
) {
    if (!_cached_encoder_for_ObjectClassList) {
        _cached_encoder_for_ObjectClassList = $._encodeSetOf<ObjectClassList_Item>(
            () => _encode_ObjectClassList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ObjectClassList(value, elGetter);
}


/* eslint-enable */
