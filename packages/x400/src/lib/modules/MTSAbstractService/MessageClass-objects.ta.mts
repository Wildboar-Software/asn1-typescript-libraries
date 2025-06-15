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

/* START_OF_SYMBOL_DEFINITION _enum_for_MessageClass_objects */
export enum _enum_for_MessageClass_objects {
    messages = 0,
    reports = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects */
/**
 * @summary MessageClass_objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageClass-objects ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type MessageClass_objects = _enum_for_MessageClass_objects | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_messages */
/**
 * @summary MessageClass_objects_messages
 * @constant
 * @type {number}
 */
export const MessageClass_objects_messages: MessageClass_objects = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_messages */

/* START_OF_SYMBOL_DEFINITION messages */
/**
 * @summary messages
 * @constant
 * @type {number}
 */
export const messages: MessageClass_objects = MessageClass_objects_messages; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION messages */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_reports */
/**
 * @summary MessageClass_objects_reports
 * @constant
 * @type {number}
 */
export const MessageClass_objects_reports: MessageClass_objects = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_reports */

/* START_OF_SYMBOL_DEFINITION reports */
/**
 * @summary reports
 * @constant
 * @type {number}
 */
export const reports: MessageClass_objects = MessageClass_objects_reports; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reports */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_both */
/**
 * @summary MessageClass_objects_both
 * @constant
 * @type {number}
 */
export const MessageClass_objects_both: MessageClass_objects = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: MessageClass_objects = MessageClass_objects_both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageClass_objects */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _decode_MessageClass_objects */
export const _decode_MessageClass_objects = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageClass_objects */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _encode_MessageClass_objects */
export const _encode_MessageClass_objects = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_MessageClass_objects */

/* eslint-enable */
