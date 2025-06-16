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
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_DLPolicy_return_of_content {
    unchanged = 0,
    content_return_not_requested = 1,
    content_return_requested = 2,
}

/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;

/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export const DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;

/**
 * @summary DLPolicy_return_of_content_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_unchanged: DLPolicy_return_of_content =
    DLPolicy_return_of_content.unchanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_return_of_content =
    DLPolicy_return_of_content.unchanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_return_of_content_content_return_not_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_not_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_return_not_requested
 * @constant
 * @type {number}
 */
export const content_return_not_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_return_of_content_content_return_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_return_requested
 * @constant
 * @type {number}
 */
export const content_return_requested: DLPolicy_return_of_content =
    DLPolicy_return_of_content.content_return_requested; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DLPolicy_return_of_content = $._decodeEnumerated;


export const _encode_DLPolicy_return_of_content = $._encodeEnumerated;


/* eslint-enable */
