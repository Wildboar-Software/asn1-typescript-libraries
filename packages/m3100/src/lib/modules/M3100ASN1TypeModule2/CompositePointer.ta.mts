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
    RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.mjs';


/**
 * @summary CompositePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompositePointer  ::=  RelatedObjectInstance
 * ```
 */
export type CompositePointer = RelatedObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CompositePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompositePointer} The decoded data structure.
 */
export const _decode_CompositePointer: $.ASN1Decoder<CompositePointer> = _decode_RelatedObjectInstance;

/**
 * @summary Encodes a(n) CompositePointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompositePointer, encoded as an ASN.1 Element.
 */
export const _encode_CompositePointer: $.ASN1Encoder<CompositePointer> = _encode_RelatedObjectInstance;


/* eslint-enable */
