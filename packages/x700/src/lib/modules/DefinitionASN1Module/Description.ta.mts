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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/**
 * @summary Description
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Description  ::=  TextualRepresentation
 * ```
 */
export type Description = TextualRepresentation; // DefinedType


let _cached_decoder_for_Description: $.ASN1Decoder<Description> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Description
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Description} The decoded data structure.
 */
export function _decode_Description(el: _Element): Description {
    if (!_cached_decoder_for_Description) {
        _cached_decoder_for_Description = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_Description(el);
}


let _cached_encoder_for_Description: $.ASN1Encoder<Description> | null = null;


/**
 * @summary Encodes a(n) Description into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Description, encoded as an ASN.1 Element.
 */
export function _encode_Description(
    value: Description,
    elGetter: $.ASN1Encoder<Description>
): _Element {
    if (!_cached_encoder_for_Description) {
        _cached_encoder_for_Description = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_Description(value, elGetter);
}


/* eslint-enable */
