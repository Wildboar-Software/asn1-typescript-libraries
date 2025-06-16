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
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_SensitivityField {
    personal = 1,
    private_ = 2,
    company_confidential = 3,
}

/**
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```
 * 
 * @enum {number}
 */
export type SensitivityField = _enum_for_SensitivityField;

/**
 * @summary SensitivityField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SensitivityField  ::=  ENUMERATED {
 *   personal(1), private(2), company-confidential(3)}
 * ```
 * 
 * @enum {number}
 */
export const SensitivityField = _enum_for_SensitivityField;

/**
 * @summary SensitivityField_personal
 * @constant
 * @type {number}
 */
export const SensitivityField_personal: SensitivityField =
    SensitivityField.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export const personal: SensitivityField =
    SensitivityField.personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SensitivityField_private_
 * @constant
 * @type {number}
 */
export const SensitivityField_private_: SensitivityField =
    SensitivityField.private_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @constant
 * @type {number}
 */
export const private_: SensitivityField =
    SensitivityField.private_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SensitivityField_company_confidential
 * @constant
 * @type {number}
 */
export const SensitivityField_company_confidential: SensitivityField =
    SensitivityField.company_confidential; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary company_confidential
 * @constant
 * @type {number}
 */
export const company_confidential: SensitivityField =
    SensitivityField.company_confidential; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SensitivityField = $._decodeEnumerated;


export const _encode_SensitivityField = $._encodeEnumerated;


/* eslint-enable */
