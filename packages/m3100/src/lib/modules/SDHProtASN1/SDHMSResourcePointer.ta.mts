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
    type ResourcePointer,
    _decode_ResourcePointer,
    _encode_ResourcePointer,
} from '../SDHProtASN1/ResourcePointer.ta.mjs';

/**
 * @summary SDHMSResourcePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDHMSResourcePointer  ::=
 *   ResourcePointer(WITH COMPONENTS {
 *                     ...,
 *                     objectInstances  (SIZE (1))
 *                   })
 * ```
 */
export type SDHMSResourcePointer = ResourcePointer; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SDHMSResourcePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDHMSResourcePointer} The decoded data structure.
 */
export const _decode_SDHMSResourcePointer: $.ASN1Decoder<SDHMSResourcePointer> = _decode_ResourcePointer;

/**
 * @summary Encodes a(n) SDHMSResourcePointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDHMSResourcePointer, encoded as an ASN.1 Element.
 */
export const _encode_SDHMSResourcePointer: $.ASN1Encoder<SDHMSResourcePointer> = _encode_ResourcePointer;


/* eslint-enable */
