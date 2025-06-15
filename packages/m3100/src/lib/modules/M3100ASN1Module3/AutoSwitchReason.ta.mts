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

/* START_OF_SYMBOL_DEFINITION _enum_for_AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export enum _enum_for_AutoSwitchReason {
    waitToRestore = 0,
    resourceDegrade = 1,
    resourceFailed = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export type AutoSwitchReason = _enum_for_AutoSwitchReason;
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  ENUMERATED {
 *   waitToRestore(0), resourceDegrade(1), resourceFailed(2)}
 * ```@enum {number}
 */
export const AutoSwitchReason = _enum_for_AutoSwitchReason;
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_waitToRestore */
/**
 * @summary AutoSwitchReason_waitToRestore
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_waitToRestore: AutoSwitchReason =
    AutoSwitchReason.waitToRestore; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_waitToRestore */

/* START_OF_SYMBOL_DEFINITION waitToRestore */
/**
 * @summary waitToRestore
 * @constant
 * @type {number}
 */
export const waitToRestore: AutoSwitchReason =
    AutoSwitchReason.waitToRestore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waitToRestore */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceDegrade */
/**
 * @summary AutoSwitchReason_resourceDegrade
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceDegrade: AutoSwitchReason =
    AutoSwitchReason.resourceDegrade; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceDegrade */

/* START_OF_SYMBOL_DEFINITION resourceDegrade */
/**
 * @summary resourceDegrade
 * @constant
 * @type {number}
 */
export const resourceDegrade: AutoSwitchReason =
    AutoSwitchReason.resourceDegrade; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceDegrade */

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceFailed */
/**
 * @summary AutoSwitchReason_resourceFailed
 * @constant
 * @type {number}
 */
export const AutoSwitchReason_resourceFailed: AutoSwitchReason =
    AutoSwitchReason.resourceFailed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason_resourceFailed */

/* START_OF_SYMBOL_DEFINITION resourceFailed */
/**
 * @summary resourceFailed
 * @constant
 * @type {number}
 */
export const resourceFailed: AutoSwitchReason =
    AutoSwitchReason.resourceFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceFailed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */
export const _decode_AutoSwitchReason = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */
export const _encode_AutoSwitchReason = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */

/* eslint-enable */
