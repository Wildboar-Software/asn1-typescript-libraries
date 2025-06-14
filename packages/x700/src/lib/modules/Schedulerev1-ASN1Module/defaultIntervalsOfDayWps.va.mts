/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import {
    IntervalsOfDayWps,
    _decode_IntervalsOfDayWps,
    _encode_IntervalsOfDayWps,
} from '../Schedulerev1-ASN1Module/IntervalsOfDayWps.ta.mjs';
export {
    IntervalsOfDayWps,
    _decode_IntervalsOfDayWps,
    _encode_IntervalsOfDayWps,
} from '../Schedulerev1-ASN1Module/IntervalsOfDayWps.ta.mjs';
import {
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.mjs';
export {
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.mjs';
import { IntervalsOfDayWps_Item } from '../Schedulerev1-ASN1Module/IntervalsOfDayWps-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION defaultIntervalsOfDayWps */
/**
 * @summary defaultIntervalsOfDayWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultIntervalsOfDayWps IntervalsOfDayWps ::= {
 *   {intervalStart  {hour 0, minute 0, second 0},
 *    intervalEnd    {hour 0, minute 0, second 0}}
 * }
 * ```
 *
 * @constant
 */
export const defaultIntervalsOfDayWps: IntervalsOfDayWps = [
    new IntervalsOfDayWps_Item(
        new Time24Wps(0, 0, 0, undefined, undefined, undefined, undefined),
        new Time24Wps(0, 0, 0, undefined, undefined, undefined, undefined),
    ),
];
/* END_OF_SYMBOL_DEFINITION defaultIntervalsOfDayWps */

/* eslint-enable */
