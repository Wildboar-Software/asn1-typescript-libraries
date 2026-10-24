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
 * MCPTT peril condition on a PTC group call (module comment). Conditional when
 * the call is a peril or imminent-peril alert, or the cancel of that alert
 * (tables 17.3.2, 17.3.3, and 17.3.4). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
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
 * Imminent-peril condition (module comment; tables 17.3.2 and 17.3.4).
 * 
 * @constant
 * @type {number}
 */
export
const Emergency_imminent: Emergency = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imminent
 * @description
 * 
 * Imminent-peril alert (clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const imminent: Emergency = Emergency_imminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_peril
 * @description
 * 
 * Peril condition (module comment; tables 17.3.2 and 17.3.4).
 * 
 * @constant
 * @type {number}
 */
export
const Emergency_peril: Emergency = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary peril
 * @description
 * 
 * Peril alert (clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const peril: Emergency = Emergency_peril; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_cancel
 * @description
 * 
 * The peril or imminent-peril alert was cancelled (table 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const Emergency_cancel: Emergency = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @description
 * 
 * Peril alert cancelled (clause 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const cancel: Emergency = Emergency_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Emergency: $.ASN1Decoder<Emergency> = $._decodeEnumerated;
export const _encode_Emergency: $.ASN1Encoder<Emergency> = $._encodeEnumerated;


/* eslint-enable */
