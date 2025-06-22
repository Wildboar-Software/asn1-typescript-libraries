/* eslint-disable */
import {
    GraphicString,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary DistributedSoftware
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributedSoftware  ::=  CHOICE {
 *   distibutedSoftwareId        GraphicString,
 *   distributedSoftwarePointer  ObjectInstance
 * }
 * ```
 */
export type DistributedSoftware =
    | { distibutedSoftwareId: GraphicString } /* CHOICE_ALT_ROOT */
    | { distributedSoftwarePointer: ObjectInstance } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DistributedSoftware: $.ASN1Decoder<DistributedSoftware> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributedSoftware
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributedSoftware} The decoded data structure.
 */
export function _decode_DistributedSoftware(el: _Element) {
    if (!_cached_decoder_for_DistributedSoftware) {
        _cached_decoder_for_DistributedSoftware = $._decode_inextensible_choice<DistributedSoftware>(
            {
                'UNIVERSAL 25': [
                    'distibutedSoftwareId',
                    $._decodeGraphicString,
                ],
                'CONTEXT 2': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
                'CONTEXT 3': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
                'CONTEXT 4': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
            }
        );
    }
    return _cached_decoder_for_DistributedSoftware(el);
}

let _cached_encoder_for_DistributedSoftware: $.ASN1Encoder<DistributedSoftware> | null = null;

/**
 * @summary Encodes a(n) DistributedSoftware into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributedSoftware, encoded as an ASN.1 Element.
 */
export function _encode_DistributedSoftware(
    value: DistributedSoftware,
    elGetter: $.ASN1Encoder<DistributedSoftware>
) {
    if (!_cached_encoder_for_DistributedSoftware) {
        _cached_encoder_for_DistributedSoftware = $._encode_choice<DistributedSoftware>(
            {
                distibutedSoftwareId: $._encodeGraphicString,
                distributedSoftwarePointer: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DistributedSoftware(value, elGetter);
}


/* eslint-enable */
