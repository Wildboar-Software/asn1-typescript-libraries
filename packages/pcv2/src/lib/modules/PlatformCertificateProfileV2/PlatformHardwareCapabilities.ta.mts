/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformHardwareCapabilities
 * @description
 *
 * Security capabilities of the motherboard or of components physically attached
 * to it. Carried by `platformHardwareCapabilitiesTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
 * @description
 *
 * The platform provides an IOMMU to protect against DMA attacks.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_iOMMUSupport: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary iOMMUSupport
 * @description
 *
 * The platform provides an IOMMU to protect against DMA attacks.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const iOMMUSupport: number = PlatformHardwareCapabilities_iOMMUSupport; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_trustedExecutionEnvironment
 * @description
 *
 * The platform contains a Trusted Execution Environment.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_trustedExecutionEnvironment: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary trustedExecutionEnvironment
 * @description
 *
 * The platform contains a Trusted Execution Environment.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const trustedExecutionEnvironment: number = PlatformHardwareCapabilities_trustedExecutionEnvironment; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_physicalTamperProtection
 * @description
 *
 * The platform supports physical tamper protection, for example a chassis lock.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_physicalTamperProtection: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary physicalTamperProtection
 * @description
 *
 * The platform supports physical tamper protection, for example a chassis lock.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const physicalTamperProtection: number = PlatformHardwareCapabilities_physicalTamperProtection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_physicalTamperDetection
 * @description
 *
 * The platform supports physical tamper detection, for example a chassis
 * intrusion switch.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_physicalTamperDetection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary physicalTamperDetection
 * @description
 *
 * The platform supports physical tamper detection, for example a chassis
 * intrusion switch.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const physicalTamperDetection: number = PlatformHardwareCapabilities_physicalTamperDetection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_firmwareFlashWP
 * @description
 *
 * The platform supports firmware flash write protection, for example from the
 * chipset or the flash part.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_firmwareFlashWP: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary firmwareFlashWP
 * @description
 *
 * The platform supports firmware flash write protection, for example from the
 * chipset or the flash part.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const firmwareFlashWP: number = PlatformHardwareCapabilities_firmwareFlashWP; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformHardwareCapabilities_externalDMASupport
 * @description
 *
 * The platform has external ports capable of DMA, for example USB-C or USB 3.0.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformHardwareCapabilities_externalDMASupport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary externalDMASupport
 * @description
 *
 * The platform has external ports capable of DMA, for example USB-C or USB 3.0.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const externalDMASupport: number = PlatformHardwareCapabilities_externalDMASupport; /* SHORT_NAMED_BIT */

export
const _decode_PlatformHardwareCapabilities: $.ASN1Decoder<PlatformHardwareCapabilities> = $._decodeBitString;

export
const _encode_PlatformHardwareCapabilities: $.ASN1Encoder<PlatformHardwareCapabilities> = $._encodeBitString;

/* eslint-enable */
