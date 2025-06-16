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
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SystemTiming_sourceType {
    internalTimingSource = 0,
    remoteTimingSource = 1,
    slavedTimingTerminationSignal = 2,
}


/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;


/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;


/**
 * @summary SystemTiming_sourceType_internalTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary internalTimingSource
 * @constant
 * @type {number}
 */
export const internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SystemTiming_sourceType_remoteTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary remoteTimingSource
 * @constant
 * @type {number}
 */
export const remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SystemTiming_sourceType_slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SystemTiming_sourceType = $._decodeEnumerated;




export const _encode_SystemTiming_sourceType = $._encodeEnumerated;


/* eslint-enable */
