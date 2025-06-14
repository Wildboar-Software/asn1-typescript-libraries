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

/* START_OF_SYMBOL_DEFINITION _enum_for_AcknowledgmentModeField */
/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```@enum {number}
 */
export enum _enum_for_AcknowledgmentModeField {
    manual = 0,
    automatic = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION AcknowledgmentModeField */
/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```@enum {number}
 */
export type AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;
/* END_OF_SYMBOL_DEFINITION AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION AcknowledgmentModeField */
/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```@enum {number}
 */
export const AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;
/* END_OF_SYMBOL_DEFINITION AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION AcknowledgmentModeField_manual */
/**
 * @summary AcknowledgmentModeField_manual
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AcknowledgmentModeField_manual */

/* START_OF_SYMBOL_DEFINITION manual */
/**
 * @summary manual
 * @constant
 * @type {number}
 */
export const manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION manual */

/* START_OF_SYMBOL_DEFINITION AcknowledgmentModeField_automatic */
/**
 * @summary AcknowledgmentModeField_automatic
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AcknowledgmentModeField_automatic */

/* START_OF_SYMBOL_DEFINITION automatic */
/**
 * @summary automatic
 * @constant
 * @type {number}
 */
export const automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION automatic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AcknowledgmentModeField */
let _cached_decoder_for_AcknowledgmentModeField: $.ASN1Decoder<AcknowledgmentModeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _decode_AcknowledgmentModeField */
/**
 * @summary Decodes an ASN.1 element into a(n) AcknowledgmentModeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcknowledgmentModeField} The decoded data structure.
 */
export function _decode_AcknowledgmentModeField(el: _Element) {
    if (!_cached_decoder_for_AcknowledgmentModeField) {
        _cached_decoder_for_AcknowledgmentModeField = $._decodeEnumerated;
    }
    return _cached_decoder_for_AcknowledgmentModeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgmentModeField */
let _cached_encoder_for_AcknowledgmentModeField: $.ASN1Encoder<AcknowledgmentModeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _encode_AcknowledgmentModeField */
/**
 * @summary Encodes a(n) AcknowledgmentModeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcknowledgmentModeField, encoded as an ASN.1 Element.
 */
export function _encode_AcknowledgmentModeField(
    value: AcknowledgmentModeField,
    elGetter: $.ASN1Encoder<AcknowledgmentModeField>
) {
    if (!_cached_encoder_for_AcknowledgmentModeField) {
        _cached_encoder_for_AcknowledgmentModeField = $._encodeEnumerated;
    }
    return _cached_encoder_for_AcknowledgmentModeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AcknowledgmentModeField */

/* eslint-enable */
