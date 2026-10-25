/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SGSNMOLCSRecord_locationMethod {
    msBasedEOTD = 0,
    msAssistedEOTD = 1,
    assistedGPS = 2,
    msBasedOTDOA = 3,
    assistedGANSS = 4,
    assistedGPSandGANSS = 5,
}

/**
 * @summary SGSNMOLCSRecord_locationMethod
 * @description
 *
 * The Location Method identifier refers to the argument of LCS-MOLR that was
 * invoked as defined in TS 24.080 [209].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.28.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMOLCSRecord-locationMethod ::= ENUMERATED {
 *    msBasedEOTD            ( 0 ),
 *    msAssistedEOTD         ( 1 ),
 *    assistedGPS            ( 2 ),
 *    ... ,
 *    msBasedOTDOA           ( 3 ),
 *    assistedGANSS          ( 4 ),
 *    assistedGPSandGANSS    ( 5 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SGSNMOLCSRecord_locationMethod = _enum_for_SGSNMOLCSRecord_locationMethod | ENUMERATED;

/**
 * @summary SGSNMOLCSRecord_locationMethod_msBasedEOTD
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_msBasedEOTD: _enum_for_SGSNMOLCSRecord_locationMethod.msBasedEOTD = _enum_for_SGSNMOLCSRecord_locationMethod.msBasedEOTD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msBasedEOTD
 * @constant
 * @type {number}
 */
export
const msBasedEOTD: _enum_for_SGSNMOLCSRecord_locationMethod.msBasedEOTD = SGSNMOLCSRecord_locationMethod_msBasedEOTD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_msAssistedEOTD
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_msAssistedEOTD: _enum_for_SGSNMOLCSRecord_locationMethod.msAssistedEOTD = _enum_for_SGSNMOLCSRecord_locationMethod.msAssistedEOTD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msAssistedEOTD
 * @constant
 * @type {number}
 */
export
const msAssistedEOTD: _enum_for_SGSNMOLCSRecord_locationMethod.msAssistedEOTD = SGSNMOLCSRecord_locationMethod_msAssistedEOTD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGPS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGPS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPS = _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGPS
 * @constant
 * @type {number}
 */
export
const assistedGPS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPS = SGSNMOLCSRecord_locationMethod_assistedGPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_msBasedOTDOA
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_msBasedOTDOA: _enum_for_SGSNMOLCSRecord_locationMethod.msBasedOTDOA = _enum_for_SGSNMOLCSRecord_locationMethod.msBasedOTDOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msBasedOTDOA
 * @constant
 * @type {number}
 */
export
const msBasedOTDOA: _enum_for_SGSNMOLCSRecord_locationMethod.msBasedOTDOA = SGSNMOLCSRecord_locationMethod_msBasedOTDOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGANSS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGANSS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGANSS = _enum_for_SGSNMOLCSRecord_locationMethod.assistedGANSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGANSS
 * @constant
 * @type {number}
 */
export
const assistedGANSS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGANSS = SGSNMOLCSRecord_locationMethod_assistedGANSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPSandGANSS = _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPSandGANSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGPSandGANSS
 * @constant
 * @type {number}
 */
export
const assistedGPSandGANSS: _enum_for_SGSNMOLCSRecord_locationMethod.assistedGPSandGANSS = SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SGSNMOLCSRecord_locationMethod: $.ASN1Decoder<SGSNMOLCSRecord_locationMethod> = $._decodeEnumerated;

export
const _encode_SGSNMOLCSRecord_locationMethod: $.ASN1Encoder<SGSNMOLCSRecord_locationMethod> = $._encodeEnumerated;

/* eslint-enable */
