/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKGenerationLocation {
    tpmManufacturer = 0,
    platformManufacturer = 1,
    ekCertSigner = 2,
}

/**
 * @summary EKGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKGenerationLocation = _enum_for_EKGenerationLocation;

/**
 * @summary EKGenerationLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKGenerationLocation = _enum_for_EKGenerationLocation;

/**
 * @summary EKGenerationLocation_tpmManufacturer
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_tpmManufacturer: EKGenerationLocation = EKGenerationLocation.tpmManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tpmManufacturer
 * @constant
 * @type {number}
 */
export
const tpmManufacturer: EKGenerationLocation = EKGenerationLocation.tpmManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationLocation_platformManufacturer
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_platformManufacturer: EKGenerationLocation = EKGenerationLocation.platformManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary platformManufacturer
 * @constant
 * @type {number}
 */
export
const platformManufacturer: EKGenerationLocation = EKGenerationLocation.platformManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationLocation_ekCertSigner
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_ekCertSigner: EKGenerationLocation = EKGenerationLocation.ekCertSigner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ekCertSigner
 * @constant
 * @type {number}
 */
export
const ekCertSigner: EKGenerationLocation = EKGenerationLocation.ekCertSigner; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKGenerationLocation: $.ASN1Decoder<EKGenerationLocation> = $._decodeEnumerated;

export
const _encode_EKGenerationLocation: $.ASN1Encoder<EKGenerationLocation> = $._encodeEnumerated;

/* eslint-enable */
