/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DaylightSavingTime
 * @description
 *
 * Daylight Saving Time (in steps of 1 hour) used to adjust for summertime the
 * time zone of the location where the UE is attached in the visited network.
 * Returned in MAP-ANY-TIME-INTERROGATION. See 3GPP TS 29.272 (3GPP TS 29.002
 * V19.1.0 clauses 8.11.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DaylightSavingTime {
    noAdjustment = 0,
    plusOneHourAdjustment = 1,
    plusTwoHoursAdjustment = 2,
}

/**
 * @summary DaylightSavingTime
 * @description
 *
 * Daylight Saving Time (in steps of 1 hour) used to adjust for summertime the
 * time zone of the location where the UE is attached in the visited network.
 * Returned in MAP-ANY-TIME-INTERROGATION. See 3GPP TS 29.272 (3GPP TS 29.002
 * V19.1.0 clauses 8.11.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type DaylightSavingTime = _enum_for_DaylightSavingTime;

/**
 * @summary DaylightSavingTime
 * @description
 *
 * Daylight Saving Time (in steps of 1 hour) used to adjust for summertime the
 * time zone of the location where the UE is attached in the visited network.
 * Returned in MAP-ANY-TIME-INTERROGATION. See 3GPP TS 29.272 (3GPP TS 29.002
 * V19.1.0 clauses 8.11.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DaylightSavingTime  ::=  ENUMERATED {
 *     noAdjustment    (0),
 *     plusOneHourAdjustment    (1),
 *     plusTwoHoursAdjustment    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const DaylightSavingTime = _enum_for_DaylightSavingTime;

/**
 * @summary DaylightSavingTime_noAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_noAdjustment: DaylightSavingTime = DaylightSavingTime.noAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAdjustment
 * @constant
 * @type {number}
 */
export
const noAdjustment: DaylightSavingTime = DaylightSavingTime.noAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DaylightSavingTime_plusOneHourAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_plusOneHourAdjustment: DaylightSavingTime = DaylightSavingTime.plusOneHourAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plusOneHourAdjustment
 * @constant
 * @type {number}
 */
export
const plusOneHourAdjustment: DaylightSavingTime = DaylightSavingTime.plusOneHourAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DaylightSavingTime_plusTwoHoursAdjustment
 * @constant
 * @type {number}
 */
export
const DaylightSavingTime_plusTwoHoursAdjustment: DaylightSavingTime = DaylightSavingTime.plusTwoHoursAdjustment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plusTwoHoursAdjustment
 * @constant
 * @type {number}
 */
export
const plusTwoHoursAdjustment: DaylightSavingTime = DaylightSavingTime.plusTwoHoursAdjustment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DaylightSavingTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DaylightSavingTime = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DaylightSavingTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DaylightSavingTime, encoded as an ASN.1 Element.
 */
export const _encode_DaylightSavingTime = $._encodeEnumerated;


/* eslint-enable */
