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
    DateTranslationList_Item,
    _decode_DateTranslationList_Item,
    _encode_DateTranslationList_Item,
} from '../Schedulerev1-ASN1Module/DateTranslationList-Item.ta.mjs';
/**
 * @summary DateTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTranslationList  ::=
 *   SET OF SEQUENCE {date       [1]  Date,
 *                    typeOfDay  [2]  TypeOfDay}
 * ```
 */
export type DateTranslationList = DateTranslationList_Item[]; // SetOfType

let _cached_decoder_for_DateTranslationList: $.ASN1Decoder<DateTranslationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DateTranslationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateTranslationList} The decoded data structure.
 */
export function _decode_DateTranslationList(el: _Element) {
    if (!_cached_decoder_for_DateTranslationList) {
        _cached_decoder_for_DateTranslationList = $._decodeSetOf<DateTranslationList_Item>(
            () => _decode_DateTranslationList_Item
        );
    }
    return _cached_decoder_for_DateTranslationList(el);
}

let _cached_encoder_for_DateTranslationList: $.ASN1Encoder<DateTranslationList> | null = null;

/**
 * @summary Encodes a(n) DateTranslationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateTranslationList, encoded as an ASN.1 Element.
 */
export function _encode_DateTranslationList(
    value: DateTranslationList,
    elGetter: $.ASN1Encoder<DateTranslationList>
) {
    if (!_cached_encoder_for_DateTranslationList) {
        _cached_encoder_for_DateTranslationList = $._encodeSetOf<DateTranslationList_Item>(
            () => _encode_DateTranslationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_DateTranslationList(value, elGetter);
}


/* eslint-enable */
