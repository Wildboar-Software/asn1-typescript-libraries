/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformHardwareCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformHardwareCapabilities  ::=  BIT STRING {
 *     iOMMUSupport (0),
 *     trustedExecutionEnvironment (1),
 *     physicalTamperProtection (2),
 *     physicalTamperDetection (3),
 *     firmwareFlashWP (4),
 *     externalDMASupport (5)
 * }
 * ```
 */
export
type PlatformHardwareCapabilities = BIT_STRING;

/**
 * @summary PlatformHardwareCapabilities_iOMMUSupport
 * @constant
 */
export
const PlatformHardwareCapabilities_iOMMUSupport: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary iOMMUSupport
 * @constant
 */
export
const iOMMUSupport: number = PlatformHardwareCapabilities_iOMMUSupport; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_trustedExecutionEnvironment
 * @constant
 */
export
const PlatformHardwareCapabilities_trustedExecutionEnvironment: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary trustedExecutionEnvironment
 * @constant
 */
export
const trustedExecutionEnvironment: number = PlatformHardwareCapabilities_trustedExecutionEnvironment; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_physicalTamperProtection
 * @constant
 */
export
const PlatformHardwareCapabilities_physicalTamperProtection: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary physicalTamperProtection
 * @constant
 */
export
const physicalTamperProtection: number = PlatformHardwareCapabilities_physicalTamperProtection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_physicalTamperDetection
 * @constant
 */
export
const PlatformHardwareCapabilities_physicalTamperDetection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary physicalTamperDetection
 * @constant
 */
export
const physicalTamperDetection: number = PlatformHardwareCapabilities_physicalTamperDetection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_firmwareFlashWP
 * @constant
 */
export
const PlatformHardwareCapabilities_firmwareFlashWP: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary firmwareFlashWP
 * @constant
 */
export
const firmwareFlashWP: number = PlatformHardwareCapabilities_firmwareFlashWP; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_externalDMASupport
 * @constant
 */
export
const PlatformHardwareCapabilities_externalDMASupport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary externalDMASupport
 * @constant
 */
export
const externalDMASupport: number = PlatformHardwareCapabilities_externalDMASupport; /* SHORT_NAMED_BIT */

export
const _decode_PlatformHardwareCapabilities: $.ASN1Decoder<PlatformHardwareCapabilities> = $._decodeBitString;

export
const _encode_PlatformHardwareCapabilities: $.ASN1Encoder<PlatformHardwareCapabilities> = $._encodeBitString;

/* eslint-enable */
