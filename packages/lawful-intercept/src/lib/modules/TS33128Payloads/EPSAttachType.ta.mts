/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSAttachType
 * @description
 * 
 * The EPSAttachType provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.11.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSAttachType {
    /**
     * @description
     *
     * The attach type is an EPS attach.
     *
     * 3GPP TS 33.128, clause 8.5.5.
     */
    ePSAttach = 1,
    /**
     * @description
     *
     * The attach type is a combined EPS/IMSI attach.
     *
     * 3GPP TS 33.128, clause 8.5.5.
     */
    combinedEPSIMSIAttach = 2,
    /**
     * @description
     *
     * The attach type is an EPS RLOS attach.
     *
     * 3GPP TS 33.128, clause 8.5.5.
     */
    ePSRLOSAttach = 3,
    /**
     * @description
     *
     * The attach type is an EPS Emergency attach.
     *
     * 3GPP TS 33.128, clause 8.5.5.
     */
    ePSEmergencyAttach = 4,
    /**
     * @description
     *
     * The attach type is unknown or using a reserved type.
     *
     * 3GPP TS 33.128, clause 8.5.5.
     */
    reserved = 5,
}

/**
 * @summary EPSAttachType
 * @description
 * 
 * The EPSAttachType provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.11.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSAttachType = _enum_for_EPSAttachType;

/**
 * @summary EPSAttachType
 * @description
 * 
 * The EPSAttachType provides information on the attach type used by the UE.
 * Derived from the enumerations in TS 24.301 [51] clause 9.9.3.11.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSAttachType  ::=  ENUMERATED
 * {
 *     ePSAttach(1),
 *     combinedEPSIMSIAttach(2),
 *     ePSRLOSAttach(3),
 *     ePSEmergencyAttach(4),
 *     reserved(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSAttachType = _enum_for_EPSAttachType;

/**
 * @summary EPSAttachType_ePSAttach
 * @description
 *
 * The attach type is an EPS attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSAttach
 * @description
 *
 * The attach type is an EPS attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_combinedEPSIMSIAttach
 * @description
 *
 * The attach type is a combined EPS/IMSI attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachType_combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIAttach
 * @description
 *
 * The attach type is a combined EPS/IMSI attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSRLOSAttach
 * @description
 *
 * The attach type is an EPS RLOS attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSRLOSAttach
 * @description
 *
 * The attach type is an EPS RLOS attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSEmergencyAttach
 * @description
 *
 * The attach type is an EPS Emergency attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSEmergencyAttach
 * @description
 *
 * The attach type is an EPS Emergency attach.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_reserved
 * @description
 *
 * The attach type is unknown or using a reserved type.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const EPSAttachType_reserved: EPSAttachType = EPSAttachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description
 *
 * The attach type is unknown or using a reserved type.
 *
 * 3GPP TS 33.128, clause 8.5.5.
 *
 * @constant
 * @type {number}
 */
export
const reserved: EPSAttachType = EPSAttachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSAttachType: $.ASN1Decoder<EPSAttachType> = $._decodeEnumerated;
export const _encode_EPSAttachType: $.ASN1Encoder<EPSAttachType> = $._encodeEnumerated;


/* eslint-enable */
