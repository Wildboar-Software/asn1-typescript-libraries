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
import {
    ActivityDuration,
    _decode_ActivityDuration,
    _encode_ActivityDuration,
} from '../X790ASN1Module/ActivityDuration.ta.mjs';
import {
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
import {
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION activityDurationactivityDurationInitial */
/**
 * @summary activityDurationactivityDurationInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * activityDurationactivityDurationInitial ActivityDuration ::= {}
 * ```
 *
 * @constant
 */
export const activityDurationactivityDurationInitial: ActivityDuration = [];
/* END_OF_SYMBOL_DEFINITION activityDurationactivityDurationInitial */

/* eslint-enable */
