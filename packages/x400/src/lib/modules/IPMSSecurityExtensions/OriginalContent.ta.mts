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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OriginalContent */
/**
 * @summary OriginalContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContent  ::=  Content
 * ```
 */
export type OriginalContent = Content; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginalContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalContent */
let _cached_decoder_for_OriginalContent: $.ASN1Decoder<OriginalContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalContent */

/* START_OF_SYMBOL_DEFINITION _decode_OriginalContent */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContent} The decoded data structure.
 */
export function _decode_OriginalContent(el: _Element) {
    if (!_cached_decoder_for_OriginalContent) {
        _cached_decoder_for_OriginalContent = _decode_Content;
    }
    return _cached_decoder_for_OriginalContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginalContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalContent */
let _cached_encoder_for_OriginalContent: $.ASN1Encoder<OriginalContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalContent */

/* START_OF_SYMBOL_DEFINITION _encode_OriginalContent */
/**
 * @summary Encodes a(n) OriginalContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContent, encoded as an ASN.1 Element.
 */
export function _encode_OriginalContent(
    value: OriginalContent,
    elGetter: $.ASN1Encoder<OriginalContent>
) {
    if (!_cached_encoder_for_OriginalContent) {
        _cached_encoder_for_OriginalContent = _encode_Content;
    }
    return _cached_encoder_for_OriginalContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginalContent */

/* eslint-enable */
