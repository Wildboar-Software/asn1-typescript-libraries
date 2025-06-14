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
/* START_OF_SYMBOL_DEFINITION QualifiedBy */
/**
 * @summary QualifiedBy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualifiedBy  ::=  TemplateList
 * ```
 */
export type QualifiedBy = TemplateList; // DefinedType
/* END_OF_SYMBOL_DEFINITION QualifiedBy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedBy */
let _cached_decoder_for_QualifiedBy: $.ASN1Decoder<QualifiedBy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedBy */

/* START_OF_SYMBOL_DEFINITION _decode_QualifiedBy */
/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedBy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualifiedBy} The decoded data structure.
 */
export function _decode_QualifiedBy(el: _Element) {
    if (!_cached_decoder_for_QualifiedBy) {
        _cached_decoder_for_QualifiedBy = _decode_TemplateList;
    }
    return _cached_decoder_for_QualifiedBy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QualifiedBy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedBy */
let _cached_encoder_for_QualifiedBy: $.ASN1Encoder<QualifiedBy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedBy */

/* START_OF_SYMBOL_DEFINITION _encode_QualifiedBy */
/**
 * @summary Encodes a(n) QualifiedBy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedBy, encoded as an ASN.1 Element.
 */
export function _encode_QualifiedBy(
    value: QualifiedBy,
    elGetter: $.ASN1Encoder<QualifiedBy>
) {
    if (!_cached_encoder_for_QualifiedBy) {
        _cached_encoder_for_QualifiedBy = _encode_TemplateList;
    }
    return _cached_encoder_for_QualifiedBy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QualifiedBy */

/* eslint-enable */
