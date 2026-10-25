/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareSignatureVerification
 * @description
 *
 * How the platform verifies platform-firmware signatures during boot. Carried
 * by `platformFirmwareSignatureVerificationTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformFirmwareSignatureVerification  ::=  BIT STRING {
 *     hardwareSRTM (0),
 *     secureBoot (1)
 * }
 * ```
 */
export
type PlatformFirmwareSignatureVerification = BIT_STRING;

/**
 * @summary PlatformFirmwareSignatureVerification_hardwareSRTM
 * @description
 *
 * An H-CRTM is present and verifies the signature of the next stage of the
 * initial boot block.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareSignatureVerification_hardwareSRTM: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hardwareSRTM
 * @description
 *
 * An H-CRTM is present and verifies the signature of the next stage of the
 * initial boot block.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const hardwareSRTM: number = PlatformFirmwareSignatureVerification_hardwareSRTM; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareSignatureVerification_secureBoot
 * @description
 *
 * UEFI Secure Boot is present.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const PlatformFirmwareSignatureVerification_secureBoot: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secureBoot
 * @description
 *
 * UEFI Secure Boot is present.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 */
export
const secureBoot: number = PlatformFirmwareSignatureVerification_secureBoot; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareSignatureVerification: $.ASN1Decoder<PlatformFirmwareSignatureVerification> = $._decodeBitString;

export
const _encode_PlatformFirmwareSignatureVerification: $.ASN1Encoder<PlatformFirmwareSignatureVerification> = $._encodeBitString;

/* eslint-enable */
