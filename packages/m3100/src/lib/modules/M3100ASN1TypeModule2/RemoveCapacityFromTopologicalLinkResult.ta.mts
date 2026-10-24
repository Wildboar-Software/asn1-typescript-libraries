/* eslint-disable */
import {
    type ASN1Element as _Element,
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

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopologicalLinkResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopologicalLinkResult} The decoded data structure.
 */
export const _decode_RemoveCapacityFromTopologicalLinkResult: $.ASN1Decoder<RemoveCapacityFromTopologicalLinkResult> = _decode_Capacity;

/**
 * @summary Encodes a(n) RemoveCapacityFromTopologicalLinkResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopologicalLinkResult, encoded as an ASN.1 Element.
 */
export const _encode_RemoveCapacityFromTopologicalLinkResult: $.ASN1Encoder<RemoveCapacityFromTopologicalLinkResult> = _encode_Capacity;


/* eslint-enable */
