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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RecipientCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientCategory  ::=  INTEGER {
 *   primary-recipient(0), copy-recipient(1), blind-copy-recipient(2),
 *   category-unknown(3), circulation-list(4)}
 * ```
 */
export type RecipientCategory = INTEGER;

/**
 * @summary RecipientCategory_primary_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_primary_recipient: RecipientCategory = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_primary_recipient
 * @constant
 * @type {number}
 */
export const primary_recipient: RecipientCategory = RecipientCategory_primary_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_copy_recipient: RecipientCategory = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const copy_recipient: RecipientCategory = RecipientCategory_copy_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_blind_copy_recipient: RecipientCategory = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const blind_copy_recipient: RecipientCategory = RecipientCategory_blind_copy_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const RecipientCategory_category_unknown: RecipientCategory = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const category_unknown: RecipientCategory = RecipientCategory_category_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const RecipientCategory_circulation_list: RecipientCategory = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const circulation_list: RecipientCategory = RecipientCategory_circulation_list; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RecipientCategory = $._decodeInteger;


export const _encode_RecipientCategory = $._encodeInteger;


/* eslint-enable */
