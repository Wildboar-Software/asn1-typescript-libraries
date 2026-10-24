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
    type RelatedObject,
    _decode_RelatedObject,
    _encode_RelatedObject,
} from '../X790ASN1Module/RelatedObject.ta.mjs';

/**
 * @summary UnavailableServicePtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnavailableServicePtr  ::=  RelatedObject
 * ```
 */
export type UnavailableServicePtr = RelatedObject; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UnavailableServicePtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnavailableServicePtr} The decoded data structure.
 */
export const _decode_UnavailableServicePtr: $.ASN1Decoder<UnavailableServicePtr> = _decode_RelatedObject;

/**
 * @summary Encodes a(n) UnavailableServicePtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailableServicePtr, encoded as an ASN.1 Element.
 */
export const _encode_UnavailableServicePtr: $.ASN1Encoder<UnavailableServicePtr> = _encode_RelatedObject;


/* eslint-enable */
