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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ConnectivityThreshold_time,
    _decode_ConnectivityThreshold_time,
    _encode_ConnectivityThreshold_time,
} from '../TestCategories-ASN1Module/ConnectivityThreshold-time.ta.mjs';
import {
    RawData,
    _decode_RawData,
    _encode_RawData,
} from '../TestCategories-ASN1Module/RawData.ta.mjs';
/**
 * @summary ConnectivityThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityThreshold  ::=  CHOICE {
 *   time     [0]  SEQUENCE {unitsType   UnitsType,
 *                           unitsTotal  UnitsTotal},
 *   rawData  [1]  RawData
 * }
 * ```
 */
export type ConnectivityThreshold =
    | { time: ConnectivityThreshold_time } /* CHOICE_ALT_ROOT */
    | { rawData: RawData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectivityThreshold: $.ASN1Decoder<ConnectivityThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityThreshold} The decoded data structure.
 */
export function _decode_ConnectivityThreshold(el: _Element): ConnectivityThreshold {
    if (!_cached_decoder_for_ConnectivityThreshold) {
        _cached_decoder_for_ConnectivityThreshold = $._decode_inextensible_choice<ConnectivityThreshold>(
            {
                'CONTEXT 0': [
                    'time',
                    $._decode_implicit<ConnectivityThreshold_time>(
                        () => _decode_ConnectivityThreshold_time
                    ),
                ],
                'CONTEXT 1': [
                    'rawData',
                    $._decode_implicit<RawData>(() => _decode_RawData),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectivityThreshold(el);
}

let _cached_encoder_for_ConnectivityThreshold: $.ASN1Encoder<ConnectivityThreshold> | null = null;

/**
 * @summary Encodes a(n) ConnectivityThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityThreshold, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityThreshold(
    value: ConnectivityThreshold,
    elGetter: $.ASN1Encoder<ConnectivityThreshold>
): _Element {
    if (!_cached_encoder_for_ConnectivityThreshold) {
        _cached_encoder_for_ConnectivityThreshold = $._encode_choice<ConnectivityThreshold>(
            {
                time: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ConnectivityThreshold_time,
                    $.BER
                ),
                rawData: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RawData,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityThreshold(value, elGetter);
}


/* eslint-enable */
