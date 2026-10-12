/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSSMSServiceStatus {
    sMSServicesNotAvailable = 1,
    sMSServicesNotAvailableInThisPLMN = 2,
    networkFailure = 3,
    congestion = 4,
}

/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSSMSServiceStatus = _enum_for_EPSSMSServiceStatus;

/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSMSServiceStatus  ::=  ENUMERATED
 * {
 *     sMSServicesNotAvailable(1),
 *     sMSServicesNotAvailableInThisPLMN(2),
 *     networkFailure(3),
 *     congestion(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSSMSServiceStatus = _enum_for_EPSSMSServiceStatus;

/**
 * @summary EPSSMSServiceStatus_sMSServicesNotAvailable
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailable: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailable
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailable: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailableInThisPLMN
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailableInThisPLMN: EPSSMSServiceStatus = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_networkFailure
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_networkFailure: EPSSMSServiceStatus = EPSSMSServiceStatus.networkFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkFailure
 * @constant
 * @type {number}
 */
export
const networkFailure: EPSSMSServiceStatus = EPSSMSServiceStatus.networkFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_congestion
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_congestion: EPSSMSServiceStatus = EPSSMSServiceStatus.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: EPSSMSServiceStatus = EPSSMSServiceStatus.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSSMSServiceStatus: $.ASN1Decoder<EPSSMSServiceStatus> = $._decodeEnumerated;
export const _encode_EPSSMSServiceStatus: $.ASN1Encoder<EPSSMSServiceStatus> = $._encodeEnumerated;


/* eslint-enable */
