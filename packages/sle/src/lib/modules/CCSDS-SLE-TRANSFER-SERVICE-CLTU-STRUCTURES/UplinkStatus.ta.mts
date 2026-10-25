/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UplinkStatus
 * @description
 * 
 * Forward-link state taken from the CLCW in the return telemetry. Reported on
 * every CLTU-ASYNC-NOTIFY and CLTU-STATUS-REPORT. The CLCW comes from the
 * channel named by clcw-physical-channel and clcw-global-VCID when those
 * parameters are configured. CCSDS 912.1-B-5, sections 3.7.2.11 and 3.9.2.9.
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
 * @description
 *
 * The provider has received no CLCW from the spacecraft, so forward-link lock
 * cannot be reported. CCSDS 912.1-B-5, sections 3.7.2.11 and 3.9.2.9.
 * @constant
 * @type {number}
 */
export
const UplinkStatus_uplinkStatusNotAvailable = 0 satisfies UplinkStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_uplinkStatusNotAvailable
 * @description
 *
 * No CLCW has been received (CCSDS 912.1-B-5, section 3.7.2.11).
 * @constant
 * @type {number}
 */
export
const uplinkStatusNotAvailable = UplinkStatus_uplinkStatusNotAvailable satisfies UplinkStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @description
 *
 * At least one CLCW has been received, and in the latest CLCW the No RF
 * Available flag is 1. CCSDS 912.1-B-5, sections 3.7.2.11 and 3.9.2.9.
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noRfAvailable = 1 satisfies UplinkStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noRfAvailable
 * @description
 *
 * The latest CLCW has No RF Available set (CCSDS 912.1-B-5, section 3.7.2.11).
 * @constant
 * @type {number}
 */
export
const noRfAvailable = UplinkStatus_noRfAvailable satisfies UplinkStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @description
 *
 * At least one CLCW has been received. In the latest CLCW, No RF Available is 0
 * and No Bit Lock is 1. CCSDS 912.1-B-5, sections 3.7.2.11 and 3.9.2.9.
 * @constant
 * @type {number}
 */
export
const UplinkStatus_noBitLock = 2 satisfies UplinkStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_noBitLock
 * @description
 *
 * The latest CLCW has RF available and No Bit Lock set (CCSDS 912.1-B-5,
 * section 3.7.2.11).
 * @constant
 * @type {number}
 */
export
const noBitLock = UplinkStatus_noBitLock satisfies UplinkStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @description
 *
 * At least one CLCW has been received, and in the latest CLCW both No RF
 * Available and No Bit Lock are 0. CCSDS 912.1-B-5, sections 3.7.2.11 and
 * 3.9.2.9.
 * @constant
 * @type {number}
 */
export
const UplinkStatus_nominal = 3 satisfies UplinkStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UplinkStatus_nominal
 * @description
 *
 * The latest CLCW shows RF available and bit lock (CCSDS 912.1-B-5, section
 * 3.7.2.11).
 * @constant
 * @type {number}
 */
export
const nominal = UplinkStatus_nominal satisfies UplinkStatus; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UplinkStatus: $.ASN1Decoder<UplinkStatus> = $._decodeInteger;
export const _encode_UplinkStatus: $.ASN1Encoder<UplinkStatus> = $._encodeInteger;


/* eslint-enable */
