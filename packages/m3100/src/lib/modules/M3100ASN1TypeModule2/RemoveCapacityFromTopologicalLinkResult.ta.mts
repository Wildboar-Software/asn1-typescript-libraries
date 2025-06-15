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
    Capacity,
    _decode_Capacity,
    _encode_Capacity,
} from '../M3100ASN1TypeModule2/Capacity.ta.mjs';

/**
 * @summary RemoveCapacityFromTopologicalLinkResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveCapacityFromTopologicalLinkResult  ::=  Capacity
 * ```
 */
export type RemoveCapacityFromTopologicalLinkResult = Capacity; // DefinedType


let _cached_decoder_for_RemoveCapacityFromTopologicalLinkResult: $.ASN1Decoder<RemoveCapacityFromTopologicalLinkResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopologicalLinkResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopologicalLinkResult} The decoded data structure.
 */
export function _decode_RemoveCapacityFromTopologicalLinkResult(el: _Element) {
    if (!_cached_decoder_for_RemoveCapacityFromTopologicalLinkResult) {
        _cached_decoder_for_RemoveCapacityFromTopologicalLinkResult = _decode_Capacity;
    }
    return _cached_decoder_for_RemoveCapacityFromTopologicalLinkResult(el);
}


let _cached_encoder_for_RemoveCapacityFromTopologicalLinkResult: $.ASN1Encoder<RemoveCapacityFromTopologicalLinkResult> | null = null;


/**
 * @summary Encodes a(n) RemoveCapacityFromTopologicalLinkResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopologicalLinkResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveCapacityFromTopologicalLinkResult(
    value: RemoveCapacityFromTopologicalLinkResult,
    elGetter: $.ASN1Encoder<RemoveCapacityFromTopologicalLinkResult>
) {
    if (!_cached_encoder_for_RemoveCapacityFromTopologicalLinkResult) {
        _cached_encoder_for_RemoveCapacityFromTopologicalLinkResult = _encode_Capacity;
    }
    return _cached_encoder_for_RemoveCapacityFromTopologicalLinkResult(
        value,
        elGetter
    );
}


/* eslint-enable */
