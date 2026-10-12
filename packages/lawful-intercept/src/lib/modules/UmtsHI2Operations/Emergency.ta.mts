/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const Emergency_imminent: Emergency = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imminent
 * @constant
 * @type {number}
 */
export
const imminent: Emergency = Emergency_imminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_peril
 * @constant
 * @type {number}
 */
export
const Emergency_peril: Emergency = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary peril
 * @constant
 * @type {number}
 */
export
const peril: Emergency = Emergency_peril; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_cancel
 * @constant
 * @type {number}
 */
export
const Emergency_cancel: Emergency = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: Emergency = Emergency_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Emergency: $.ASN1Decoder<Emergency> = $._decodeEnumerated;
export const _encode_Emergency: $.ASN1Encoder<Emergency> = $._encodeEnumerated;


/* eslint-enable */
