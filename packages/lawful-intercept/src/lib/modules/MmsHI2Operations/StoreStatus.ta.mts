/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_StoreStatus {
    success = 0,
    errorTransient = 1,
    high = 2,
}

/**
 * @summary StoreStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreStatus  ::=  ENUMERATED
 * {
 *     success         (0),
 *     errorTransient     (1),
 *     high            (2),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StoreStatus = _enum_for_StoreStatus | ENUMERATED;

/**
 * @summary StoreStatus_success
 * @constant
 * @type {number}
 */
export
const StoreStatus_success: StoreStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: StoreStatus = StoreStatus_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_errorTransient
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransient: StoreStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransient
 * @constant
 * @type {number}
 */
export
const errorTransient: StoreStatus = StoreStatus_errorTransient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_high
 * @constant
 * @type {number}
 */
export
const StoreStatus_high: StoreStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: StoreStatus = StoreStatus_high; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_StoreStatus: $.ASN1Decoder<StoreStatus> = $._decodeEnumerated;

export const _encode_StoreStatus: $.ASN1Encoder<StoreStatus> = $._encodeEnumerated;


/* eslint-enable */
