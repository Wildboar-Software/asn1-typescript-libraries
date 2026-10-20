/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKCertificateGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKCertificateGenerationLocation {
    tpmManufacturer = 0,
    platformManufacturer = 1,
    ekCertSigner = 2,
}

/**
 * @summary EKCertificateGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKCertificateGenerationLocation = _enum_for_EKCertificateGenerationLocation;

/**
 * @summary EKCertificateGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKCertificateGenerationLocation = _enum_for_EKCertificateGenerationLocation;

/**
 * @summary EKCertificateGenerationLocation_tpmManufacturer
 * @constant
 * @type {number}
 */
export
const EKCertificateGenerationLocation_tpmManufacturer: EKCertificateGenerationLocation = EKCertificateGenerationLocation.tpmManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tpmManufacturer
 * @constant
 * @type {number}
 */
export
const tpmManufacturer: EKCertificateGenerationLocation = EKCertificateGenerationLocation.tpmManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKCertificateGenerationLocation_platformManufacturer
 * @constant
 * @type {number}
 */
export
const EKCertificateGenerationLocation_platformManufacturer: EKCertificateGenerationLocation = EKCertificateGenerationLocation.platformManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary platformManufacturer
 * @constant
 * @type {number}
 */
export
const platformManufacturer: EKCertificateGenerationLocation = EKCertificateGenerationLocation.platformManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKCertificateGenerationLocation_ekCertSigner
 * @constant
 * @type {number}
 */
export
const EKCertificateGenerationLocation_ekCertSigner: EKCertificateGenerationLocation = EKCertificateGenerationLocation.ekCertSigner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ekCertSigner
 * @constant
 * @type {number}
 */
export
const ekCertSigner: EKCertificateGenerationLocation = EKCertificateGenerationLocation.ekCertSigner; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKCertificateGenerationLocation: $.ASN1Decoder<EKCertificateGenerationLocation> = $._decodeEnumerated;

export
const _encode_EKCertificateGenerationLocation: $.ASN1Encoder<EKCertificateGenerationLocation> = $._encodeEnumerated;

/* eslint-enable */
