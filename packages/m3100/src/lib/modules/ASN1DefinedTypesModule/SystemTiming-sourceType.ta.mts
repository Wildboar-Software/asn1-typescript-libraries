/* eslint-disable */
import {
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




export function _decode_SystemTiming_sourceType(el: _Element): SystemTiming_sourceType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case SystemTiming_sourceType.internalTimingSource: return SystemTiming_sourceType.internalTimingSource;
        case SystemTiming_sourceType.remoteTimingSource: return SystemTiming_sourceType.remoteTimingSource;
        case SystemTiming_sourceType.slavedTimingTerminationSignal: return SystemTiming_sourceType.slavedTimingTerminationSignal;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for SystemTiming_sourceType.',
                el,
            );
    }
}




export const _encode_SystemTiming_sourceType: $.ASN1Encoder<SystemTiming_sourceType> = $._encodeEnumerated as $.ASN1Encoder<SystemTiming_sourceType>;


/* eslint-enable */
