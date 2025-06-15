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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary TrafficDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrafficDescriptor  ::=  ObjectInstance
 * ```
 */
export type TrafficDescriptor = ObjectInstance; // DefinedType


let _cached_decoder_for_TrafficDescriptor: $.ASN1Decoder<TrafficDescriptor> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TrafficDescriptor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrafficDescriptor} The decoded data structure.
 */
export function _decode_TrafficDescriptor(el: _Element) {
    if (!_cached_decoder_for_TrafficDescriptor) {
        _cached_decoder_for_TrafficDescriptor = _decode_ObjectInstance;
    }
    return _cached_decoder_for_TrafficDescriptor(el);
}


let _cached_encoder_for_TrafficDescriptor: $.ASN1Encoder<TrafficDescriptor> | null = null;


/**
 * @summary Encodes a(n) TrafficDescriptor into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrafficDescriptor, encoded as an ASN.1 Element.
 */
export function _encode_TrafficDescriptor(
    value: TrafficDescriptor,
    elGetter: $.ASN1Encoder<TrafficDescriptor>
) {
    if (!_cached_encoder_for_TrafficDescriptor) {
        _cached_encoder_for_TrafficDescriptor = _encode_ObjectInstance;
    }
    return _cached_encoder_for_TrafficDescriptor(value, elGetter);
}


/* eslint-enable */
