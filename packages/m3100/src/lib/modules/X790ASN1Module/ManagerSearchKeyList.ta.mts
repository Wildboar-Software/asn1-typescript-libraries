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
    ManagerSearchKeyList_Item,
    _decode_ManagerSearchKeyList_Item,
    _encode_ManagerSearchKeyList_Item,
} from '../X790ASN1Module/ManagerSearchKeyList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ManagerSearchKeyList */
/**
 * @summary ManagerSearchKeyList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerSearchKeyList  ::=
 *   SET OF
 *     CHOICE {searchString    ManagerSearchString,
 *             objectInstance  ObjectInstance,
 *             ...}
 * ```
 */
export type ManagerSearchKeyList = ManagerSearchKeyList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ManagerSearchKeyList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKeyList */
let _cached_decoder_for_ManagerSearchKeyList: $.ASN1Decoder<ManagerSearchKeyList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKeyList */

/* START_OF_SYMBOL_DEFINITION _decode_ManagerSearchKeyList */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagerSearchKeyList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagerSearchKeyList} The decoded data structure.
 */
export function _decode_ManagerSearchKeyList(el: _Element) {
    if (!_cached_decoder_for_ManagerSearchKeyList) {
        _cached_decoder_for_ManagerSearchKeyList = $._decodeSetOf<ManagerSearchKeyList_Item>(
            () => _decode_ManagerSearchKeyList_Item
        );
    }
    return _cached_decoder_for_ManagerSearchKeyList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagerSearchKeyList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKeyList */
let _cached_encoder_for_ManagerSearchKeyList: $.ASN1Encoder<ManagerSearchKeyList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKeyList */

/* START_OF_SYMBOL_DEFINITION _encode_ManagerSearchKeyList */
/**
 * @summary Encodes a(n) ManagerSearchKeyList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagerSearchKeyList, encoded as an ASN.1 Element.
 */
export function _encode_ManagerSearchKeyList(
    value: ManagerSearchKeyList,
    elGetter: $.ASN1Encoder<ManagerSearchKeyList>
) {
    if (!_cached_encoder_for_ManagerSearchKeyList) {
        _cached_encoder_for_ManagerSearchKeyList = $._encodeSetOf<ManagerSearchKeyList_Item>(
            () => _encode_ManagerSearchKeyList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ManagerSearchKeyList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagerSearchKeyList */

/* eslint-enable */
