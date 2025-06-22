/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

export enum _enum_for_NonReceiptReasonField {
    ipm_discarded = 0,
    ipm_auto_forwarded = 1,
}

/**
 * @summary NonReceiptReasonField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonReceiptReasonField  ::=  ENUMERATED {
 *   ipm-discarded(0), ipm-auto-forwarded(1), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type NonReceiptReasonField =
    | _enum_for_NonReceiptReasonField
    | ENUMERATED;

/**
 * @summary NonReceiptReasonField_ipm_discarded
 * @constant
 * @type {number}
 */
export const NonReceiptReasonField_ipm_discarded: NonReceiptReasonField = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: NonReceiptReasonField = NonReceiptReasonField_ipm_discarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NonReceiptReasonField_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const NonReceiptReasonField_ipm_auto_forwarded: NonReceiptReasonField = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: NonReceiptReasonField = NonReceiptReasonField_ipm_auto_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_NonReceiptReasonField = $._decodeEnumerated;


export const _encode_NonReceiptReasonField = $._encodeEnumerated;


/* eslint-enable */
