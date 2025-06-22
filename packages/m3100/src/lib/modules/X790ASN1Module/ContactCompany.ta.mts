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
    GraphicStringBase,
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


let _cached_decoder_for_ContactCompany: $.ASN1Decoder<ContactCompany> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContactCompany
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactCompany} The decoded data structure.
 */
export function _decode_ContactCompany(el: _Element) {
    if (!_cached_decoder_for_ContactCompany) {
        _cached_decoder_for_ContactCompany = _decode_GraphicStringBase;
    }
    return _cached_decoder_for_ContactCompany(el);
}


let _cached_encoder_for_ContactCompany: $.ASN1Encoder<ContactCompany> | null = null;


/**
 * @summary Encodes a(n) ContactCompany into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactCompany, encoded as an ASN.1 Element.
 */
export function _encode_ContactCompany(
    value: ContactCompany,
    elGetter: $.ASN1Encoder<ContactCompany>
) {
    if (!_cached_encoder_for_ContactCompany) {
        _cached_encoder_for_ContactCompany = _encode_GraphicStringBase;
    }
    return _cached_encoder_for_ContactCompany(value, elGetter);
}


/* eslint-enable */
