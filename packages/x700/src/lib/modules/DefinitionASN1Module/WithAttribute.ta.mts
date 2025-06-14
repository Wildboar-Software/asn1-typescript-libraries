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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
/* START_OF_SYMBOL_DEFINITION WithAttribute */
/**
 * @summary WithAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WithAttribute  ::=  TemplateLabel
 * ```
 */
export type WithAttribute = TemplateLabel; // DefinedType
/* END_OF_SYMBOL_DEFINITION WithAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WithAttribute */
let _cached_decoder_for_WithAttribute: $.ASN1Decoder<WithAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WithAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_WithAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) WithAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WithAttribute} The decoded data structure.
 */
export function _decode_WithAttribute(el: _Element) {
    if (!_cached_decoder_for_WithAttribute) {
        _cached_decoder_for_WithAttribute = _decode_TemplateLabel;
    }
    return _cached_decoder_for_WithAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WithAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WithAttribute */
let _cached_encoder_for_WithAttribute: $.ASN1Encoder<WithAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WithAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_WithAttribute */
/**
 * @summary Encodes a(n) WithAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WithAttribute, encoded as an ASN.1 Element.
 */
export function _encode_WithAttribute(
    value: WithAttribute,
    elGetter: $.ASN1Encoder<WithAttribute>
) {
    if (!_cached_encoder_for_WithAttribute) {
        _cached_encoder_for_WithAttribute = _encode_TemplateLabel;
    }
    return _cached_encoder_for_WithAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WithAttribute */

/* eslint-enable */
