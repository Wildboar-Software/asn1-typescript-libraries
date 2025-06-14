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
    Context_list,
    _decode_Context_list,
    _encode_Context_list,
} from '../ISO8823-PRESENTATION/Context-list.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Presentation_context_definition_list */
/**
 * @summary Presentation_context_definition_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-definition-list  ::=  Context-list
 * ```
 */
export type Presentation_context_definition_list = Context_list; // DefinedType
/* END_OF_SYMBOL_DEFINITION Presentation_context_definition_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_definition_list */
let _cached_decoder_for_Presentation_context_definition_list: $.ASN1Decoder<Presentation_context_definition_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_definition_list */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_definition_list */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_definition_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_definition_list} The decoded data structure.
 */
export function _decode_Presentation_context_definition_list(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_definition_list) {
        _cached_decoder_for_Presentation_context_definition_list = _decode_Context_list;
    }
    return _cached_decoder_for_Presentation_context_definition_list(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_definition_list */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_definition_list */
let _cached_encoder_for_Presentation_context_definition_list: $.ASN1Encoder<Presentation_context_definition_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_definition_list */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_definition_list */
/**
 * @summary Encodes a(n) Presentation_context_definition_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_definition_list, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_definition_list(
    value: Presentation_context_definition_list,
    elGetter: $.ASN1Encoder<Presentation_context_definition_list>
) {
    if (!_cached_encoder_for_Presentation_context_definition_list) {
        _cached_encoder_for_Presentation_context_definition_list = _encode_Context_list;
    }
    return _cached_encoder_for_Presentation_context_definition_list(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_definition_list */

/* eslint-enable */
