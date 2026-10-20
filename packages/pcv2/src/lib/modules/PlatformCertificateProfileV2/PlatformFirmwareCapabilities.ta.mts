/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareCapabilities
 * @description
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
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwSetupAuthLocal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fwSetupAuthLocal
 * @constant
 */
export
const fwSetupAuthLocal: number = PlatformFirmwareCapabilities_fwSetupAuthLocal; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_fwSetupAuthRemote
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwSetupAuthRemote: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary fwSetupAuthRemote
 * @constant
 */
export
const fwSetupAuthRemote: number = PlatformFirmwareCapabilities_fwSetupAuthRemote; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_sMMProtection
 * @constant
 */
export
const PlatformFirmwareCapabilities_sMMProtection: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sMMProtection
 * @constant
 */
export
const sMMProtection: number = PlatformFirmwareCapabilities_sMMProtection; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareCapabilities_fwKernelDMAProtection
 * @constant
 */
export
const PlatformFirmwareCapabilities_fwKernelDMAProtection: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary fwKernelDMAProtection
 * @constant
 */
export
const fwKernelDMAProtection: number = PlatformFirmwareCapabilities_fwKernelDMAProtection; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareCapabilities: $.ASN1Decoder<PlatformFirmwareCapabilities> = $._decodeBitString;

export
const _encode_PlatformFirmwareCapabilities: $.ASN1Encoder<PlatformFirmwareCapabilities> = $._encodeBitString;

/* eslint-enable */
