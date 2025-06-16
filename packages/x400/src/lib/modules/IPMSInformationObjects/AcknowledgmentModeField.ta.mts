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

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_AcknowledgmentModeField {
    manual = 0,
    automatic = 1,
}

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 * 
 * @enum {number}
 */
export type AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;

/**
 * @summary AcknowledgmentModeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgmentModeField  ::=  ENUMERATED {manual(0), automatic(1)}
 * ```
 * 
 * @enum {number}
 */
export const AcknowledgmentModeField = _enum_for_AcknowledgmentModeField;

/**
 * @summary AcknowledgmentModeField_manual
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manual
 * @constant
 * @type {number}
 */
export const manual: AcknowledgmentModeField =
    AcknowledgmentModeField.manual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AcknowledgmentModeField_automatic
 * @constant
 * @type {number}
 */
export const AcknowledgmentModeField_automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automatic
 * @constant
 * @type {number}
 */
export const automatic: AcknowledgmentModeField =
    AcknowledgmentModeField.automatic; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AcknowledgmentModeField = $._decodeEnumerated;


export const _encode_AcknowledgmentModeField = $._encodeEnumerated;


/* eslint-enable */
