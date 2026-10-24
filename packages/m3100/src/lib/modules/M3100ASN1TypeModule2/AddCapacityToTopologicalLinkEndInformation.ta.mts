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
    RequestedPointCapacity,
    _decode_RequestedPointCapacity,
    _encode_RequestedPointCapacity,
} from '../M3100ASN1TypeModule2/RequestedPointCapacity.ta.mjs';

/**
 * @summary AddCapacityToTopologicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkEndInformation  ::=  RequestedPointCapacity
 * ```
 */
export type AddCapacityToTopologicalLinkEndInformation = RequestedPointCapacity; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkEndInformation} The decoded data structure.
 */
export const _decode_AddCapacityToTopologicalLinkEndInformation: $.ASN1Decoder<AddCapacityToTopologicalLinkEndInformation> = _decode_RequestedPointCapacity;

/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export const _encode_AddCapacityToTopologicalLinkEndInformation: $.ASN1Encoder<AddCapacityToTopologicalLinkEndInformation> = _encode_RequestedPointCapacity;


/* eslint-enable */
