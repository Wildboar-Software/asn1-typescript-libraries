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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

export enum _enum_for_MessageClass_objects {
    messages = 0,
    reports = 1,
    both = 2,
}

/**
 * @summary MessageClass_objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageClass-objects ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type MessageClass_objects = _enum_for_MessageClass_objects | ENUMERATED;

/**
 * @summary MessageClass_objects_messages
 * @constant
 * @type {number}
 */
export const MessageClass_objects_messages: MessageClass_objects = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messages
 * @constant
 * @type {number}
 */
export const messages: MessageClass_objects = MessageClass_objects_messages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_objects_reports
 * @constant
 * @type {number}
 */
export const MessageClass_objects_reports: MessageClass_objects = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reports
 * @constant
 * @type {number}
 */
export const reports: MessageClass_objects = MessageClass_objects_reports; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MessageClass_objects_both
 * @constant
 * @type {number}
 */
export const MessageClass_objects_both: MessageClass_objects = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: MessageClass_objects = MessageClass_objects_both; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MessageClass_objects = $._decodeEnumerated;


export const _encode_MessageClass_objects = $._encodeEnumerated;


/* eslint-enable */
