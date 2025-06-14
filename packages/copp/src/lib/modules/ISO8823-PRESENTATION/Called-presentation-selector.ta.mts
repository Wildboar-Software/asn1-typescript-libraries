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
    Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from '../ISO8823-PRESENTATION/Presentation-selector.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Called_presentation_selector */
/**
 * @summary Called_presentation_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Called-presentation-selector  ::=  Presentation-selector
 * ```
 */
export type Called_presentation_selector = Presentation_selector; // DefinedType
/* END_OF_SYMBOL_DEFINITION Called_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Called_presentation_selector */
let _cached_decoder_for_Called_presentation_selector: $.ASN1Decoder<Called_presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Called_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _decode_Called_presentation_selector */
/**
 * @summary Decodes an ASN.1 element into a(n) Called_presentation_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Called_presentation_selector} The decoded data structure.
 */
export function _decode_Called_presentation_selector(el: _Element) {
    if (!_cached_decoder_for_Called_presentation_selector) {
        _cached_decoder_for_Called_presentation_selector = _decode_Presentation_selector;
    }
    return _cached_decoder_for_Called_presentation_selector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Called_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Called_presentation_selector */
let _cached_encoder_for_Called_presentation_selector: $.ASN1Encoder<Called_presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Called_presentation_selector */

/* START_OF_SYMBOL_DEFINITION _encode_Called_presentation_selector */
/**
 * @summary Encodes a(n) Called_presentation_selector into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Called_presentation_selector, encoded as an ASN.1 Element.
 */
export function _encode_Called_presentation_selector(
    value: Called_presentation_selector,
    elGetter: $.ASN1Encoder<Called_presentation_selector>
) {
    if (!_cached_encoder_for_Called_presentation_selector) {
        _cached_encoder_for_Called_presentation_selector = _encode_Presentation_selector;
    }
    return _cached_encoder_for_Called_presentation_selector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Called_presentation_selector */

/* eslint-enable */
