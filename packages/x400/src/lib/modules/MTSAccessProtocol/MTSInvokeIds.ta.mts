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
    type InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose';
/**
 * @summary MTSInvokeIds
 * @description
 *
 * Defined in ITU-T X.419 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSInvokeIds  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type MTSInvokeIds = InvokeId; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MTSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSInvokeIds} The decoded data structure.
 */
export const _decode_MTSInvokeIds: $.ASN1Decoder<MTSInvokeIds> = _decode_InvokeId;

/**
 * @summary Encodes a(n) MTSInvokeIds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSInvokeIds, encoded as an ASN.1 Element.
 */
export const _encode_MTSInvokeIds: $.ASN1Encoder<MTSInvokeIds> = _encode_InvokeId;


/* eslint-enable */
