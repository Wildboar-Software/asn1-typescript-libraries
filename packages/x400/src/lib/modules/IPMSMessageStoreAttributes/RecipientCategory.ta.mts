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

/* START_OF_SYMBOL_DEFINITION RecipientCategory */
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
/* END_OF_SYMBOL_DEFINITION RecipientCategory */

/* START_OF_SYMBOL_DEFINITION RecipientCategory_primary_recipient */
/**
 * @summary RecipientCategory_primary_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_primary_recipient: RecipientCategory = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientCategory_primary_recipient */

/* START_OF_SYMBOL_DEFINITION primary_recipient */
/**
 * @summary RecipientCategory_primary_recipient
 * @constant
 * @type {number}
 */
export const primary_recipient: RecipientCategory = RecipientCategory_primary_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION primary_recipient */

/* START_OF_SYMBOL_DEFINITION RecipientCategory_copy_recipient */
/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_copy_recipient: RecipientCategory = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientCategory_copy_recipient */

/* START_OF_SYMBOL_DEFINITION copy_recipient */
/**
 * @summary RecipientCategory_copy_recipient
 * @constant
 * @type {number}
 */
export const copy_recipient: RecipientCategory = RecipientCategory_copy_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION copy_recipient */

/* START_OF_SYMBOL_DEFINITION RecipientCategory_blind_copy_recipient */
/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const RecipientCategory_blind_copy_recipient: RecipientCategory = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientCategory_blind_copy_recipient */

/* START_OF_SYMBOL_DEFINITION blind_copy_recipient */
/**
 * @summary RecipientCategory_blind_copy_recipient
 * @constant
 * @type {number}
 */
export const blind_copy_recipient: RecipientCategory = RecipientCategory_blind_copy_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION blind_copy_recipient */

/* START_OF_SYMBOL_DEFINITION RecipientCategory_category_unknown */
/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const RecipientCategory_category_unknown: RecipientCategory = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientCategory_category_unknown */

/* START_OF_SYMBOL_DEFINITION category_unknown */
/**
 * @summary RecipientCategory_category_unknown
 * @constant
 * @type {number}
 */
export const category_unknown: RecipientCategory = RecipientCategory_category_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION category_unknown */

/* START_OF_SYMBOL_DEFINITION RecipientCategory_circulation_list */
/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const RecipientCategory_circulation_list: RecipientCategory = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RecipientCategory_circulation_list */

/* START_OF_SYMBOL_DEFINITION circulation_list */
/**
 * @summary RecipientCategory_circulation_list
 * @constant
 * @type {number}
 */
export const circulation_list: RecipientCategory = RecipientCategory_circulation_list; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION circulation_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientCategory */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientCategory */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientCategory */
export const _decode_RecipientCategory = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RecipientCategory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientCategory */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientCategory */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientCategory */
export const _encode_RecipientCategory = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RecipientCategory */

/* eslint-enable */
