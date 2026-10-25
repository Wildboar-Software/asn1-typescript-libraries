/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * The EPSSMSServiceStatus provides information on status of SMS Services.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.4B.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * SMS Services ar not available.
     *
     * 3GPP TS 33.128, clause 8.5.7.
     */
    sMSServicesNotAvailable = 1,
    /**
     * @description
     *
     * SMS Services not available for this UE in this PLMN.
     *
     * 3GPP TS 33.128, clause 8.5.7.
     */
    sMSServicesNotAvailableInThisPLMN = 2,
    /**
     * @description
     *
     * SMS Services unavailable due to Network failure.
     *
     * 3GPP TS 33.128, clause 8.5.7.
     */
    networkFailure = 3,
    /**
     * @description
     *
     * SMS Services unavailable due to congestion.
     *
     * 3GPP TS 33.128, clause 8.5.7.
     */
    congestion = 4,
}

/**
 * @summary EPSSMSServiceStatus
 * @description
 * 
 * The EPSSMSServiceStatus provides information on status of SMS Services.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.4B.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The EPSSMSServiceStatus provides information on status of SMS Services.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.4B.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * SMS Services ar not available.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailable = EPSSMSServiceStatus.sMSServicesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailable
 * @description
 *
 * SMS Services ar not available.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailable = EPSSMSServiceStatus.sMSServicesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN
 * @description
 *
 * SMS Services not available for this UE in this PLMN.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_sMSServicesNotAvailableInThisPLMN = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSServicesNotAvailableInThisPLMN
 * @description
 *
 * SMS Services not available for this UE in this PLMN.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const sMSServicesNotAvailableInThisPLMN = EPSSMSServiceStatus.sMSServicesNotAvailableInThisPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_networkFailure
 * @description
 *
 * SMS Services unavailable due to Network failure.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_networkFailure = EPSSMSServiceStatus.networkFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkFailure
 * @description
 *
 * SMS Services unavailable due to Network failure.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const networkFailure = EPSSMSServiceStatus.networkFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSSMSServiceStatus_congestion
 * @description
 *
 * SMS Services unavailable due to congestion.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const EPSSMSServiceStatus_congestion = EPSSMSServiceStatus.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @description
 *
 * SMS Services unavailable due to congestion.
 *
 * 3GPP TS 33.128, clause 8.5.7.
 *
 * @constant
 * @type {number}
 */
export
const congestion = EPSSMSServiceStatus.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSSMSServiceStatus: $.ASN1Decoder<EPSSMSServiceStatus> = $._decodeEnumerated;
export const _encode_EPSSMSServiceStatus: $.ASN1Encoder<EPSSMSServiceStatus> = $._encodeEnumerated;


/* eslint-enable */
