/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Emergency {
    imminent = 1,
    peril = 2,
    cancel = 3,
}

/**
 * @summary Emergency
 * @description
 * 
 * MCPTT peril condition of a PTC group call: imminent peril, peril, or
 * cancellation of that alert.
 * 
 * Conditional on the group-call records in clause 17.3 when the call is a peril
 * or imminent-peril alert, or when that alert is cancelled.
 * 
 * 3GPP TS 33.108, clause 17.3 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Emergency          ::=  ENUMERATED
 * {
 *     -- MCPTT services indication of peril condition.
 *     imminent  (1),
 *     peril      (2),
 *     cancel      (3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Emergency = _enum_for_Emergency | ENUMERATED;

/**
 * @summary Emergency_imminent
 * @description
 * 
 * MCPTT imminent-peril alert on a PTC group call.
 * 
 * 3GPP TS 33.108, table 17.3.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const Emergency_imminent = _enum_for_Emergency.imminent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imminent
 * @description
 * 
 * MCPTT imminent-peril alert (table 17.3.2).
 * @constant
 * @type {number}
 */
export
const imminent = Emergency_imminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_peril
 * @description
 * 
 * MCPTT peril alert on a PTC group call.
 * 
 * 3GPP TS 33.108, table 17.3.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const Emergency_peril = _enum_for_Emergency.peril; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary peril
 * @description
 * 
 * MCPTT peril alert (table 17.3.2).
 * @constant
 * @type {number}
 */
export
const peril = Emergency_peril; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_cancel
 * @description
 * 
 * Cancellation of the MCPTT peril or imminent-peril alert.
 * 
 * 3GPP TS 33.108, table 17.3.3 and annex B.3.
 * @constant
 * @type {number}
 */
export
const Emergency_cancel = _enum_for_Emergency.cancel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @description
 * 
 * Cancellation of the MCPTT peril alert (table 17.3.3).
 * @constant
 * @type {number}
 */
export
const cancel = Emergency_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Emergency: $.ASN1Decoder<Emergency> = $._decodeEnumerated;
export const _encode_Emergency: $.ASN1Encoder<Emergency> = $._encodeEnumerated;


/* eslint-enable */
