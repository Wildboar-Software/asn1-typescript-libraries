/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField */
/**
 * @summary NNPDAUBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNPDAUBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   undeliverable-mail(1),
 *   -- used if the PDAU determines that it cannot perform physical delivery of the
 *   -- EDIM
 *   physical-rendition-not-performed(2)
 *
 * -- used if the PDAU cannot perform the physical rendition of the EDIM --}
 * (0..ub-reason-code)
 * ```
 */
export type NNPDAUBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_unspecified */
/**
 * @summary NNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_unspecified: NNPDAUBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary NNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: NNPDAUBasicCodeField = NNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_undeliverable_mail */
/**
 * @summary NNPDAUBasicCodeField_undeliverable_mail
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_undeliverable_mail: NNPDAUBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_undeliverable_mail */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail */
/**
 * @summary NNPDAUBasicCodeField_undeliverable_mail
 * @constant
 * @type {number}
 */
export const undeliverable_mail: NNPDAUBasicCodeField = NNPDAUBasicCodeField_undeliverable_mail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_physical_rendition_not_performed */
/**
 * @summary NNPDAUBasicCodeField_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_physical_rendition_not_performed: NNPDAUBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION physical_rendition_not_performed */
/**
 * @summary NNPDAUBasicCodeField_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const physical_rendition_not_performed: NNPDAUBasicCodeField = NNPDAUBasicCodeField_physical_rendition_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUBasicCodeField */
let _cached_decoder_for_NNPDAUBasicCodeField: $.ASN1Decoder<NNPDAUBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNPDAUBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNPDAUBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNPDAUBasicCodeField} The decoded data structure.
 */
export function _decode_NNPDAUBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_NNPDAUBasicCodeField) {
        _cached_decoder_for_NNPDAUBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_NNPDAUBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUBasicCodeField */
let _cached_encoder_for_NNPDAUBasicCodeField: $.ASN1Encoder<NNPDAUBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNPDAUBasicCodeField */
/**
 * @summary Encodes a(n) NNPDAUBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNPDAUBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNPDAUBasicCodeField(
    value: NNPDAUBasicCodeField,
    elGetter: $.ASN1Encoder<NNPDAUBasicCodeField>
) {
    if (!_cached_encoder_for_NNPDAUBasicCodeField) {
        _cached_encoder_for_NNPDAUBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_NNPDAUBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNPDAUBasicCodeField */

/* eslint-enable */
