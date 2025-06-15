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
import { IntervalsOfDay, _decode_IntervalsOfDay, _encode_IntervalsOfDay } from "../Attribute-ASN1Module/IntervalsOfDay.ta.mjs";
import { Time24, _decode_Time24, _encode_Time24 } from "../Attribute-ASN1Module/Time24.ta.mjs";
import { IntervalsOfDay_Item } from "../Attribute-ASN1Module/IntervalsOfDay-Item.ta.mjs";

/**
 * @summary defaultIntervalsOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * defaultIntervalsOfDay IntervalsOfDay ::= {
 *   {intervalStart  {hour 0, minute 0},
 *    intervalEnd    {hour 23, minute 59}}
 * }
 * ```
 * 
 * @constant
 */
export
const defaultIntervalsOfDay: IntervalsOfDay = [
    new IntervalsOfDay_Item(
        new Time24(0, 0),
        new Time24(23, 59),
    ), 
];

/* eslint-enable */
