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
    type GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta.mjs';

/**
 * @summary GraphicString128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicString128  ::=  GraphicStringBase(SIZE (0..128))
 * ```
 */
export type GraphicString128 = GraphicStringBase; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GraphicString128
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GraphicString128} The decoded data structure.
 */
export const _decode_GraphicString128: $.ASN1Decoder<GraphicString128> = _decode_GraphicStringBase;

/**
 * @summary Encodes a(n) GraphicString128 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicString128, encoded as an ASN.1 Element.
 */
export const _encode_GraphicString128: $.ASN1Encoder<GraphicString128> = _encode_GraphicStringBase;


/* eslint-enable */
