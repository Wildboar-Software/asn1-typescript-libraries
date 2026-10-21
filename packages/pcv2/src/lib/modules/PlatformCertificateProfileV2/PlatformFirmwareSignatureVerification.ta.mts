/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PlatformFirmwareSignatureVerification
 * @description
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
 * @constant
 */
export
const PlatformFirmwareSignatureVerification_hardwareSRTM: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hardwareSRTM
 * @constant
 */
export
const hardwareSRTM: number = PlatformFirmwareSignatureVerification_hardwareSRTM; /* SHORT_NAMED_BIT */

/**
 * @summary PlatformFirmwareSignatureVerification_secureBoot
 * @constant
 */
export
const PlatformFirmwareSignatureVerification_secureBoot: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary secureBoot
 * @constant
 */
export
const secureBoot: number = PlatformFirmwareSignatureVerification_secureBoot; /* SHORT_NAMED_BIT */

export
const _decode_PlatformFirmwareSignatureVerification: $.ASN1Decoder<PlatformFirmwareSignatureVerification> = $._decodeBitString;

export
const _encode_PlatformFirmwareSignatureVerification: $.ASN1Encoder<PlatformFirmwareSignatureVerification> = $._encodeBitString;

/* eslint-enable */
