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
    WeekMaskWps_Item,
    _decode_WeekMaskWps_Item,
    _encode_WeekMaskWps_Item,
} from '../Schedulerev1-ASN1Module/WeekMaskWps-Item.ta.mjs';

/**
 * @summary WeekMaskWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekMaskWps  ::=
 *   SET OF SEQUENCE {daysOfWeek     DaysOfWeek,
 *                    timesOfDayWps  TimesOfDayWps}
 * ```
 */
export type WeekMaskWps = WeekMaskWps_Item[]; // SetOfType


let _cached_decoder_for_WeekMaskWps: $.ASN1Decoder<WeekMaskWps> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) WeekMaskWps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMaskWps} The decoded data structure.
 */
export function _decode_WeekMaskWps(el: _Element) {
    if (!_cached_decoder_for_WeekMaskWps) {
        _cached_decoder_for_WeekMaskWps = $._decodeSetOf<WeekMaskWps_Item>(
            () => _decode_WeekMaskWps_Item
        );
    }
    return _cached_decoder_for_WeekMaskWps(el);
}


let _cached_encoder_for_WeekMaskWps: $.ASN1Encoder<WeekMaskWps> | null = null;


/**
 * @summary Encodes a(n) WeekMaskWps into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMaskWps, encoded as an ASN.1 Element.
 */
export function _encode_WeekMaskWps(
    value: WeekMaskWps,
    elGetter: $.ASN1Encoder<WeekMaskWps>
) {
    if (!_cached_encoder_for_WeekMaskWps) {
        _cached_encoder_for_WeekMaskWps = $._encodeSetOf<WeekMaskWps_Item>(
            () => _encode_WeekMaskWps_Item,
            $.BER
        );
    }
    return _cached_encoder_for_WeekMaskWps(value, elGetter);
}


/* eslint-enable */
