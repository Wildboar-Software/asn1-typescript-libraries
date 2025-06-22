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
    RequestedCapacity,
    _decode_RequestedCapacity,
    _encode_RequestedCapacity,
} from '../M3100ASN1TypeModule2/RequestedCapacity.ta.mjs';

/**
 * @summary RemoveCapacityFromTopologicalLinkInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveCapacityFromTopologicalLinkInformation  ::=  RequestedCapacity
 * ```
 */
export type RemoveCapacityFromTopologicalLinkInformation = RequestedCapacity; // DefinedType


let _cached_decoder_for_RemoveCapacityFromTopologicalLinkInformation: $.ASN1Decoder<RemoveCapacityFromTopologicalLinkInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopologicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopologicalLinkInformation} The decoded data structure.
 */
export function _decode_RemoveCapacityFromTopologicalLinkInformation(
    el: _Element
) {
    if (!_cached_decoder_for_RemoveCapacityFromTopologicalLinkInformation) {
        _cached_decoder_for_RemoveCapacityFromTopologicalLinkInformation = _decode_RequestedCapacity;
    }
    return _cached_decoder_for_RemoveCapacityFromTopologicalLinkInformation(el);
}


let _cached_encoder_for_RemoveCapacityFromTopologicalLinkInformation: $.ASN1Encoder<RemoveCapacityFromTopologicalLinkInformation> | null = null;


/**
 * @summary Encodes a(n) RemoveCapacityFromTopologicalLinkInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopologicalLinkInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveCapacityFromTopologicalLinkInformation(
    value: RemoveCapacityFromTopologicalLinkInformation,
    elGetter: $.ASN1Encoder<RemoveCapacityFromTopologicalLinkInformation>
) {
    if (!_cached_encoder_for_RemoveCapacityFromTopologicalLinkInformation) {
        _cached_encoder_for_RemoveCapacityFromTopologicalLinkInformation = _encode_RequestedCapacity;
    }
    return _cached_encoder_for_RemoveCapacityFromTopologicalLinkInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
