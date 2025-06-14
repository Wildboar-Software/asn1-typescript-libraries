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
    WeekDayTranslationList_Item,
    _decode_WeekDayTranslationList_Item,
    _encode_WeekDayTranslationList_Item,
} from '../Schedulerev1-ASN1Module/WeekDayTranslationList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION WeekDayTranslationList */
/**
 * @summary WeekDayTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekDayTranslationList  ::=
 *   SET OF SEQUENCE {weekDay    [1]  WeekDay,
 *                    typeOfDay  [2]  TypeOfDay}
 * ```
 */
export type WeekDayTranslationList = WeekDayTranslationList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION WeekDayTranslationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDayTranslationList */
let _cached_decoder_for_WeekDayTranslationList: $.ASN1Decoder<WeekDayTranslationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDayTranslationList */

/* START_OF_SYMBOL_DEFINITION _decode_WeekDayTranslationList */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekDayTranslationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekDayTranslationList} The decoded data structure.
 */
export function _decode_WeekDayTranslationList(el: _Element) {
    if (!_cached_decoder_for_WeekDayTranslationList) {
        _cached_decoder_for_WeekDayTranslationList = $._decodeSetOf<WeekDayTranslationList_Item>(
            () => _decode_WeekDayTranslationList_Item
        );
    }
    return _cached_decoder_for_WeekDayTranslationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekDayTranslationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDayTranslationList */
let _cached_encoder_for_WeekDayTranslationList: $.ASN1Encoder<WeekDayTranslationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDayTranslationList */

/* START_OF_SYMBOL_DEFINITION _encode_WeekDayTranslationList */
/**
 * @summary Encodes a(n) WeekDayTranslationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekDayTranslationList, encoded as an ASN.1 Element.
 */
export function _encode_WeekDayTranslationList(
    value: WeekDayTranslationList,
    elGetter: $.ASN1Encoder<WeekDayTranslationList>
) {
    if (!_cached_encoder_for_WeekDayTranslationList) {
        _cached_encoder_for_WeekDayTranslationList = $._encodeSetOf<WeekDayTranslationList_Item>(
            () => _encode_WeekDayTranslationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_WeekDayTranslationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekDayTranslationList */

/* eslint-enable */
