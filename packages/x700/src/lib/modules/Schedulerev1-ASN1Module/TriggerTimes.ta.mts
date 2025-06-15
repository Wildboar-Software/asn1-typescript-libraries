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
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.mjs';
/**
 * @summary TriggerTimes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerTimes  ::=  SET OF Time24Wps
 * ```
 */
export type TriggerTimes = Time24Wps[]; // SetOfType

let _cached_decoder_for_TriggerTimes: $.ASN1Decoder<TriggerTimes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerTimes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerTimes} The decoded data structure.
 */
export function _decode_TriggerTimes(el: _Element) {
    if (!_cached_decoder_for_TriggerTimes) {
        _cached_decoder_for_TriggerTimes = $._decodeSetOf<Time24Wps>(
            () => _decode_Time24Wps
        );
    }
    return _cached_decoder_for_TriggerTimes(el);
}

let _cached_encoder_for_TriggerTimes: $.ASN1Encoder<TriggerTimes> | null = null;

/**
 * @summary Encodes a(n) TriggerTimes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerTimes, encoded as an ASN.1 Element.
 */
export function _encode_TriggerTimes(
    value: TriggerTimes,
    elGetter: $.ASN1Encoder<TriggerTimes>
) {
    if (!_cached_encoder_for_TriggerTimes) {
        _cached_encoder_for_TriggerTimes = $._encodeSetOf<Time24Wps>(
            () => _encode_Time24Wps,
            $.BER
        );
    }
    return _cached_encoder_for_TriggerTimes(value, elGetter);
}


/* eslint-enable */
