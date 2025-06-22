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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/**
 * @summary BindingOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindingOperations  ::=
 *   EventTypeId
 *     (ms-bind | ms-unbind | mta-bind | mta-unbind | mts-bind | mts-unbind)
 * ```
 */
export type BindingOperations = EventTypeId; // DefinedType

let _cached_decoder_for_BindingOperations: $.ASN1Decoder<BindingOperations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindingOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindingOperations} The decoded data structure.
 */
export function _decode_BindingOperations(el: _Element) {
    if (!_cached_decoder_for_BindingOperations) {
        _cached_decoder_for_BindingOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_BindingOperations(el);
}

let _cached_encoder_for_BindingOperations: $.ASN1Encoder<BindingOperations> | null = null;

/**
 * @summary Encodes a(n) BindingOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindingOperations, encoded as an ASN.1 Element.
 */
export function _encode_BindingOperations(
    value: BindingOperations,
    elGetter: $.ASN1Encoder<BindingOperations>
) {
    if (!_cached_encoder_for_BindingOperations) {
        _cached_encoder_for_BindingOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_BindingOperations(value, elGetter);
}


/* eslint-enable */
