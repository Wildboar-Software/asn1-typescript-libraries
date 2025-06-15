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

/* START_OF_SYMBOL_DEFINITION _enum_for_SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SystemTiming_sourceType {
    internalTimingSource = 0,
    remoteTimingSource = 1,
    slavedTimingTerminationSignal = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_internalTimingSource */
/**
 * @summary SystemTiming_sourceType_internalTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_internalTimingSource */

/* START_OF_SYMBOL_DEFINITION internalTimingSource */
/**
 * @summary internalTimingSource
 * @constant
 * @type {number}
 */
export const internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internalTimingSource */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_remoteTimingSource */
/**
 * @summary SystemTiming_sourceType_remoteTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_remoteTimingSource */

/* START_OF_SYMBOL_DEFINITION remoteTimingSource */
/**
 * @summary remoteTimingSource
 * @constant
 * @type {number}
 */
export const remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION remoteTimingSource */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_slavedTimingTerminationSignal */
/**
 * @summary SystemTiming_sourceType_slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_slavedTimingTerminationSignal */

/* START_OF_SYMBOL_DEFINITION slavedTimingTerminationSignal */
/**
 * @summary slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION slavedTimingTerminationSignal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming_sourceType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTiming_sourceType */
export const _decode_SystemTiming_sourceType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming_sourceType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTiming_sourceType */
export const _encode_SystemTiming_sourceType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SystemTiming_sourceType */

/* eslint-enable */
