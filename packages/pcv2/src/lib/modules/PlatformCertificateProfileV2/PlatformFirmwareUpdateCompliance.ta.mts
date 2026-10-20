/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareUpdateCompliance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformFirmwareUpdateCompliance  ::=  BIT STRING {
 *     sp800-147 (0),
 *     sp800-147B (1),
 *     sp800-193 (2)
 * }
 * ```
 */
export
type PlatformFirmwareUpdateCompliance = BIT_STRING;

/**
 * @summary PlatformFirmwareUpdateCompliance_sp800_147
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_147: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sp800_147
 * @constant
 */
export
const sp800_147: number = PlatformFirmwareUpdateCompliance_sp800_147; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareUpdateCompliance_sp800_147B
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_147B: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sp800_147B
 * @constant
 */
export
const sp800_147B: number = PlatformFirmwareUpdateCompliance_sp800_147B; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareUpdateCompliance_sp800_193
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_193: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sp800_193
 * @constant
 */
export
const sp800_193: number = PlatformFirmwareUpdateCompliance_sp800_193; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareUpdateCompliance: $.ASN1Decoder<PlatformFirmwareUpdateCompliance> = $._decodeBitString;

export
const _encode_PlatformFirmwareUpdateCompliance: $.ASN1Encoder<PlatformFirmwareUpdateCompliance> = $._encodeBitString;

/* eslint-enable */
