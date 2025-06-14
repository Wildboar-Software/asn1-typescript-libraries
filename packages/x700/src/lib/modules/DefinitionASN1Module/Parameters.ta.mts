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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Parameters */
/**
 * @summary Parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Parameters  ::=  TemplateList
 * ```
 */
export type Parameters = TemplateList; // DefinedType
/* END_OF_SYMBOL_DEFINITION Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameters */
let _cached_decoder_for_Parameters: $.ASN1Decoder<Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameters */

/* START_OF_SYMBOL_DEFINITION _decode_Parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) Parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Parameters} The decoded data structure.
 */
export function _decode_Parameters(el: _Element) {
    if (!_cached_decoder_for_Parameters) {
        _cached_decoder_for_Parameters = _decode_TemplateList;
    }
    return _cached_decoder_for_Parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameters */
let _cached_encoder_for_Parameters: $.ASN1Encoder<Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameters */

/* START_OF_SYMBOL_DEFINITION _encode_Parameters */
/**
 * @summary Encodes a(n) Parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameters, encoded as an ASN.1 Element.
 */
export function _encode_Parameters(
    value: Parameters,
    elGetter: $.ASN1Encoder<Parameters>
) {
    if (!_cached_encoder_for_Parameters) {
        _cached_encoder_for_Parameters = _encode_TemplateList;
    }
    return _cached_encoder_for_Parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Parameters */

/* eslint-enable */
