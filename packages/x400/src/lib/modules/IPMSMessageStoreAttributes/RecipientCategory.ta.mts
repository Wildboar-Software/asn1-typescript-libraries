/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * The Recipient Category attribute indicates the category of recipient (primary, copy,
 * blind copy, or circulation list), if known, in which this IPMS-MS-user was placed by the
 * originator of a delivered IPM. If this recipient is represented in more than one
 * category, the attribute assumes the lowest applicable value. See ITU-T X.420 (1999),
 * §19.6.5.3.4.
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
export const RecipientCategory_primary_recipient = 0 satisfies RecipientCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_primary_recipient
 * @constant
 * @type {number}
 */
export const primary_recipient = RecipientCategory_primary_recipient satisfies RecipientCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_copy_recipient = 1 satisfies RecipientCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const copy_recipient = RecipientCategory_copy_recipient satisfies RecipientCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_blind_copy_recipient = 2 satisfies RecipientCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const blind_copy_recipient = RecipientCategory_blind_copy_recipient satisfies RecipientCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const RecipientCategory_category_unknown = 3 satisfies RecipientCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const category_unknown = RecipientCategory_category_unknown satisfies RecipientCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const RecipientCategory_circulation_list = 4 satisfies RecipientCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const circulation_list = RecipientCategory_circulation_list satisfies RecipientCategory; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RecipientCategory = $._decodeInteger;


export const _encode_RecipientCategory = $._encodeInteger;


/* eslint-enable */
