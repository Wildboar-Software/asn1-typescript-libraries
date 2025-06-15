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
} from "asn1-ts";
import { WeekMask, _decode_WeekMask, _encode_WeekMask } from "../Attribute-ASN1Module/WeekMask.ta.mjs";
import { defaultIntervalsOfDay } from "../Attribute-ASN1Module/defaultIntervalsOfDay.va.mjs";
import { WeekMask_Item } from "../Attribute-ASN1Module/WeekMask-Item.ta.mjs";

/**
 * @summary defaultWeekMask
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * defaultWeekMask WeekMask ::= {
 *   {daysOfWeek      '1111111'B,
 *    intervalsOfDay  defaultIntervalsOfDay}
 * }
 * ```
 * 
 * @constant
 */
export
const defaultWeekMask: WeekMask = [
    new WeekMask_Item(
        new Uint8ClampedArray([1, 1, 1, 1, 1, 1, 1]),
        defaultIntervalsOfDay,
    ),
];

/* eslint-enable */
