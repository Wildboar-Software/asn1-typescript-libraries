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
    type GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta.mjs';

/**
 * @summary ContactCompany
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactCompany  ::=  GraphicStringBase
 * ```
 */
export type ContactCompany = GraphicStringBase; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContactCompany
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactCompany} The decoded data structure.
 */
export const _decode_ContactCompany: $.ASN1Decoder<ContactCompany> = _decode_GraphicStringBase;

/**
 * @summary Encodes a(n) ContactCompany into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactCompany, encoded as an ASN.1 Element.
 */
export const _encode_ContactCompany: $.ASN1Encoder<ContactCompany> = _encode_GraphicStringBase;


/* eslint-enable */
