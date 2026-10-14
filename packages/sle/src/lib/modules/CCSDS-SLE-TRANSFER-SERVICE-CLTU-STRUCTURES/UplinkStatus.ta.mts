/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UplinkStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UplinkStatus                   ::=    INTEGER
 * {  uplinkStatusNotAvailable      (0)
 * ,  noRfAvailable                 (1)
 * ,  noBitLock                     (2)
 * ,  nominal                       (3)
 * }
 * ```
 */
export
type UplinkStatus = INTEGER;

/**
 * @summary UplinkStatus_uplinkStatusNotAvailable
 * @constant
 * @type {number}
 */
export
const UplinkStatus_uplinkStatusNotAvailable: UplinkStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_uplinkStatusNotAvailable
 * @constant
 * @type {number}
 */
export
const uplinkStatusNotAvailable: UplinkStatus = UplinkStatus_uplinkStatusNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noRfAvailable: UplinkStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @constant
 * @type {number}
 */
export
const noRfAvailable: UplinkStatus = UplinkStatus_noRfAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noBitLock: UplinkStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @constant
 * @type {number}
 */
export
const noBitLock: UplinkStatus = UplinkStatus_noBitLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @constant
 * @type {number}
 */
export
const UplinkStatus_nominal: UplinkStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @constant
 * @type {number}
 */
export
const nominal: UplinkStatus = UplinkStatus_nominal; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UplinkStatus: $.ASN1Decoder<UplinkStatus> = $._decodeInteger;
export const _encode_UplinkStatus: $.ASN1Encoder<UplinkStatus> = $._encodeInteger;


/* eslint-enable */
