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
    IntervalsOfDayWps_Item,
    _decode_IntervalsOfDayWps_Item,
    _encode_IntervalsOfDayWps_Item,
} from '../Schedulerev1-ASN1Module/IntervalsOfDayWps-Item.ta.mjs';

/**
 * @summary IntervalsOfDayWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntervalsOfDayWps  ::=
 *   SET OF SEQUENCE {intervalStart  Time24Wps,
 *                    intervalEnd    Time24Wps}
 * ```
 */
export type IntervalsOfDayWps = IntervalsOfDayWps_Item[]; // SetOfType


let _cached_decoder_for_IntervalsOfDayWps: $.ASN1Decoder<IntervalsOfDayWps> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IntervalsOfDayWps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntervalsOfDayWps} The decoded data structure.
 */
export function _decode_IntervalsOfDayWps(el: _Element) {
    if (!_cached_decoder_for_IntervalsOfDayWps) {
        _cached_decoder_for_IntervalsOfDayWps = $._decodeSetOf<IntervalsOfDayWps_Item>(
            () => _decode_IntervalsOfDayWps_Item
        );
    }
    return _cached_decoder_for_IntervalsOfDayWps(el);
}


let _cached_encoder_for_IntervalsOfDayWps: $.ASN1Encoder<IntervalsOfDayWps> | null = null;


/**
 * @summary Encodes a(n) IntervalsOfDayWps into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalsOfDayWps, encoded as an ASN.1 Element.
 */
export function _encode_IntervalsOfDayWps(
    value: IntervalsOfDayWps,
    elGetter: $.ASN1Encoder<IntervalsOfDayWps>
) {
    if (!_cached_encoder_for_IntervalsOfDayWps) {
        _cached_encoder_for_IntervalsOfDayWps = $._encodeSetOf<IntervalsOfDayWps_Item>(
            () => _encode_IntervalsOfDayWps_Item,
            $.BER
        );
    }
    return _cached_encoder_for_IntervalsOfDayWps(value, elGetter);
}


/* eslint-enable */
