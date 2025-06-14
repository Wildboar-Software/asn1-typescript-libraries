/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION ApplicationReferenceField */
/**
 * @summary ApplicationReferenceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationReferenceField  ::=  TeletexString(SIZE (1..ub-application-reference))
 * ```
 */
export type ApplicationReferenceField = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationReferenceField */
let _cached_decoder_for_ApplicationReferenceField: $.ASN1Decoder<ApplicationReferenceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationReferenceField */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationReferenceField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationReferenceField} The decoded data structure.
 */
export function _decode_ApplicationReferenceField(el: _Element) {
    if (!_cached_decoder_for_ApplicationReferenceField) {
        _cached_decoder_for_ApplicationReferenceField = $._decodeTeletexString;
    }
    return _cached_decoder_for_ApplicationReferenceField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationReferenceField */
let _cached_encoder_for_ApplicationReferenceField: $.ASN1Encoder<ApplicationReferenceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationReferenceField */
/**
 * @summary Encodes a(n) ApplicationReferenceField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationReferenceField, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationReferenceField(
    value: ApplicationReferenceField,
    elGetter: $.ASN1Encoder<ApplicationReferenceField>
) {
    if (!_cached_encoder_for_ApplicationReferenceField) {
        _cached_encoder_for_ApplicationReferenceField = $._encodeTeletexString;
    }
    return _cached_encoder_for_ApplicationReferenceField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationReferenceField */

/* eslint-enable */
