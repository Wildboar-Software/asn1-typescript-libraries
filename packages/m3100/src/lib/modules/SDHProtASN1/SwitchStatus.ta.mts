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

/* START_OF_SYMBOL_DEFINITION _enum_for_SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export enum _enum_for_SwitchStatus {
    pending = 0,
    completed = 1,
    operateFailed = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export type SwitchStatus = _enum_for_SwitchStatus;
/* END_OF_SYMBOL_DEFINITION SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export const SwitchStatus = _enum_for_SwitchStatus;
/* END_OF_SYMBOL_DEFINITION SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_pending */
/**
 * @summary SwitchStatus_pending
 * @constant
 * @type {number}
 */
export const SwitchStatus_pending: SwitchStatus =
    SwitchStatus.pending; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_pending */

/* START_OF_SYMBOL_DEFINITION pending */
/**
 * @summary pending
 * @constant
 * @type {number}
 */
export const pending: SwitchStatus =
    SwitchStatus.pending; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pending */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_completed */
/**
 * @summary SwitchStatus_completed
 * @constant
 * @type {number}
 */
export const SwitchStatus_completed: SwitchStatus =
    SwitchStatus.completed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_completed */

/* START_OF_SYMBOL_DEFINITION completed */
/**
 * @summary completed
 * @constant
 * @type {number}
 */
export const completed: SwitchStatus =
    SwitchStatus.completed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION completed */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_operateFailed */
/**
 * @summary SwitchStatus_operateFailed
 * @constant
 * @type {number}
 */
export const SwitchStatus_operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_operateFailed */

/* START_OF_SYMBOL_DEFINITION operateFailed */
/**
 * @summary operateFailed
 * @constant
 * @type {number}
 */
export const operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION operateFailed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SwitchStatus */
export const _decode_SwitchStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SwitchStatus */
export const _encode_SwitchStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SwitchStatus */

/* eslint-enable */
