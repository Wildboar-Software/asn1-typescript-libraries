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
    AccessControlList_Item,
    _decode_AccessControlList_Item,
    _encode_AccessControlList_Item,
} from '../AccessControl-ASN1Module/AccessControlList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AccessControlList */
/**
 * @summary AccessControlList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlList  ::=
 *   SET OF CHOICE {proxy          [0]  Proxy,
 *                  initiatorName  [1]  InitiatorName}
 * ```
 */
export type AccessControlList = AccessControlList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AccessControlList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlList */
let _cached_decoder_for_AccessControlList: $.ASN1Decoder<AccessControlList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessControlList */

/* START_OF_SYMBOL_DEFINITION _decode_AccessControlList */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControlList} The decoded data structure.
 */
export function _decode_AccessControlList(el: _Element) {
    if (!_cached_decoder_for_AccessControlList) {
        _cached_decoder_for_AccessControlList = $._decodeSetOf<AccessControlList_Item>(
            () => _decode_AccessControlList_Item
        );
    }
    return _cached_decoder_for_AccessControlList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessControlList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlList */
let _cached_encoder_for_AccessControlList: $.ASN1Encoder<AccessControlList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessControlList */

/* START_OF_SYMBOL_DEFINITION _encode_AccessControlList */
/**
 * @summary Encodes a(n) AccessControlList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlList, encoded as an ASN.1 Element.
 */
export function _encode_AccessControlList(
    value: AccessControlList,
    elGetter: $.ASN1Encoder<AccessControlList>
) {
    if (!_cached_encoder_for_AccessControlList) {
        _cached_encoder_for_AccessControlList = $._encodeSetOf<AccessControlList_Item>(
            () => _encode_AccessControlList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AccessControlList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessControlList */

/* eslint-enable */
