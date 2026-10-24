/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareUpdateCompliance
 * @description
 *
 * Which NIST secure-update publication the platform firmware update mechanism
 * follows. Carried by `platformFirmwareUpdateComplianceTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
 * @description
 *
 * Platform firmware update complies with NIST SP 800-147. The profile spells
 * the bit `sp800-147`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_147: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sp800_147
 * @description
 *
 * Platform firmware update complies with NIST SP 800-147. The profile spells
 * the bit `sp800-147`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const sp800_147: number = PlatformFirmwareUpdateCompliance_sp800_147; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareUpdateCompliance_sp800_147B
 * @description
 *
 * Platform firmware update complies with NIST SP 800-147B. The profile limits
 * this bit to server platforms and spells it `sp800-147B`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_147B: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sp800_147B
 * @description
 *
 * Platform firmware update complies with NIST SP 800-147B. The profile limits
 * this bit to server platforms and spells it `sp800-147B`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const sp800_147B: number = PlatformFirmwareUpdateCompliance_sp800_147B; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareUpdateCompliance_sp800_193
 * @description
 *
 * Platform firmware update complies with NIST SP 800-193. The profile spells
 * the bit `sp800-193`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareUpdateCompliance_sp800_193: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sp800_193
 * @description
 *
 * Platform firmware update complies with NIST SP 800-193. The profile spells
 * the bit `sp800-193`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const sp800_193: number = PlatformFirmwareUpdateCompliance_sp800_193; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareUpdateCompliance: $.ASN1Decoder<PlatformFirmwareUpdateCompliance> = $._decodeBitString;

export
const _encode_PlatformFirmwareUpdateCompliance: $.ASN1Encoder<PlatformFirmwareUpdateCompliance> = $._encodeBitString;

/* eslint-enable */
