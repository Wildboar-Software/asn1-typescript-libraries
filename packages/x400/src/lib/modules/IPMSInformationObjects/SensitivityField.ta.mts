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

/* START_OF_SYMBOL_DEFINITION _enum_for_SensitivityField */
/**
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```@enum {number}
 */
export enum _enum_for_SensitivityField {
    personal = 1,
    private_ = 2,
    company_confidential = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SensitivityField */

/* START_OF_SYMBOL_DEFINITION SensitivityField */
/**
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```@enum {number}
 */
export type SensitivityField = _enum_for_SensitivityField;
/* END_OF_SYMBOL_DEFINITION SensitivityField */

/* START_OF_SYMBOL_DEFINITION SensitivityField */
/**
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```@enum {number}
 */
export const SensitivityField = _enum_for_SensitivityField;
/* END_OF_SYMBOL_DEFINITION SensitivityField */

/* START_OF_SYMBOL_DEFINITION SensitivityField_personal */
/**
 * @summary SensitivityField_personal
 * @constant
 * @type {number}
 */
export const SensitivityField_personal: SensitivityField =
    SensitivityField.personal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SensitivityField_personal */

/* START_OF_SYMBOL_DEFINITION personal */
/**
 * @summary personal
 * @constant
 * @type {number}
 */
export const personal: SensitivityField =
    SensitivityField.personal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION personal */

/* START_OF_SYMBOL_DEFINITION SensitivityField_private_ */
/**
 * @summary SensitivityField_private_
 * @constant
 * @type {number}
 */
export const SensitivityField_private_: SensitivityField =
    SensitivityField.private_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SensitivityField_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 * @type {number}
 */
export const private_: SensitivityField =
    SensitivityField.private_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION SensitivityField_company_confidential */
/**
 * @summary SensitivityField_company_confidential
 * @constant
 * @type {number}
 */
export const SensitivityField_company_confidential: SensitivityField =
    SensitivityField.company_confidential; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SensitivityField_company_confidential */

/* START_OF_SYMBOL_DEFINITION company_confidential */
/**
 * @summary company_confidential
 * @constant
 * @type {number}
 */
export const company_confidential: SensitivityField =
    SensitivityField.company_confidential; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION company_confidential */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SensitivityField */
let _cached_decoder_for_SensitivityField: $.ASN1Decoder<SensitivityField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SensitivityField */

/* START_OF_SYMBOL_DEFINITION _decode_SensitivityField */
/**
 * @summary Decodes an ASN.1 element into a(n) SensitivityField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SensitivityField} The decoded data structure.
 */
export function _decode_SensitivityField(el: _Element) {
    if (!_cached_decoder_for_SensitivityField) {
        _cached_decoder_for_SensitivityField = $._decodeEnumerated;
    }
    return _cached_decoder_for_SensitivityField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SensitivityField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SensitivityField */
let _cached_encoder_for_SensitivityField: $.ASN1Encoder<SensitivityField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SensitivityField */

/* START_OF_SYMBOL_DEFINITION _encode_SensitivityField */
/**
 * @summary Encodes a(n) SensitivityField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SensitivityField, encoded as an ASN.1 Element.
 */
export function _encode_SensitivityField(
    value: SensitivityField,
    elGetter: $.ASN1Encoder<SensitivityField>
) {
    if (!_cached_encoder_for_SensitivityField) {
        _cached_encoder_for_SensitivityField = $._encodeEnumerated;
    }
    return _cached_encoder_for_SensitivityField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SensitivityField */

/* eslint-enable */
