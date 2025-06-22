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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary SequenceOfObjectInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfObjectInstance  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type SequenceOfObjectInstance = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_SequenceOfObjectInstance: $.ASN1Decoder<SequenceOfObjectInstance> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfObjectInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfObjectInstance} The decoded data structure.
 */
export function _decode_SequenceOfObjectInstance(el: _Element) {
    if (!_cached_decoder_for_SequenceOfObjectInstance) {
        _cached_decoder_for_SequenceOfObjectInstance = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_SequenceOfObjectInstance(el);
}


let _cached_encoder_for_SequenceOfObjectInstance: $.ASN1Encoder<SequenceOfObjectInstance> | null = null;


/**
 * @summary Encodes a(n) SequenceOfObjectInstance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfObjectInstance, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfObjectInstance(
    value: SequenceOfObjectInstance,
    elGetter: $.ASN1Encoder<SequenceOfObjectInstance>
) {
    if (!_cached_encoder_for_SequenceOfObjectInstance) {
        _cached_encoder_for_SequenceOfObjectInstance = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfObjectInstance(value, elGetter);
}


/* eslint-enable */
