/* eslint-disable */
import {
    ENUMERATED
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
const SGSNMOLCSRecord_locationMethod_msBasedEOTD: SGSNMOLCSRecord_locationMethod = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msBasedEOTD
 * @constant
 * @type {number}
 */
export
const msBasedEOTD: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_msBasedEOTD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_msAssistedEOTD
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_msAssistedEOTD: SGSNMOLCSRecord_locationMethod = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msAssistedEOTD
 * @constant
 * @type {number}
 */
export
const msAssistedEOTD: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_msAssistedEOTD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGPS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGPS: SGSNMOLCSRecord_locationMethod = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGPS
 * @constant
 * @type {number}
 */
export
const assistedGPS: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_assistedGPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_msBasedOTDOA
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_msBasedOTDOA: SGSNMOLCSRecord_locationMethod = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msBasedOTDOA
 * @constant
 * @type {number}
 */
export
const msBasedOTDOA: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_msBasedOTDOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGANSS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGANSS: SGSNMOLCSRecord_locationMethod = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGANSS
 * @constant
 * @type {number}
 */
export
const assistedGANSS: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_assistedGANSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS
 * @constant
 * @type {number}
 */
export
const SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS: SGSNMOLCSRecord_locationMethod = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistedGPSandGANSS
 * @constant
 * @type {number}
 */
export
const assistedGPSandGANSS: SGSNMOLCSRecord_locationMethod = SGSNMOLCSRecord_locationMethod_assistedGPSandGANSS; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SGSNMOLCSRecord_locationMethod: $.ASN1Decoder<SGSNMOLCSRecord_locationMethod> = $._decodeEnumerated;

export
const _encode_SGSNMOLCSRecord_locationMethod: $.ASN1Encoder<SGSNMOLCSRecord_locationMethod> = $._encodeEnumerated;

/* eslint-enable */
