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
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
/* START_OF_SYMBOL_DEFINITION defaultTimePeriod */
/**
 * @summary defaultTimePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultTimePeriod TimePeriod ::= seconds:0
 * ```
 *
 * @constant
 */
export const defaultTimePeriod: TimePeriod = { seconds: 0 };
/* END_OF_SYMBOL_DEFINITION defaultTimePeriod */

/* eslint-enable */
