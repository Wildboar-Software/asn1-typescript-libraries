/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareCapabilities
 * @description
 *
 * Security capabilities provided by platform firmware. Carried by
 * `platformFirmwareCapabilitiesTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformFirmwareCapabilities  ::=  BIT STRING {
 *     fwSetupAuthLocal (0),
 *     fwSetupAuthRemote (1),
 *     sMMProtection (2),
 *     fwKernelDMAProtection (3)
 * }
 * ```
 */
export
type PlatformFirmwareCapabilities = BIT_STRING;

/**
 * @summary PlatformFirmwareCapabilities_fwSetupAuthLocal
 * @description
 *
 * The platform supports authentication by a physically present user for
 * platform firmware setup.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwSetupAuthLocal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fwSetupAuthLocal
 * @description
 *
 * The platform supports authentication by a physically present user for
 * platform firmware setup.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const fwSetupAuthLocal: number = PlatformFirmwareCapabilities_fwSetupAuthLocal; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_fwSetupAuthRemote
 * @description
 *
 * The platform supports authentication by a remote entity for platform firmware
 * setup.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwSetupAuthRemote: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary fwSetupAuthRemote
 * @description
 *
 * The platform supports authentication by a remote entity for platform firmware
 * setup.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const fwSetupAuthRemote: number = PlatformFirmwareCapabilities_fwSetupAuthRemote; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_sMMProtection
 * @description
 *
 * The platform supports Management Mode memory protection, for example SMM
 * protections provided by the chipset and supported by the platform firmware.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareCapabilities_sMMProtection: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sMMProtection
 * @description
 *
 * The platform supports Management Mode memory protection, for example SMM
 * protections provided by the chipset and supported by the platform firmware.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const sMMProtection: number = PlatformFirmwareCapabilities_sMMProtection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_fwKernelDMAProtection
 * @description
 *
 * Firmware supports settings that let kernel drivers use firmware protections,
 * such as disabling bus mastering, and hardware protections, such as an IOMMU,
 * against DMA from peripherals such as PCIe, USB-C, and USB 3.0. Setting this
 * bit means `iOMMUSupport` is also set.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwKernelDMAProtection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary fwKernelDMAProtection
 * @description
 *
 * Firmware supports settings that let kernel drivers use firmware protections,
 * such as disabling bus mastering, and hardware protections, such as an IOMMU,
 * against DMA from peripherals such as PCIe, USB-C, and USB 3.0. Setting this
 * bit means `iOMMUSupport` is also set.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const fwKernelDMAProtection: number = PlatformFirmwareCapabilities_fwKernelDMAProtection; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareCapabilities: $.ASN1Decoder<PlatformFirmwareCapabilities> = $._decodeBitString;

export
const _encode_PlatformFirmwareCapabilities: $.ASN1Encoder<PlatformFirmwareCapabilities> = $._encodeBitString;

/* eslint-enable */
