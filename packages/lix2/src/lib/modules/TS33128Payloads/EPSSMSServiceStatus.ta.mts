/* eslint-disable */

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

/**
 * @summary Decodes an ASN.1 element into a(n) EPSSMSServiceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSSMSServiceStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EPSSMSServiceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSSMSServiceStatus, encoded as an ASN.1 Element.
 */
export const _encode_EPSSMSServiceStatus = $._encodeEnumerated;


/* eslint-enable */
