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
 * @summary ContactDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactDetails  ::=  GraphicStringBase
 * ```
 */
export type ContactDetails = GraphicStringBase; // DefinedType


let _cached_decoder_for_ContactDetails: $.ASN1Decoder<ContactDetails> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContactDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactDetails} The decoded data structure.
 */
export function _decode_ContactDetails(el: _Element) {
    if (!_cached_decoder_for_ContactDetails) {
        _cached_decoder_for_ContactDetails = _decode_GraphicStringBase;
    }
    return _cached_decoder_for_ContactDetails(el);
}


let _cached_encoder_for_ContactDetails: $.ASN1Encoder<ContactDetails> | null = null;


/**
 * @summary Encodes a(n) ContactDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactDetails, encoded as an ASN.1 Element.
 */
export function _encode_ContactDetails(
    value: ContactDetails,
    elGetter: $.ASN1Encoder<ContactDetails>
) {
    if (!_cached_encoder_for_ContactDetails) {
        _cached_encoder_for_ContactDetails = _encode_GraphicStringBase;
    }
    return _cached_encoder_for_ContactDetails(value, elGetter);
}


/* eslint-enable */
