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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DefinedAs */
/**
 * @summary DefinedAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefinedAs  ::=  TextualRepresentation
 * ```
 */
export type DefinedAs = TextualRepresentation; // DefinedType
/* END_OF_SYMBOL_DEFINITION DefinedAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DefinedAs */
let _cached_decoder_for_DefinedAs: $.ASN1Decoder<DefinedAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DefinedAs */

/* START_OF_SYMBOL_DEFINITION _decode_DefinedAs */
/**
 * @summary Decodes an ASN.1 element into a(n) DefinedAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefinedAs} The decoded data structure.
 */
export function _decode_DefinedAs(el: _Element) {
    if (!_cached_decoder_for_DefinedAs) {
        _cached_decoder_for_DefinedAs = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_DefinedAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DefinedAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DefinedAs */
let _cached_encoder_for_DefinedAs: $.ASN1Encoder<DefinedAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DefinedAs */

/* START_OF_SYMBOL_DEFINITION _encode_DefinedAs */
/**
 * @summary Encodes a(n) DefinedAs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefinedAs, encoded as an ASN.1 Element.
 */
export function _encode_DefinedAs(
    value: DefinedAs,
    elGetter: $.ASN1Encoder<DefinedAs>
) {
    if (!_cached_encoder_for_DefinedAs) {
        _cached_encoder_for_DefinedAs = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_DefinedAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DefinedAs */

/* eslint-enable */
