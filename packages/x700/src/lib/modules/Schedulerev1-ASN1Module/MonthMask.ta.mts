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
    MonthMask_Item,
    _decode_MonthMask_Item,
    _encode_MonthMask_Item,
} from '../Schedulerev1-ASN1Module/MonthMask-Item.ta.mjs';

/**
 * @summary MonthMask
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonthMask  ::=
 *   SET OF SEQUENCE {daysOfMonth    DaysOfMonth,
 *                    timesOfDayWps  TimesOfDayWps}
 * ```
 */
export type MonthMask = MonthMask_Item[]; // SetOfType


let _cached_decoder_for_MonthMask: $.ASN1Decoder<MonthMask> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MonthMask
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MonthMask} The decoded data structure.
 */
export function _decode_MonthMask(el: _Element) {
    if (!_cached_decoder_for_MonthMask) {
        _cached_decoder_for_MonthMask = $._decodeSetOf<MonthMask_Item>(
            () => _decode_MonthMask_Item
        );
    }
    return _cached_decoder_for_MonthMask(el);
}


let _cached_encoder_for_MonthMask: $.ASN1Encoder<MonthMask> | null = null;


/**
 * @summary Encodes a(n) MonthMask into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonthMask, encoded as an ASN.1 Element.
 */
export function _encode_MonthMask(
    value: MonthMask,
    elGetter: $.ASN1Encoder<MonthMask>
) {
    if (!_cached_encoder_for_MonthMask) {
        _cached_encoder_for_MonthMask = $._encodeSetOf<MonthMask_Item>(
            () => _encode_MonthMask_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MonthMask(value, elGetter);
}


/* eslint-enable */
