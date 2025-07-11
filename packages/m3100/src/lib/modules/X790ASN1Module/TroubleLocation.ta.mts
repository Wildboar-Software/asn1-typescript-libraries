/* eslint-disable */
import {
    NULL,
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
    LocationAddress,
    _decode_LocationAddress,
    _encode_LocationAddress,
} from '../X790ASN1Module/LocationAddress.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary TroubleLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleLocation  ::=  CHOICE {
 *   locationAddress         [0]  LocationAddress,
 *   locationPtr             [1]  ObjectInstance,
 *   noTroubleLocationValue  [2]  NULL, -- used when Trouble Location not relevant
 *   ...
 * }
 * ```
 */
export type TroubleLocation =
    | { locationAddress: LocationAddress } /* CHOICE_ALT_ROOT */
    | { locationPtr: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { noTroubleLocationValue: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_TroubleLocation: $.ASN1Decoder<TroubleLocation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleLocation} The decoded data structure.
 */
export function _decode_TroubleLocation(el: _Element): TroubleLocation {
    if (!_cached_decoder_for_TroubleLocation) {
        _cached_decoder_for_TroubleLocation = $._decode_extensible_choice<TroubleLocation>(
            {
                'CONTEXT 0': [
                    'locationAddress',
                    $._decode_implicit<LocationAddress>(
                        () => _decode_LocationAddress
                    ),
                ],
                'CONTEXT 1': [
                    'locationPtr',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'noTroubleLocationValue',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_TroubleLocation(el);
}


let _cached_encoder_for_TroubleLocation: $.ASN1Encoder<TroubleLocation> | null = null;


/**
 * @summary Encodes a(n) TroubleLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleLocation, encoded as an ASN.1 Element.
 */
export function _encode_TroubleLocation(
    value: TroubleLocation,
    elGetter: $.ASN1Encoder<TroubleLocation>
): _Element {
    if (!_cached_encoder_for_TroubleLocation) {
        _cached_encoder_for_TroubleLocation = $._encode_choice<TroubleLocation>(
            {
                locationAddress: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_LocationAddress,
                    $.BER
                ),
                locationPtr: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                noTroubleLocationValue: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleLocation(value, elGetter);
}


/* eslint-enable */
