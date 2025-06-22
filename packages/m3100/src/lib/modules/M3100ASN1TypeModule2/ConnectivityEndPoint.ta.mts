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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary ConnectivityEndPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityEndPoint  ::=  CHOICE {
 *   sncTp        [1]  ObjectInstance,
 *   linkEnd      [2]  ObjectInstance,
 *   accessGroup  [3]  ObjectInstance
 * }
 * ```
 */
export type ConnectivityEndPoint =
    | { sncTp: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { linkEnd: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { accessGroup: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ConnectivityEndPoint: $.ASN1Decoder<ConnectivityEndPoint> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityEndPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityEndPoint} The decoded data structure.
 */
export function _decode_ConnectivityEndPoint(el: _Element) {
    if (!_cached_decoder_for_ConnectivityEndPoint) {
        _cached_decoder_for_ConnectivityEndPoint = $._decode_inextensible_choice<ConnectivityEndPoint>(
            {
                'CONTEXT 1': [
                    'sncTp',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'linkEnd',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 3': [
                    'accessGroup',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectivityEndPoint(el);
}


let _cached_encoder_for_ConnectivityEndPoint: $.ASN1Encoder<ConnectivityEndPoint> | null = null;


/**
 * @summary Encodes a(n) ConnectivityEndPoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityEndPoint, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityEndPoint(
    value: ConnectivityEndPoint,
    elGetter: $.ASN1Encoder<ConnectivityEndPoint>
) {
    if (!_cached_encoder_for_ConnectivityEndPoint) {
        _cached_encoder_for_ConnectivityEndPoint = $._encode_choice<ConnectivityEndPoint>(
            {
                sncTp: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                linkEnd: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                accessGroup: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectivityEndPoint(value, elGetter);
}


/* eslint-enable */
