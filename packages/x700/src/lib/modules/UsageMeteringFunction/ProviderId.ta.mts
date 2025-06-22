/* eslint-disable */
import {
    NULL,
    GraphicString,
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
import {
    ServiceSpecificId,
    _decode_ServiceSpecificId,
    _encode_ServiceSpecificId,
} from '../UsageMeteringFunction/ServiceSpecificId.ta.mjs';
/**
 * @summary ProviderId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProviderId  ::=  CHOICE {
 *   objectReference  [1]  ObjectInstance,
 *   textualName      [2]  GraphicString,
 *   serviceSpecific  [3]  ServiceSpecificId,
 *   unknown          [4]  NULL
 * }
 * ```
 */
export type ProviderId =
    | { objectReference: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { textualName: GraphicString } /* CHOICE_ALT_ROOT */
    | { serviceSpecific: ServiceSpecificId } /* CHOICE_ALT_ROOT */
    | { unknown: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProviderId: $.ASN1Decoder<ProviderId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProviderId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProviderId} The decoded data structure.
 */
export function _decode_ProviderId(el: _Element) {
    if (!_cached_decoder_for_ProviderId) {
        _cached_decoder_for_ProviderId = $._decode_inextensible_choice<ProviderId>(
            {
                'CONTEXT 1': [
                    'objectReference',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'textualName',
                    $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    ),
                ],
                'CONTEXT 3': [
                    'serviceSpecific',
                    $._decode_implicit<ServiceSpecificId>(
                        () => _decode_ServiceSpecificId
                    ),
                ],
                'CONTEXT 4': [
                    'unknown',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_ProviderId(el);
}

let _cached_encoder_for_ProviderId: $.ASN1Encoder<ProviderId> | null = null;

/**
 * @summary Encodes a(n) ProviderId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProviderId, encoded as an ASN.1 Element.
 */
export function _encode_ProviderId(
    value: ProviderId,
    elGetter: $.ASN1Encoder<ProviderId>
) {
    if (!_cached_encoder_for_ProviderId) {
        _cached_encoder_for_ProviderId = $._encode_choice<ProviderId>(
            {
                objectReference: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                textualName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeGraphicString,
                    $.BER
                ),
                serviceSpecific: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ServiceSpecificId,
                    $.BER
                ),
                unknown: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProviderId(value, elGetter);
}


/* eslint-enable */
