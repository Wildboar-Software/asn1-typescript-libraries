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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EDINOriginatorField */
/**
 * @summary EDINOriginatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINOriginatorField  ::=  ORName
 * ```
 */
export type EDINOriginatorField = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION EDINOriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINOriginatorField */
let _cached_decoder_for_EDINOriginatorField: $.ASN1Decoder<EDINOriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINOriginatorField */

/* START_OF_SYMBOL_DEFINITION _decode_EDINOriginatorField */
/**
 * @summary Decodes an ASN.1 element into a(n) EDINOriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINOriginatorField} The decoded data structure.
 */
export function _decode_EDINOriginatorField(el: _Element) {
    if (!_cached_decoder_for_EDINOriginatorField) {
        _cached_decoder_for_EDINOriginatorField = _decode_ORName;
    }
    return _cached_decoder_for_EDINOriginatorField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINOriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINOriginatorField */
let _cached_encoder_for_EDINOriginatorField: $.ASN1Encoder<EDINOriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINOriginatorField */

/* START_OF_SYMBOL_DEFINITION _encode_EDINOriginatorField */
/**
 * @summary Encodes a(n) EDINOriginatorField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINOriginatorField, encoded as an ASN.1 Element.
 */
export function _encode_EDINOriginatorField(
    value: EDINOriginatorField,
    elGetter: $.ASN1Encoder<EDINOriginatorField>
) {
    if (!_cached_encoder_for_EDINOriginatorField) {
        _cached_encoder_for_EDINOriginatorField = _encode_ORName;
    }
    return _cached_encoder_for_EDINOriginatorField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDINOriginatorField */

/* eslint-enable */
