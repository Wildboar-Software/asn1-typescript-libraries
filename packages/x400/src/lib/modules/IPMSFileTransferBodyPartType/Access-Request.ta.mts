/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Access_Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Request  ::=  BIT STRING {
 *   read(0), insert(1), replace(2), extend(3), erase(4), read-attribute(5),
 *   change-attribute(6), delete-object(7)}
 * ```
 */
export type Access_Request = BIT_STRING;

/**
 * @summary Access_Request_read
 * @constant
 */
export const Access_Request_read: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export const read: number = Access_Request_read; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_insert
 * @constant
 */
export const Access_Request_insert: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary insert
 * @constant
 */
export const insert: number = Access_Request_insert; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_replace
 * @constant
 */
export const Access_Request_replace: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary replace
 * @constant
 */
export const replace: number = Access_Request_replace; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_extend
 * @constant
 */
export const Access_Request_extend: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary extend
 * @constant
 */
export const extend: number = Access_Request_extend; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_erase
 * @constant
 */
export const Access_Request_erase: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary erase
 * @constant
 */
export const erase: number = Access_Request_erase; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_read_attribute
 * @constant
 */
export const Access_Request_read_attribute: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary read_attribute
 * @constant
 */
export const read_attribute: number = Access_Request_read_attribute; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_change_attribute
 * @constant
 */
export const Access_Request_change_attribute: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary change_attribute
 * @constant
 */
export const change_attribute: number = Access_Request_change_attribute; /* SHORT_NAMED_BIT */

/**
 * @summary Access_Request_delete_object
 * @constant
 */
export const Access_Request_delete_object: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary delete_object
 * @constant
 */
export const delete_object: number = Access_Request_delete_object; /* SHORT_NAMED_BIT */


export const _decode_Access_Request = $._decodeBitString;


export const _encode_Access_Request = $._encodeBitString;


/* eslint-enable */
