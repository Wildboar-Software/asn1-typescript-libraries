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
    SignalRate,
    _decode_SignalRate,
    _encode_SignalRate,
} from '../M3100ASN1TypeModule2/SignalRate.ta.mjs';

/**
 * @summary AvailableSignalRateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvailableSignalRateList  ::=  SET OF SignalRate
 * ```
 */
export type AvailableSignalRateList = SignalRate[]; // SetOfType


let _cached_decoder_for_AvailableSignalRateList: $.ASN1Decoder<AvailableSignalRateList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AvailableSignalRateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailableSignalRateList} The decoded data structure.
 */
export function _decode_AvailableSignalRateList(el: _Element) {
    if (!_cached_decoder_for_AvailableSignalRateList) {
        _cached_decoder_for_AvailableSignalRateList = $._decodeSetOf<SignalRate>(
            () => _decode_SignalRate
        );
    }
    return _cached_decoder_for_AvailableSignalRateList(el);
}


let _cached_encoder_for_AvailableSignalRateList: $.ASN1Encoder<AvailableSignalRateList> | null = null;


/**
 * @summary Encodes a(n) AvailableSignalRateList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailableSignalRateList, encoded as an ASN.1 Element.
 */
export function _encode_AvailableSignalRateList(
    value: AvailableSignalRateList,
    elGetter: $.ASN1Encoder<AvailableSignalRateList>
) {
    if (!_cached_encoder_for_AvailableSignalRateList) {
        _cached_encoder_for_AvailableSignalRateList = $._encodeSetOf<SignalRate>(
            () => _encode_SignalRate,
            $.BER
        );
    }
    return _cached_encoder_for_AvailableSignalRateList(value, elGetter);
}


/* eslint-enable */
