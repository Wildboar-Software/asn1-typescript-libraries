/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSAttachType
 * @description
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
    ePSAttach = 1,
    combinedEPSIMSIAttach = 2,
    ePSRLOSAttach = 3,
    ePSEmergencyAttach = 4,
    reserved = 5,
}

/**
 * @summary EPSAttachType
 * @description
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
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSAttach
 * @constant
 * @type {number}
 */
export
const ePSAttach: EPSAttachType = EPSAttachType.ePSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_combinedEPSIMSIAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combinedEPSIMSIAttach
 * @constant
 * @type {number}
 */
export
const combinedEPSIMSIAttach: EPSAttachType = EPSAttachType.combinedEPSIMSIAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSRLOSAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSRLOSAttach
 * @constant
 * @type {number}
 */
export
const ePSRLOSAttach: EPSAttachType = EPSAttachType.ePSRLOSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_ePSEmergencyAttach
 * @constant
 * @type {number}
 */
export
const EPSAttachType_ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePSEmergencyAttach
 * @constant
 * @type {number}
 */
export
const ePSEmergencyAttach: EPSAttachType = EPSAttachType.ePSEmergencyAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSAttachType_reserved
 * @constant
 * @type {number}
 */
export
const EPSAttachType_reserved: EPSAttachType = EPSAttachType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EPSAttachType = EPSAttachType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_EPSAttachType: $.ASN1Decoder<EPSAttachType> = $._decodeEnumerated;

export const _encode_EPSAttachType: $.ASN1Encoder<EPSAttachType> = $._encodeEnumerated;


/* eslint-enable */
