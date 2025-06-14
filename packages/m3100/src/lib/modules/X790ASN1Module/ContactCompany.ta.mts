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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ContactCompany */
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
/* END_OF_SYMBOL_DEFINITION ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */
let _cached_decoder_for_ContactCompany: $.ASN1Decoder<ContactCompany> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _decode_ContactCompany */
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
/* END_OF_SYMBOL_DEFINITION _decode_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */
let _cached_encoder_for_ContactCompany: $.ASN1Encoder<ContactCompany> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _encode_ContactCompany */
/**
 * @summary Encodes a(n) ContactCompany into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_ContactCompany */

/* eslint-enable */
