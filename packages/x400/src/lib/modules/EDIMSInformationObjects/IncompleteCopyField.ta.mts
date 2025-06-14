/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION IncompleteCopyField */
/**
 * @summary IncompleteCopyField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteCopyField  ::=  BOOLEAN
 * ```
 */
export type IncompleteCopyField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION IncompleteCopyField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteCopyField */
let _cached_decoder_for_IncompleteCopyField: $.ASN1Decoder<IncompleteCopyField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteCopyField */

/* START_OF_SYMBOL_DEFINITION _decode_IncompleteCopyField */
/**
 * @summary Decodes an ASN.1 element into a(n) IncompleteCopyField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncompleteCopyField} The decoded data structure.
 */
export function _decode_IncompleteCopyField(el: _Element) {
    if (!_cached_decoder_for_IncompleteCopyField) {
        _cached_decoder_for_IncompleteCopyField = $._decodeBoolean;
    }
    return _cached_decoder_for_IncompleteCopyField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncompleteCopyField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteCopyField */
let _cached_encoder_for_IncompleteCopyField: $.ASN1Encoder<IncompleteCopyField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteCopyField */

/* START_OF_SYMBOL_DEFINITION _encode_IncompleteCopyField */
/**
 * @summary Encodes a(n) IncompleteCopyField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncompleteCopyField, encoded as an ASN.1 Element.
 */
export function _encode_IncompleteCopyField(
    value: IncompleteCopyField,
    elGetter: $.ASN1Encoder<IncompleteCopyField>
) {
    if (!_cached_encoder_for_IncompleteCopyField) {
        _cached_encoder_for_IncompleteCopyField = $._encodeBoolean;
    }
    return _cached_encoder_for_IncompleteCopyField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IncompleteCopyField */

/* eslint-enable */
