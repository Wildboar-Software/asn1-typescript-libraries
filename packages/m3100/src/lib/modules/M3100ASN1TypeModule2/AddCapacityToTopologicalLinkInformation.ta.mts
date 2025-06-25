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
 * @summary AddCapacityToTopologicalLinkInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkInformation  ::=  RequestedCapacity
 * ```
 */
export type AddCapacityToTopologicalLinkInformation = RequestedCapacity; // DefinedType


let _cached_decoder_for_AddCapacityToTopologicalLinkInformation: $.ASN1Decoder<AddCapacityToTopologicalLinkInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkInformation} The decoded data structure.
 */
export function _decode_AddCapacityToTopologicalLinkInformation(el: _Element): AddCapacityToTopologicalLinkInformation {
    if (!_cached_decoder_for_AddCapacityToTopologicalLinkInformation) {
        _cached_decoder_for_AddCapacityToTopologicalLinkInformation = _decode_RequestedCapacity;
    }
    return _cached_decoder_for_AddCapacityToTopologicalLinkInformation(el);
}


let _cached_encoder_for_AddCapacityToTopologicalLinkInformation: $.ASN1Encoder<AddCapacityToTopologicalLinkInformation> | null = null;


/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddCapacityToTopologicalLinkInformation(
    value: AddCapacityToTopologicalLinkInformation,
    elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkInformation>
): _Element {
    if (!_cached_encoder_for_AddCapacityToTopologicalLinkInformation) {
        _cached_encoder_for_AddCapacityToTopologicalLinkInformation = _encode_RequestedCapacity;
    }
    return _cached_encoder_for_AddCapacityToTopologicalLinkInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
