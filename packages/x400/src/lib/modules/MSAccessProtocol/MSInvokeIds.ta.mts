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
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose';
/**
 * @summary MSInvokeIds
 * @description
 *
 * Defined in ITU-T X.419 (1999) (§9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSInvokeIds  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type MSInvokeIds = InvokeId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSInvokeIds} The decoded data structure.
 */
export const _decode_MSInvokeIds: $.ASN1Decoder<MSInvokeIds> = _decode_InvokeId;

/**
 * @summary Encodes a(n) MSInvokeIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSInvokeIds, encoded as an ASN.1 Element.
 */
export const _encode_MSInvokeIds: $.ASN1Encoder<MSInvokeIds> = _encode_InvokeId;


/* eslint-enable */
