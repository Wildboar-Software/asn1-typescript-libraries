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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _decode_AcknowledgmentModeField */
export const _decode_AcknowledgmentModeField = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgmentModeField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgmentModeField */

/* START_OF_SYMBOL_DEFINITION _encode_AcknowledgmentModeField */
export const _encode_AcknowledgmentModeField = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AcknowledgmentModeField */

/* eslint-enable */
